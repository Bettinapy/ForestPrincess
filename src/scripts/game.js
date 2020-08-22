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
    drawDashboardBg,
    drawTitle,
    drawButtons,
}from './dashboard/dashboard-draw';

class Game{
    constructor(ctx, canvas){
        this.bgMusic = new Sound("src/audios/background.ogg");
        this.ctx = ctx;
        this.canvas = canvas;
    }

    showMainPage(){
        Promise.all([
            loadBackgroundLayers()
        ]).then(([bg]) => {
            drawDashboardBg(bg, this.ctx);
            drawTitle(this.ctx);
            drawButtons(this.canvas, this.ctx)
            
        })
    }

    start(){
        Promise.all([
            loadBackgroundLayers(),
            loadBackgroundTiles(),
            loadLevel("level-1"),
            createPrincessIdle(),
            createEnemyWalk(),
        ]).then(([mainBg, jungleTiles, level, princessIdle, enemy]) => {

            enemy.pos.setVector(600, 0)

            // push to layers array and draw
            const layer = new Layer();
            layer.layers.push(createMainBgLayer(mainBg));
            layer.layers.push(createGroundLayer(level.backgrounds, jungleTiles));
            layer.layers.push(createCharacterLayer(princessIdle));
            layer.layers.push(createCharacterLayer(enemy));
            layer.layers.push(createDashboardLayer(princessIdle))

            // add to characters
            layer.characters.add(princessIdle);
            layer.characters.add(enemy);

            // create matrix
            createTileMatrix(level.backgrounds, layer.tiles)

            // scrolling camera
            const camera = new Camera;

            // keyboard input
            const input = new KeyboardInput(princessIdle);
            input.listenKeys(window);

            // background music
            const bgMusic = new Sound("src/audios/background.ogg")
            //bgMusic.loop();
            bgMusic.play();

            const fixedLoop = new FixedTimeLoop();
            fixedLoop.update = function update(timestep) {

                layer.update(timestep, camera);

                if (princessIdle.pos.x > 300) {
                    camera.pos.x = princessIdle.pos.x - 300;
                }
                layer.draw(ctx, camera);

            }
            fixedLoop.start();
        });
    }
}

export default Game;