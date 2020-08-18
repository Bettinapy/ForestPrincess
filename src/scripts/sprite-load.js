import Sprite from './sprite';
import {loadImage} from './loaders';

export function loadBackgroundLayers(ctx){
    loadImage("src/images/plx-1.png").then((bgLayer1) => {
      ctx.drawImage(bgLayer1, 0, 0, 600, 400);
    });
    loadImage("src/images/plx-2.png").then((bgLayer2) => {
      ctx.drawImage(bgLayer2, 0, 0, 600, 400);
    });
    loadImage("src/images/plx-3.png").then((bgLayer3) => {
      ctx.drawImage(bgLayer3, 0, 0, 600, 400);
    });
    loadImage("src/images/plx-4.png").then((bgLayer4) => {
      ctx.drawImage(bgLayer4, 0, 0, 600, 400);
    });
    loadImage("src/images/plx-5.png").then((bgLayer5) => {
      ctx.drawImage(bgLayer5, 0, 0, 600, 400);
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