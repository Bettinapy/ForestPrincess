export function drawGround(background, context, sprites) {

  background.ranges.forEach(([x1, x2, y1, y2]) => {

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.draw(background.tile, context, x, y);
      }
    }
  });
}

export function createGroundLayer(backgrounds, sprites){
  const groundBuffer = document.createElement('canvas');
  groundBuffer.height = 400;
  groundBuffer.width = 600;

  backgrounds.forEach(bg => {
    drawGround(bg, groundBuffer.getContext('2d'), sprites)
  })

  return function drawGroundLayer(context){
    context.drawImage(groundBuffer, 0, 0);
  }
}

export function createMainBgLayer(mainBg){
  return function drawMainBgLayer(context){
    mainBg.draw("mainBg", context, 0, 0, 1.8, 1.8);
  }
}

export function createPrincessLayer(princess){
  return function drawPrincessLayer(context){

    princess.draw(context);
  }
}