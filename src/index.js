import "./styles/index.scss";
import './scripts/loaders';
import Sprite from './scripts/sprite';
import { loadImage, loadLevel } from "./scripts/loaders";
import { 
  drawGround, 
  createGroundLayer,
  createMainBgLayer, 
  createPrincessIdleLayer
} from './scripts/levels/level-draw';
import {
  loadBackgroundLayers,
  loadBackgroundTiles,
  loadPrincessIdle,
} from "./scripts/sprite-load";
import Layer from './scripts/layers';

const HEIGHT = 400;
const WIDTH = 600;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");
  
  Promise.all([
    loadBackgroundLayers(),
    loadBackgroundTiles(),
    loadLevel("level-1"),
    loadPrincessIdle(),
  ]).then(([mainBg, jungleTiles, level, princessIdle]) => {
    const pos = {x: 0, y: 7.5}
    const layer = new Layer();
    layer.layers.push(createMainBgLayer(mainBg));
    layer.layers.push(createGroundLayer(level.backgrounds, jungleTiles));
    layer.layers.push(createPrincessIdleLayer(princessIdle, pos));
    debugger;
     
    function update(){
      layer.draw(ctx);
      pos.x += 0.1;
      //pos.y += 0.1;
      // call update function the browser draws something on the screen
      requestAnimationFrame(update);
    }
    update();
  });

});