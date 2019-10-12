function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // draws top set of lines
  for (var x = 10; x <= 190; x = x + 10) {
    line(200 - x, x, 200 + x, x);
  }
  // draws bottom set of lines
  for (var y = 10; y <= 200; y = y + 10) {
    line(200 - y, height - y, 200 + y, height - y);
  }
}
