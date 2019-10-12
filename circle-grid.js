function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (var x = 20; x <= 390; x = x + 30) {
    for (var y = 20; y <= 390; y = y + 30) {
      fill(255);
      ellipse(x, y, 20, 20);
    }
  }
}
