import Sprite from './sprite';
import {loadImage} from './loaders';

export function loadBackgroundLayers(){
    return loadImage("src/images/main-bg.png").then((mainImg) => {
      const mainBg = new Sprite(mainImg, 600, 450);
      mainBg.create("mainBg", 0, 0);

      return mainBg;
    });
}

export function loadBackgroundTiles(){
    return loadImage("src/images/jungle_tileset.png")
        .then((jungleImg) => {
            
            const jungleTiles = new Sprite(jungleImg, 30, 30);
            jungleTiles.create("flatGround", 70, 225);
            jungleTiles.create("ground", 354, 210);
            jungleTiles.create("greenGrass", 161, 33);
            return jungleTiles;
    });
}

export function loadPrincessIdle() {
  return loadImage("src/images/princess/Idle.png").then((princessIdleImg) => {

    const princessIdle = new Sprite(princessIdleImg, 30, 30);
    princessIdle.create("princessIdle", 24, 11);
    return princessIdle;
  });
}