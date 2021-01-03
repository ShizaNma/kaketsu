const app = new PIXI.Application({ width: 450, height: 800 }); 
document.body.appendChild(app.view); 
app.renderer.view.style.position = "relative"; 
app.renderer.view.style.left = "50%"; 
app.renderer.view.style.transform = "translate3d( -50%, 0, 0)"; 
app.renderer.view.style.width = "450px"; 
app.renderer.view.style.height = "800px"; 
app.renderer.backgroundColor = 0x000000; 
PIXI.loader.add("tofu.png")
PIXI.loader.load((loader, resources) =>
{
    let gameLoops = []; 
    let tofuVy = 8; 
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
    function createGameScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        const gameScene = new PIXI.Container(); 
        app.stage.addChild(gameScene); 
        const tofu = new PIXI.Sprite(resources["tofu.png"].texture); 
        tofu.x = 175; 
        tofu.y = 0; 
        gameScene.addChild(tofu); 
        function gameLoop()
        {
            tofu.y += tofuVy; 
            if (tofu.y > 700)
            {
                tofuVy = -tofuVy; 
            }
        }
        addGameLoop(gameLoop); 
    }
    createGameScene(); 
});
