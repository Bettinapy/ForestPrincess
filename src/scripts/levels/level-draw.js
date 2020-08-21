export function drawGround(background, context, sprites) {

  background.ranges.forEach(([x1, x2, y1, y2]) => {

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}

export function createGroundLayer(backgrounds, sprites){
  const worldW = 24000;

  const groundBuffer = document.createElement('canvas');
  groundBuffer.height = 390;
  groundBuffer.width = worldW;

  backgrounds.forEach(bg => {
    drawGround(bg, groundBuffer.getContext('2d'), sprites)
  })

  return function drawGroundLayer(context, camera){

    context.drawImage(groundBuffer, -camera.pos.x, 0);
  }
}

export function createMainBgLayer(mainBg){
  const worldW = 24000;
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
    console.log(character.pos.x, character.pos.y)
    context.drawImage(
      characterBuffer, 
      character.pos.x - camera.pos.x, 
      character.pos.y - camera.pos.y
      )
    //princess.draw(context)
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