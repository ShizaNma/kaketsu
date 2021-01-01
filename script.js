var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 175;
var y = 0;
var dx = 2;
var dy = 4;

function draw() {
var tofu = new Image();
tofu.src = "tofu.png";
tofu.onload = function() {
ctx.drawImage(tofu, x, y);
y += dy;
};
};
setInterval(draw, 40);
