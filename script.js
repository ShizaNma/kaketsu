const app = new PIXI.Application({ width: 450, height: 800 }); 
document.body.appendChild(app.view); 
app.renderer.view.style.position = "relative"; 
app.renderer.view.style.left = "50%"; 
app.renderer.view.style.transform = "translate3d( -50%, 0, 0)"; 
app.renderer.view.style.width = "450px"; 
app.renderer.view.style.height = "800px"; 
app.renderer.backgroundColor = 0x000000; 
PIXI.loader.add("tofu.png"); 
PIXI.loader.load((loader, resources) =>
{
    let gameLoops = []; 
    let speed = 4; 
    function addGameLoop(gameLoopFunction)
    {
        app.ticker.add(gameLoopFunction); 
        gameLoops.push(gameLoopFunction); 
    }
    function removeAllGameLoops()
    {
        for (const gameLoop of gameLoops)
        {
            app.ticker.remove(gameLoop); 
        }
        gameLoops = []; 
    }
    function removeAllScene()
    {
        for (const scene of app.stage.children)
        {
            app.stage.removeChild(scene); 
        }
    }
    function tofuevent(eventData)
    {
        speed = -speed; 
    }
    function createStartScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        const startScene = new PIXI.Container(); 
        app.stage.addChild(startScene); 
        const titleStyle = new PIXI.TextStyle(
            {
                fill: "#ffffff", 
                fontSize: 32,
                fontStyle: "italic"
            }); 
        const title = new PIXI.Text('KAKETSU GAME', titleStyle); 
        title.anchor.x = 0.5; 
        title.x = 225; 
        title.y = 200; 
        startScene.addChild(title); 
        
        const buttonContainer = new PIXI.Container(); 
        buttonContainer.x = 225; 
        buttonContainer.y = 500; 
        buttonContainer.anchor.x = 0.5; 
        buttonContainer.anchor.y = 0.5; 
        startScene.addChild(buttonContainer);　
        
        const button = new PIXI.Graphics(); 
        button.beginFill(0xffffff); 
        button.drawRect(0, 0, 180, 50); 
        button.endFill(); 
        buttonContainer.addChild(button); 
        
    }
    function createGameScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        const gameScene = new PIXI.Container(); 
        app.stage.addChild(gameScene); 
        const tofu = new PIXI.Sprite(resources["tofu.png"].texture); 
        tofu.x = 175; 
        tofu.y = 0; 
        tofu.interactive = true; 
        tofu.on('touchstart', tofuevent); 
        gameScene.addChild(tofu); 
        function gameLoop()
        {
            tofu.y += speed; 
            if (tofu.y < 0 || tofu.y > 700)
            {
                speed = -speed; 
            }
        }
        
        addGameLoop(gameLoop); 
    }
    createStartScene(); 
});
