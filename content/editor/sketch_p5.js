let angle = 10;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('p5-container');
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  angle += 0.25;
}