
export function drawLevel(background, context, sprites) {

  background.ranges.forEach(([x1, x2, y1, y2]) => {

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.draw(background.tile, context, x, y);
      }
    }
  });
}
