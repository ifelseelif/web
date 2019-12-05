function sign(context) {
    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";

    context.font = "18px Arial";
    context.fillText("x", 290, 140);
    context.fillText("y", 135, 15);


    context.fillText('R', 160, 35);
    context.fillText('R/2', 160, 95);
    context.fillText('-R/2', 160, 214);
    context.fillText('-R', 160, 274);
    context.fillText('-R', 20, 140);
    context.fillText('-R/2', 70, 140);
    context.fillText('R/2', 197, 140);
    context.fillText('R', 265, 140);


    context.beginPath();
    // верхний R по x
    context.moveTo(145, 30);
    context.lineTo(155, 30);

    // верхний R/2 по x
    context.moveTo(145, 90);
    context.lineTo(155, 90);

    // нижний R/2 по x
    context.moveTo(145, 210);
    context.lineTo(155, 210);

    // нижний R по х
    context.moveTo(145, 270);
    context.lineTo(155, 270);

    // левый R по х
    context.moveTo(30, 145);
    context.lineTo(30, 155);

    // левый R/2 по х
    context.moveTo(90, 145);
    context.lineTo(90, 155);

    // правый R/2 по х
    context.moveTo(210, 145);
    context.lineTo(210, 155);

    // правый R по х
    context.moveTo(270, 145);
    context.lineTo(270, 155);
    context.closePath();

    context.stroke();
    drawPoints()
}

function draw() {
    const canvas = document.getElementById("zoneCanvas");

    const context = canvas.getContext("2d");

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, 300, 300);

    context.fillStyle = "#03A9F4"; // цвет для заливки фигур
    context.strokeStyle = "#03A9F4";


// рисуем фигуры
    context.beginPath();
    context.arc(150, 150, 120, 0, Math.PI / 2); // круг
    context.lineTo(150, 150);
    context.fill();
    context.fillRect(30, 150, 120, 120); // прямоугольник
    context.moveTo(150, 150);
    context.lineTo(210, 150);
    context.lineTo(150, 90);
    context.fill();
    context.closePath();
    context.stroke();

    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
// рисуем ось x
    context.beginPath();
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.lineTo(295, 145);
    context.moveTo(300, 150);
    context.lineTo(295, 155);

// рисуем ось y
    context.moveTo(150, 300);
    context.lineTo(150, 0);
    context.lineTo(145, 5);
    context.moveTo(150, 0);
    context.lineTo(155, 5);
    context.closePath();
    context.stroke();

    sign(context, "R");
}


function drawPoint(rad, relX, relY, color) {
    let canvas = document.getElementById("zoneCanvas");
    let context = canvas.getContext("2d");
    context.fillStyle = color;
    context.beginPath();
    context.arc(relX * 120 + 150, 150 - relY * 120, 4, 0, 2 * Math.PI);
    context.fill();

}

let click_x, click_y, user_r,x;

function validR() {
    const arrayOfR = document.getElementsByName('r');
    let isChecked = false;
    for (let i = 0; i < arrayOfR.length; i++) {
        if(arrayOfR[i].checked) {
            isChecked = true;
            user_r= parseFloat(arrayOfR[i].value);
            break;
        }
    }
    return isChecked;
}

function addListener() {
    let canvas = document.getElementById("zoneCanvas");
    canvas.addEventListener("mousedown", function(event) {

        if (validR()) {
            showMessage("");
            let rect = canvas.getBoundingClientRect();
            click_x = event.clientX - rect.right + rect.width / 2;
            click_y = rect.bottom - event.clientY - rect.height / 2;
            click_x = (click_x/ 120)* user_r;
            click_y = (click_y / 120) * user_r;
            sendRequest();
        }else {
            showMessage("<p>Выберите радиус</p>");
        }
    });
}

function showMessage(messageHTML) {
    document.getElementById("error-message").innerHTML=messageHTML;
}

function sendRequest() {
    let http = new XMLHttpRequest();
    let url = "/pipLab2_war/home";
    let params = "x="+click_x.toFixed(4)+"&y="+click_y.toFixed(4)+"&r="+user_r.toFixed(4);

    http.open('GET', url+'?'+params);
    http.onload = function(){
        document.location.href='/pipLab2_war/home';
    };
    http.send(null);
}

function validX() {
    const arrayOfR = document.getElementsByName('x');
    let isChecked = false;
    for (let i = 0; i < arrayOfR.length; i++) {
        if(arrayOfR[i].checked) {
            isChecked = true;
            x= parseFloat(arrayOfR[i].value);
            break;
        }
    }
    return isChecked;
}

let y;
function validY() {
    y =parseFloat(document.getElementById("y").value);
    if(isNaN(y) || y<-3 || y>3){
        return false;
    }
    return true;
}

function submit1() {
    showMessage("");
    if(!validR()){
        showMessage("<p>Не указан радиус</p>");
        return;
    }
    if(!validX()){
        showMessage("<p>Неверно указан x</p>");
        return;
    }
    if(!validY()){
        showMessage("<p>Неверно указан y</p>");
        return;
    }
    let http = new XMLHttpRequest();
    let url = "/pipLab2_war/home";
    let params = "x="+x+"&y="+y+"&r="+user_r;
    http.onload = function(){
        document.location.href='/pipLab2_war/home';
    };
    http.open('GET', url+'?'+params);
    http.send(null);
}
