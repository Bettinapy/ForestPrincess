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
            jungleTiles.create('obstacleGrass', 64, 34, 80, 60);
            return jungleTiles;
    });
}

export function loadPrincessIdle() {
  return loadImage("src/images/princess/Idle.png").then((princessIdleImg) => {

    const princessIdle = new Sprite(princessIdleImg, 30, 30);
    princessIdle.create("idle-1", 24, 11);
    princessIdle.create("idle-2", 24, 59);
    princessIdle.create("idle-3", 24, 303);
    return princessIdle;
  });
}

export function loadPrincessRun() {
  return loadImage("src/images/princess/Run.png").then((princessRunImg) => {

    const princessRun = new Sprite(princessRunImg, 30, 30);
    princessRun.create("run-1", 24, 11);
    princessRun.create("run-2", 24, 59);
    princessRun.create("run-3", 24, 153);
    return princessRun;
  });
}

export function loadEnemyWalk() {
  return loadImage("src/images/enemies/walk.png").then((enemyWalkImg) => {

    const enemyWalk = new Sprite(enemyWalkImg, 20, 20);
    enemyWalk.create("walk-1", 29, 14);
    enemyWalk.create("walk-2", 29, 60);
    enemyWalk.create("walk-3", 29, 109);
    return enemyWalk;
  });
}