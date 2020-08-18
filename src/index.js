import "./styles/index.scss";
import './scripts/loaders';
import Sprite from './scripts/sprite';
import { loadImage, loadLevel } from "./scripts/loaders";
import {drawLevel} from './scripts/levels/level-draw';
import {
  loadBackgroundLayers,
  loadBackgroundTiles,
  loadPrincessIdle,
} from "./scripts/sprite-load";
const HEIGHT = 400;
const WIDTH = 600;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");
  
  Promise.all([
    loadBackgroundLayers(ctx),
    loadBackgroundTiles(),
    loadLevel("level-1"),
    loadPrincessIdle(),
  ]).then(([layer, jungleTiles, level, princessIdle]) => {
    console.log("level loaded");
    console.log(level);
    debugger;
    if (level) {
      level.backgrounds.forEach((bg) => {
        drawLevel(bg, ctx, jungleTiles);
      });
    }
    princessIdle.draw("princessIdle", ctx, 0, 7.5,3,3)
  });

});