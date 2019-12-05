var graphName = "canvas";
var x=0;
var y=0;
var r=1;

function sendRequestByJS(){
    sendRequest([{name:"X-value", value:x}, {name:"Y-value", value:y}, {name:"R-value", value:r}]);
}


//TODO Сделать график, как по условию
function f() {
    const canvas = document.getElementById(graphName);

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
}

f()