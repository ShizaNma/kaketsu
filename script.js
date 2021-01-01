var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(175, 0, 100, 100);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.drawImage(tofu.png, 175, 0)
