import Sprite from './sprite';
import {loadImage} from './loaders';

export function loadBackgroundLayers(){
    return loadImage("src/images/main-bg.png").then((mainImg) => {
      const mainBg = new Sprite(mainImg, 600, 400);
      mainBg.create("mainBg", 0, 0);
      debugger
      return mainBg;
    });
}

export function loadBackgroundTiles(){
    return loadImage("src/images/jungle_tileset.png")
        .then((jungleImg) => {
            console.log("tiles loaded");
            const jungleTiles = new Sprite(jungleImg, 30, 30);
            jungleTiles.create("flatGround", 70, 225);
            jungleTiles.create("ground", 354, 210);
            jungleTiles.create("greenGrass", 90, 34)
            return jungleTiles;
    });
}

export function loadPrincessIdle() {
  return loadImage("src/images/princess/Idle.png").then((princessIdleImg) => {
    console.log("princess loaded");
    const princessIdle = new Sprite(princessIdleImg, 40, 40);
    princessIdle.create("princessIdle", 24, 11);
    return princessIdle;
  });
}