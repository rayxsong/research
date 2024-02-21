let angle = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  angle += 0.05;
}