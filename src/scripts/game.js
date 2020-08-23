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
            // // draw titles
            //createTitleLayer('Forest', 300, 100, "Bungee Shade")(this.ctx);
            // createTitleLayer('Princess', 300, 150, "Bungee Shade")(this.ctx);
            
         
            // draw buttons
            const game = this;
            // const startBtn = new Button('start', 260, 220, 80, 30, this.canvas, this.ctx, game);
            // startBtn.handler = function(ctx){
            //     // window.removeEventListener('mousemove', e => {
            //     //     startBtn.hoverHandler(e);
            //     //     quitBtn.hoverHandler(e);
            //     // })
            //     // window.removeEventListener('click', e => {
            //     //     startBtn.clickHandler(e);
            //     //     quitBtn.clickHandler(e);
            //     // })
            //     ctx.start();
            // }
            //startBtn.listenMouse();
            
            const quitBtn = new Button('quit', 260, 260, 80, 30, this.canvas, game);
            layer.layers.push(createButtonLayer(quitBtn))
            const context = this.ctx;
            quitBtn.handler = function (game) {
                // window.removeEventListener('mousemove', e => {
                //     startBtn.hoverHandler(e);
                //     quitBtn.hoverHandler(e);
                // })
                //context.clearRect(0, 0, 600, 390)
                window.removeEventListener('click', e => {
                    e.preventDefault();
                    //startBtn.clickHandler(e);
                    quitBtn.clickHandler(e);
                })
                game.showMainPage();
                return
            }
            // quitBtn.listenMouse();
            // mouse event
            // window.addEventListener('mousemove', e=>{
            //     startBtn.hoverHandler(e);
            //     quitBtn.hoverHandler(e);
            // })

            window.addEventListener('click', e => {
                e.preventDefault();
                //startBtn.clickHandler(e);
                quitBtn.clickHandler(e);
            }, false)
            //quitBtn.draw(context)
            layer.draw(context)
            console.log(layer.layers)
            
        })
    }

    start(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
        Promise.all([
            loadBackgroundLayers(),
            loadBackgroundTiles(),
            loadLevel("level-1"),
            createPrincessIdle(),
            createEnemyWalk(),
        ]).then(([mainBg, jungleTiles, level, princessIdle, enemy]) => {
            const player = princessIdle.player;
            enemy.pos.setVector(600, 0);

            // push to layers array and draw
            const layer = new Layer();
            
            // create matrix
            createTileMatrix(level.backgrounds, layer.tiles)

            layer.layers.push(createMainBgLayer(mainBg));
            layer.layers.push(createGroundLayer(jungleTiles, layer.tiles));
            layer.layers.push(createCharacterLayer(princessIdle));
            layer.layers.push(createCharacterLayer(enemy));
            layer.layers.push(createDashboardLayer(player))

            // add to characters
            layer.characters.add(princessIdle);
            layer.characters.add(enemy);

            // scrolling camera
            const camera = new Camera;

            // keyboard input
            const input = new KeyboardInput(princessIdle);
            input.listenKeys(window);

            // background music
            this.startMusic.loop();
            this.startMusic.play();
            
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
        this.startMusic.pause();
        this.gameOverMusic.play();
        createTitleLayer('Game Over', 300, 100, "VT323")(this.ctx);
        const game = this;

        const restartBtn = new Button('restart', 260, 220, 80, 30, this.canvas, this.ctx, game);
        restartBtn.handler = function (ctx) {
            window.removeEventListener('mousemove', e => {
                restartBtn.hoverHandler(e);
                quitBtn.hoverHandler(e);
            })
            window.removeEventListener('click', e => {
                restartBtn.clickHandler(e);
                quitBtn.clickHandler(e);
            })
            ctx.start();
        }
        //restartBtn.listenMouse();
        
        const quitBtn = new Button('quit', 260, 260, 80, 30, this.canvas, this.ctx, game);
        quitBtn.handler = function (ctx) {
            window.removeEventListener('mousemove', e => {
                restartBtn.hoverHandler(e);
                quitBtn.hoverHandler(e);
            })
            window.removeEventListener('click', e => {
                restartBtn.clickHandler(e);
                quitBtn.clickHandler(e);
            })
            ctx.showMainPage();
        }
        //quitBtn.listenMouse();

        // mouse event
        window.addEventListener('mousemove', e => {
            restartBtn.hoverHandler(e);
            quitBtn.hoverHandler(e);
        })

        window.addEventListener('click', e => {
            restartBtn.clickHandler(e);
            quitBtn.clickHandler(e);
        })
    }
}

export default Game;