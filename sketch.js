
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  telaInicial = new TelaInicial;
  somDoJogo.loop();
  frameRate(35)
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
  

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();  
}

  
  



