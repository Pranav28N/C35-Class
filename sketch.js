var gameState = 0,playerCount
var database,form,player,game



function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game()
  game.getgameState()
  game.start()

  
}

function draw(){
  
  
}


