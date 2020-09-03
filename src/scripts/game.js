import Sound from './dashboard/sound';
import { loadLevel } from "./loaders";
import {
    createGroundLayer,
    createMainBgLayer,
    createCharacterLayer,
    createDashboardLayer,
    createTileMatrix
} from './levels/level-draw';
import {
    loadBackgroundLayers,
    loadBackgroundTiles,
} from "./sprite-load";
import Layer from './levels/layers';
import { createPrincessIdle } from './princess';
import { createEnemyWalk } from './enemies';
import FixedTimeLoop from './fixed-time-loop';
import KeyboardInput from './keyboard-input';
import Camera from './camera';
import {
    createTitleLayer,
    createButtonLayer
}from './dashboard/dashboard-draw';
import Button from './dashboard/button';

class Game{
    constructor(ctx, canvas){
        this.startMusic = new Sound("src/audios/background.ogg");
        this.gameOverMusic = new Sound("src/audios/game-over.mp3");
        this.buttonMusic = new Sound("src/audios/button.ogg");
        this.playerMusic = new Sound("src/audios/player-music.mp3")
        this.ctx = ctx;
        this.canvas = canvas;
        this.offsetLeft = this.canvas.offsetLeft;
        this.offsetTop = this.canvas.offsetTop;
        this.start = this.start.bind(this);
        this.gameOverView = this.gameOverView.bind(this);
        this.buttons = new Set();
        this.bgs = [];
        //this.showMainPage();
    }

    showMainPage(){
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        Promise.all([
            loadBackgroundLayers()
        ]).then(([bg]) => {
            const layer = new Layer();
            layer.layers.push(createMainBgLayer(bg));
            layer.layers.push(createTitleLayer('Forest', 300, 100, "Bungee Shade"));
            layer.layers.push(createTitleLayer('Princess', 300, 150, "Bungee Shade"));
            layer.layers.push(createTitleLayer('-- Press SPACE to jump --', 300, 290, "VT323", 20));
            layer.layers.push(createTitleLayer('-- Press -> to move --', 300, 310, "VT323", 20));
                              
            const context = this.ctx;
            const game = this;
            const canvas = this.canvas;

            // background music
            this.gameOverMusic.pause();
            this.startMusic.loop();
            this.startMusic.play();

            const startBtn = new Button('start', 260, 220, 80, 30, this.canvas, this.ctx, game);
            //const quitBtn = new Button('quit', 260, 260, 80, 30, this.canvas);

            function hover(e){
                e.preventDefault();
                startBtn.hoverHandler(e, context);
                //quitBtn.hoverHandler(e, context);
            }

            function click(e){
                e.preventDefault();
                startBtn.clickHandler(e, context);
                //quitBtn.clickHandler(e, context);
            }

            canvas.addEventListener('mousemove', hover, true)
            canvas.addEventListener('click', click, true)
            
            startBtn.handler = function(){
                canvas.removeEventListener('mousemove', hover, true)
                canvas.removeEventListener('click', click, true)
                layer.layers = [];
                game.buttonMusic.play();
                game.start();
                return;
            }
            
            // quitBtn.handler = function () {
            //     canvas.removeEventListener('mousemove', hover, true)
            //     canvas.removeEventListener('click', click, true)
            //     layer.layers = [];
            //     game.showMainPage();
            //     return
            // }
            
            layer.layers.push(createButtonLayer(startBtn))
            //layer.layers.push(createButtonLayer(quitBtn))


            // mouse events
  
            layer.draw(context)
            
        })
    }

    start(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.startMusic.pause();
        Promise.all([
            loadBackgroundLayers(),
            loadBackgroundTiles(),
            loadLevel("level-1"),
            createPrincessIdle(),
            //createEnemyWalk(),
        ]).then(([mainBg, jungleTiles, level, princessIdle]) => {
            const player = princessIdle.player;
            //enemy.pos.setVector(600, 0);

            // push to layers array and draw
            const layer = new Layer();
            
            // create matrix
            createTileMatrix(level.backgrounds, layer.tiles)

            layer.layers.push(createMainBgLayer(mainBg));
            layer.layers.push(createGroundLayer(jungleTiles, layer.tiles));
            layer.layers.push(createCharacterLayer(princessIdle));
            //layer.layers.push(createCharacterLayer(enemy));
            layer.layers.push(createDashboardLayer(player))

            // add to characters
            let enemy
            layer.characters.push(princessIdle);
            level.enemies.forEach(({name, pos: [x,y]}) => {
                createEnemyWalk().then(enemy => {
                    enemy.pos.setVector(x,y);
                    layer.characters.push(enemy)
                    layer.layers.push(createCharacterLayer(enemy))
                });
            }) 
            //layer.characters.add(enemy);

            // scrolling camera
            const camera = new Camera;

            // keyboard input
            const input = new KeyboardInput(princessIdle);
            input.listenKeys(window);

            // background music
            this.startMusic.pause();
            this.gameOverMusic.pause();
            this.playerMusic.setVolumne(0.8);
            this.playerMusic.loop();
            this.playerMusic.play();
            
            const game = this;
            const context = this.ctx;
            const canvas = this.canvas;
            const fixedLoop = new FixedTimeLoop(1/60);
            fixedLoop.update = function update(timestep) {
                if(!layer.gameOver){

                    layer.update(timestep, camera);
                    
                    if (princessIdle.pos.x > 100) {
                        camera.pos.x = princessIdle.pos.x - 100;
                    }
                    layer.draw(context, camera);
                }else{
                    layer.layers = null;
                    layer.characters = null;
                    princessIdle.player.reset();
                    princessIdle.player.timer.resetTime();
                    game.gameOverView();
                     
                    return 'Game Over';
                }

            }
            fixedLoop.start();
        });
    }

    gameOverView(){
        this.playerMusic.pause();
        this.gameOverMusic.play();
        const layer = new Layer();

        layer.layers.push(createTitleLayer('Game Over', 300, 100, "VT323"))
        // createTitleLayer('Game Over', 300, 100, "VT323")(this.ctx);
        const game = this;
        const context = this.ctx;
        const canvas = this.canvas;

        const restartBtn = new Button('start', 260, 220, 80, 30, this.canvas);
        const quitBtn = new Button('quit', 260, 260, 80, 30, this.canvas);

        function hover(e) {
            e.preventDefault();
            restartBtn.hoverHandler(e, context);
            quitBtn.hoverHandler(e, context);
        }

        function click(e) {
            e.preventDefault();
            restartBtn.clickHandler(e, context);
            quitBtn.clickHandler(e, context);
        }

        // mouse event
        canvas.addEventListener('mousemove', hover, true)
        canvas.addEventListener('click', click, true)

        restartBtn.handler = function () {
            canvas.removeEventListener('mousemove', hover, true)
            canvas.removeEventListener('click', click, true)
            layer.layers = [];
            game.buttonMusic.play();
            game.start();
            return
        }

        
        quitBtn.handler = function () {
            canvas.removeEventListener('mousemove', hover, true)
            canvas.removeEventListener('click', click, true)
            layer.layers = [];
            game.buttonMusic.play();
            return game.showMainPage();
            
        }

        layer.layers.push(createButtonLayer(restartBtn))
        layer.layers.push(createButtonLayer(quitBtn))


        layer.draw(context)
    }
}

export default Game;