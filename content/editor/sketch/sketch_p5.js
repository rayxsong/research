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

// const sketch = (p) => {
//   p.setup = () => {
//     let container = document.getElementById('p5-container');
//     let cnv = p.createCanvas(container.offsetWidth, container.offsetHeight);
//     cnv.parent('p5-container');
//     cnv.style('width', '100%');
//     cnv.style('height', '100%');
//   };

//   p.draw = () => {
//     p.background(220);
//     p.translate(p.width / 2, p.height / 2);
//     p.rotate(p.frameCount / 100.0);
//     p.rect(0, 0, 100, 100);
//   };

//   p.windowResized = () => {
//     let container = document.getElementById('p5-container');
//     p.resizeCanvas(container.offsetWidth, container.offsetHeight);
// };

// new p5(sketch, 'p5-container');