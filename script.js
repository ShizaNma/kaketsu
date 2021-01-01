const app = new PIXI.Application({ width: 450, height: 800 }); 
document.body.appendChild(app.view); 
app.renderer.view.style.position = "relative"; 
app.renderer.view.style.width = "450px"; 
app.renderer.view.style.height = "800px"; 
app.renderer.view.style.display = "block"; 
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
    function createGameScene()
    {
        removeAllScene(); 
        removeAllGameLoops(); 
        
