function clock() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}
let secondsTimers = 0;
function timer() {
    if(secondsTimers === 10){
        secondsTimers = 0;
    }
    secondsTimers+=1
    document.getElementById("timer").innerHTML = `${secondsTimers}`;
}

//TODO Поменять интервал обновляения
setInterval(clock, 10000);
setInterval(timer, 1000);
timer();
clock();