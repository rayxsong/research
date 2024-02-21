let angle = 10;

function setup() {
  let container = document.getElementById('p5-container');
  let cnv = createCanvas(container.offsetWidth, container.offsetHeight);
  cnv.parent('p5-container');
  cnv.style('width', '100%');
  cnv.style('height', '100%');
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  angle += 0.25;
}

function windowResized() {
  let container = document.getElementById('p5-container');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
}