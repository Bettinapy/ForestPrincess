import "./styles/index.scss";
import './scripts/loaders';
import Sprite from './scripts/sprite';
import { loadImage, loadLevel } from "./scripts/loaders";
import { 
  createGroundLayer,
  createMainBgLayer, 
  createPrincessLayer
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
   
    
    const input = new KeyboardInput(princessIdle);
    debugger
    const SPACE = 32;
    console.log(input.spacePressed);
  
    input.listenKeys(window);
    
    const gravity = 7;
    princessIdle.pos.setVector(1,3);
    //princessIdle.vel.setVector(3,-5);   
      
    const fixedLoop = new FixedTimeLoop();
    fixedLoop.update = function update(timestep){
      layer.draw(ctx);
      princessIdle.jump.update(princessIdle, timestep);
      princessIdle.run.update(princessIdle, timestep)
      //princessIdle.move.update(princessIdle, timestep);
      //princessIdle.update(timestep);
      princessIdle.vel.y += gravity * timestep;
    }
    fixedLoop.start();
  });

});