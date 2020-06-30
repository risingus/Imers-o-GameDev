
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  
  somDoJogo.loop();
  frameRate(35)

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  jogo.draw();
}

  
  



