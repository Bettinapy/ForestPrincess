import PosConverter from '../collision/pos-converter';

export function drawGround(background, context, sprites) {

  background.ranges.forEach(([x1, x2, y1, y2]) => {

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}

export function createGroundLayer(backgrounds, sprites, tilesMatrix){
  const tilesConvert = new PosConverter(tilesMatrix);

  const groundBuffer = document.createElement('canvas');
  groundBuffer.height = 390;
  groundBuffer.width = 600+600;
  const groundBufferContext = groundBuffer.getContext('2d');

  function redraw(start, end){
    groundBufferContext.clearRect(0,0,groundBuffer.width,groundBuffer.height);
    for(let x=start; x<=end; x++){
      const col = tilesMatrix.table[x];
      if(col){
        col.forEach((tile, y) => {
          console.log(x, y)
          sprites.drawTile(tile.name, groundBufferContext, x-start, y)
        })
      }
    }
    // console.log(start, end)
    // backgrounds.forEach(bg => {
    //   drawGround(bg, groundBuffer.getContext('2d'), sprites)
    // })
  } 

  return function drawGroundLayer(context, camera){
    const cameraWidth = tilesConvert.posToIndex(camera.size.x);
    const drawFrom = tilesConvert.posToIndex(camera.pos.x);
    const drawTo = cameraWidth + drawFrom;
    redraw(drawFrom, drawTo)
    context.drawImage(groundBuffer, Math.floor(-camera.pos.x % 30), Math.floor(-camera.pos.y));
  }
}

export function createMainBgLayer(mainBg){
  const mainBgBuffer = document.createElement('canvas');
  mainBgBuffer.height = 390;
  mainBgBuffer.width = 600 * 2 + 50;
  const mainBgBufferContext = mainBgBuffer.getContext('2d');
  
  return function drawMainBgLayer(context, camera){

    mainBg.draw("mainBg", context, 0, 0, 2, 2);

  }
}

export function createCharacterLayer(character){
  const characterBuffer = document.createElement('canvas');
  characterBuffer.height = 60;
  characterBuffer.width = 60;
  const characterBufferContext = characterBuffer.getContext('2d');
  return function drawCharacterLayer(context, camera){
    characterBufferContext.clearRect(0, 0, 60, 60);
    character.draw(characterBufferContext);

    context.drawImage(
      characterBuffer, 
      character.pos.x - camera.pos.x, 
      character.pos.y - camera.pos.y
      )
    //princess.draw(context)
  }
}


export function createDashboardLayer(character) {
  return function drawDashboardLayer(context, camera) {
    character.player.timer.draw(context, 450, 50)
  }
}


export function createTileMatrix(backgrounds, tiles){
  backgrounds.forEach(background => {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
  
      for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
          tiles.set(x, y, {name: background.tile})
        }
      }
    });

  })
}