function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
  ortho()
}

function draw() {
  // put drawing code here
  background(255)
  //rotateX(frameCount * 0.01)
  //rotateY(frameCount * 0.01)
  //rotateZ(frameCount * 0.01)
  box(150)
  translate(100,100,-150)
  box(150)
}
