var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(175, 0, 100, 100);
ctx.strokeStyle = "#FF0000";
ctx.stroke();
ctx.closePath();

var tofu = new Image();
tofu.src = "tofu.png";
ctx.drawImage(tofu, 175, 0);
