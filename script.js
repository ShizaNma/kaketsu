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
if(y + dy > canvas.height - 100 || y + dy < 0) {
dy = -dy;
}
}
}

function Click(e) {
var rect = canvas.getBoundingClientRect();
var point = { x: e.clientX - rect.left, y: e.clientY - rect.top};
if(point.x < x + 100 && point.x > x && point.y < y + 100 && point.y > y) {
dy = -dy;
}
}

canvas.addEventListener('click', Click, false);
setInterval(draw, 40);
