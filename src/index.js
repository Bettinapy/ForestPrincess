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
import Camera from './scripts/camera';


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
   

    // scrolling camera
    const camera = new Camera;


    // keyboard input
    const input = new KeyboardInput(princessIdle);
    input.listenKeys(window);

    
    //princessIdle.pos.setVector(1, 270);
      
    const fixedLoop = new FixedTimeLoop();
    fixedLoop.update = function update(timestep){

      layer.update(timestep, camera);

      if (princessIdle.pos.x > 300) {
        camera.pos.x = princessIdle.pos.x - 300;
      }
      layer.draw(ctx, camera);
      
    }
    fixedLoop.start();
  });

});