export function valueToPoint(value, index, total) {
    const x = 0
    const y = -value * 0.8
    const angle = ((Math.PI * 2) / total) * index
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const tx = x * cos - y * sin + 100
    const ty = x * sin + y * cos + 100
    return {
      x: tx,
      y: ty
    }
}

export function pointValue(coordinates) {
    for(let coordinate of coordinates) {
        coordinate.deg += 5;
        let x = 40 + 20 * Math.sqrt(2) * Math.cos((coordinate.deg + 90) * Math.PI / 180);
        let y = 40 + 20 * Math.sqrt(2) * Math.sin((coordinate.deg + 90) * Math.PI / 180);
        coordinate.x = x;
        coordinate.y = y;     
    }

    return coordinates;
}

export function ellipseAnimation(ellipse) {
    ellipse.rx -= 2;
    ellipse.ry -= 2.5;
    ellipse.cy -= 10;
    return ellipse;
}
  