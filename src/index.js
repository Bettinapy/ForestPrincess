import "./styles/index.scss";
import './scripts/loaders';
import Game from './scripts/game';
import { loadLevel } from "./scripts/loaders";
import { 
  createGroundLayer,
  createMainBgLayer, 
  createCharacterLayer,
  createDashboardLayer,
  createTileMatrix
} from './scripts/levels/level-draw';
import {
  loadBackgroundLayers,
  loadBackgroundTiles,
} from "./scripts/sprite-load";
import Layer from './scripts/levels/layers';
import {createPrincessIdle} from './scripts/princess';
import {createEnemyWalk} from './scripts/enemies';
import FixedTimeLoop from './scripts/fixed-time-loop';
import KeyboardInput from './scripts/keyboard-input';
import Camera from './scripts/camera';
import Sound from './scripts/dashboard/sound';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");
  const offsetLeft = canvas.offsetLeft;
  const offsetTop = canvas.offsetTop;

  const game = new Game(ctx, canvas);
  game.showMainPage();
  // keyboard input to start the game: press 'r'
  window.addEventListener('keydown', function(event){
    event.preventDefault();
    if(event.keyCode === 82){
      game.start()
    }

  })

  // Promise.all([
  //   loadBackgroundLayers(),
  //   loadBackgroundTiles(),
  //   loadLevel("level-1"),
  //   createPrincessIdle(),
  //   createEnemyWalk(),
  // ]).then(([mainBg, jungleTiles, level, princessIdle, enemy]) => {
    
  //   enemy.pos.setVector(600,0)

  //   // push to layers array and draw
  //   const layer = new Layer();
  //   layer.layers.push(createMainBgLayer(mainBg));
  //   layer.layers.push(createGroundLayer(level.backgrounds, jungleTiles));
  //   layer.layers.push(createCharacterLayer(princessIdle));
  //   layer.layers.push(createCharacterLayer(enemy));
  //   layer.layers.push(createDashboardLayer(princessIdle))
    
  //   // add to characters
  //   layer.characters.add(princessIdle);
  //   layer.characters.add(enemy);

  //   // create matrix
  //   createTileMatrix(level.backgrounds, layer.tiles)
   
  //   // scrolling camera
  //   const camera = new Camera;

  //   // keyboard input
  //   const input = new KeyboardInput(princessIdle);
  //   input.listenKeys(window);

  //   // background music
  //   const bgMusic = new Sound("src/audios/background.ogg")
  //   //bgMusic.loop();
  //   bgMusic.play();

  //   const fixedLoop = new FixedTimeLoop();
  //   fixedLoop.update = function update(timestep){

  //     layer.update(timestep, camera);

  //     if (princessIdle.pos.x > 300) {
  //       camera.pos.x = princessIdle.pos.x - 300;
  //     }
  //     layer.draw(ctx, camera);
      
  //   }
  //   fixedLoop.start();
  // });

});