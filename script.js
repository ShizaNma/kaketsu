let app = new PIXI.Application({
width: 450, height: 800, backgroundColor: 0x000000, 
});
let el = document.getElementById('app');
el.appendChild(app.view);

PIXI.loader.add("tofu.png");
PIXI.loader.load((loader, resources) =>
{
let tofudy = 8;

function addGameLoop(gameLoopFunction)
{
app.ticker.add(gameLoopFunction);
gameLoops.push(gameLoopFunction);
}

let tofu= new PIXI.Sprite(resources["tofu.png"].texture);
tofu.anchor.x = 0.5;
tofu.anchor.y = 0.5;
tofu.x = app.screen.width / 2;
tofu.y = 50;
app.stage.addChild(tofu);
});

function gameLoop()
{
tofu.y += tofudy
if(tofu.y < 50 || tofu.y > 750)
{
tofudy = -tofudy
}
}
addGameLoop(gameLoop);
