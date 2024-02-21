let angleX = 0;
let angleY = 0;
let prevMouseX;
let prevMouseY;

function setup() {
    let container = document.getElementById('p5-container');
    let cnv = createCanvas(container.offsetWidth, container.offsetHeight);
    cnv.parent('p5-container');
    cnv.style('width', '100%');
    cnv.style('height', '100%');
}

function draw() {
    background(220);
    orbitControl();
    rotateX(angleX);
    rotateY(angleY);
    box(100);
}

function mouseDragged() {
    let dx = mouseX - prevMouseX;
    let dy = mouseY - prevMouseY;
    angleY += dx * 0.01;
    angleX += dy * 0.01;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function mousePressed() {
    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function windowResized() {
    let container = document.getElementById('p5-container');
    resizeCanvas(container.offsetWidth, container.offsetHeight);
  }
