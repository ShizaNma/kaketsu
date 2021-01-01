let app = new PIXI.Application({
width: 450, height: 800, backgroundColor: 0x000000, 
});
let el = document.getElementById('app');
el.appendChild(app.view);

let tofutxtr= new PIXI.Texture.from('tofu.png');
let tofusprt = new PIXI.Sprite(tofutxtr);
tofusprt.anchor.x = 0.5;
tofusprt.anchor.y = 0.5;
tofusprt.x = app.screen.width / 2;
tofusprt.y = app.screen.height2;
app.stage.addChild(tofusprt);

tofusprt.interactive = true;
tofusprt.on('pointertap',tofuevent);
function tofuevent(e) {
alert(unko);
}
