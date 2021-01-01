var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var tofu = new Image();
tofu.src = "tofu.png";
tofu.onload = function() {
ctx.drawImage(tofu, 175, 0);
};
