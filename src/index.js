import "./styles/index.scss";
import './scripts/loaders';
import Sprite from './scripts/sprite';
import { loadLevel } from "./scripts/loaders";
import { 
  createGroundLayer,
  createMainBgLayer, 
  createPrincessLayer,
  createTileMatrix
} from './scripts/levels/level-draw';
import {
  loadBackgroundLayers,
  loadBackgroundTiles,
  loadPrincessIdle,
} from "./scripts/sprite-load";
import Layer from './scripts/levels/layers';
import {createPrincessIdle} from './scripts/princess';
import FixedTimeLoop from './scripts/fixed-time-loop';
import KeyboardInput from './scripts/keyboard-input';
import Matrix from './scripts/levels/matrix';
window.Matrix = Matrix;

const HEIGHT = 400;
const WIDTH = 600;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");
  
  Promise.all([
    loadBackgroundLayers(),
    loadBackgroundTiles(),
    loadLevel("level-1"),
    createPrincessIdle(),
  ]).then(([mainBg, jungleTiles, level, princessIdle]) => {
    
    const layer = new Layer();
    layer.layers.push(createMainBgLayer(mainBg));
    layer.layers.push(createGroundLayer(level.backgrounds, jungleTiles));
    layer.layers.push(createPrincessLayer(princessIdle));
    
    // add to characters
    layer.characters.add(princessIdle)

    // create matrix
    createTileMatrix(level.backgrounds, layer.tiles)
   

    // keyboard input
    const input = new KeyboardInput(princessIdle);
    const SPACE = 32;  
    input.listenKeys(window);
    
    // for TESTING
    // ['mousedown', 'mousemove'].forEach(eventName => {
    //   canvas.addEventListener(eventName, event => {
    //     if (event.buttons === 1) {
    //       princessIdle.vel.setVector(0, 0);
    //       princessIdle.pos.setVector(event.offsetX, event.offsetY);
    //     }
    //   });
    // });

    const gravity = 1000;
    princessIdle.pos.setVector(1, 270);

      
    const fixedLoop = new FixedTimeLoop();
    fixedLoop.update = function update(timestep){
      layer.draw(ctx);

      layer.update(timestep);
      // princessIdle.jump.update(princessIdle, timestep);
      // princessIdle.run.update(princessIdle, timestep)
      //princessIdle.move.update(princessIdle, timestep);
      //princessIdle.update(timestep);
      princessIdle.vel.y += gravity * timestep;
    }
    fixedLoop.start();
  });

});