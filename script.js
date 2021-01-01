var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 175;
var y = 0;
var dx = 2;
var dy = 8;

function draw() {
var tofu = new Image();
tofu.src = "tofu.png";
tofu.onload = function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(tofu, x, y);
y += dy;
};
};
if(y > canvas.height) {
dy = -dy;
}
setInterval(draw, 40);
