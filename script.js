const app = new PIXI.Application({ width: 800, height: 600 }); 
document.getElementById("app").appendChild(app.view); 
app.renderer.view.style.position = "relative"; 
app.renderer.view.style.left = "50%"; 
app.renderer.view.style.transform = "translate3d( -50%, 0, 0)"; 
app.renderer.view.style.width = "800px"; 
app.renderer.view.style.height = "600px"; 
app.renderer.backgroundColor = 0x000000; 
PIXI.loader.add("tofu.png"); 
PIXI.loader.load((loader, resources) =>
{
    let gameLoops = []; 
    var xspeed = createXRandom(); 
    var yspeed = createYRandom(); 
    var xrand = xspeed; 
    var yrand = yspeed; 
    var score = 0; 
    
    function createXRandom()
    {
        var xrand = Math.floor( Math.random() * 7 ) + 3; 
        return xrand
    }
    function createYRandom()
    {
        var yrand = Math.floor( Math.random() * 7 ) + 3;
        return yrand
    }
    function two()
    {
        var twon = Math.floor( Math.random() * 2,10 ); 
        return twon
    }
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
    
    function startFunction()
    {
        createGameScene();
    }
    
    function createStartScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        var twom = two(); 
        if (twom == 1)
        {
            xspeed = createXRandom(); 
        }else
        {
            xspeed = createXRandom() *　-1; 
        }
        var twom = two(); 
        if (twom== 1)
        {
            yspeed = createYRandom(); 
        }else
        {
            yspeed = createYRandom() * -1; 
        }
        xrand = xspeed; 
        yrand = yspeed; 
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
        title.x = 400; 
        title.y = 150; 
        startScene.addChild(title); 
        
        const buttonContainer = new PIXI.Container(); 
        buttonContainer.x = 310; 
        buttonContainer.y = 400; 
        startScene.addChild(buttonContainer);　
        
        const button = new PIXI.Graphics(); 
        button.beginFill(0xffffff); 
        button.drawRect(0, 0, 180, 50); 
        button.endFill(); 
        button.interactive = true; 
        button.on("pointerdown", startFunction); 
        buttonContainer.addChild(button); 
        
        const startStyle = new PIXI.TextStyle(
        {
            fill: "#000000",
            fontSize: 32
        }); 
        const start = new PIXI.Text('START', startStyle); 
        start.anchor.x = 0.5; 
        start.anchor.y = 0.5; 
        start.x = 90; 
        start.y = 25; 
        buttonContainer.addChild(start); 
        
    }
    function createGameScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        const gameScene = new PIXI.Container(); 
        app.stage.addChild(gameScene); 
        const tofu = new PIXI.Sprite(resources["tofu.png"].texture); 
        tofu.x = 350; 
        tofu.y = 250; 
        tofu.interactive = true; 
        tofu.on('pointerdown', tofuevent); 
        gameScene.addChild(tofu); 
        
        function tofuevent(eventData)
        {
            score = score + 1;
            if (tofu.x > 350)
            {
                xspeed = createXRandom() * -1;
            }else
            {
                xspeed = createXRandom();
            }
            if (tofu.y > 250)
            {
                yspeed = createYRandom() * -1;
            }else
            {
                yspeed = createYRandom();
            }
            var scoreText = "SCORE:${score}";
            document.getElementById('score').innerHTML = scoreText;
        }
        
        function gameLoop()
        {
            tofu.x += xspeed; 
            tofu.y += yspeed; 
            if (tofu.y < 0 || tofu.y > 500 || tofu.x < 0 || tofu.x > 700)
            {
                createStartScene(); 
            }
        }
        
        addGameLoop(gameLoop); 
    }
    
    createStartScene(); 
});
