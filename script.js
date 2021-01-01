var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(175, 0, 100, 100);
ctx.strokeStyle = "#FF0000";
ctx.stroke();
ctx.closePath();

ctx.drawImage(tofu.png, 175, 0)
