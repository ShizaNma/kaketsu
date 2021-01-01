let app = new PIXI.Application({
width: 450, height: 800, backgroundColor: 0x000000, 
});
let el = document.getElementById('app');
el.appendChild(app.view);

let tofusprt= new PIXI.Sprite.from('tofu.png');
tofusprt.anchor.x = 0.5;
tofusprt.anchor.y = 0.5;
tofusprt.x = app.screen.width / 2;
tofusprt.y = 0;
app.stage.addChild(tofusprt);
