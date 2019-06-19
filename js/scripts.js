function roll (){
  return Math.floor((Math.random() * 6) + 1);
};


function PigDice (players, score, round, playerTurn) {
  this.player=players,
  this.score=[]
}

PigDice.prototype.turn = function(roll) {
  if (roll != 1){
  this.score.push(roll);
}
}

function Player(endScore, playerID) {
  this.endScore=0,
  this.playerID=playerID
}

// Player.prototype.pass = function(score) {
//     for(i=0;i<score.length;i++){
//       player1.endScore += score[i];
//       game.score.splice(score[i], 1);
//       console.log (player1);
//     }
//   }
pass = function(score) {
    for(i=0;i<score.length;i++){
      player1.endScore += score[i];
      game.score.splice(score[i], 1);
      console.log (player1);
    }
  }

  pass2 = function(score) {
      for(i=0;i<score.length;i++){
        player2.endScore += score[i];
        game.score.splice(score[i], 1);
        console.log (player1);
      }
    }
  // Player.prototype.pass = function(score) {
  //     for(i=0;i<score.length;i++){
  //       player2.endScore += score[i];
  //       game.score.splice(score[i], 1);
  //       console.log (player2);
  //     }
  //   }


var game = new PigDice();
var player1 = new Player(0, "John");
var player2 = new Player(0, "Jim");
$(document).ready(function() {
  // var game;
  // var player1;
  //   $("#begin").click(function(event){
  //   event.preventDefault();
  //    game = new PigDice();
  //    player1 = new Player();
  //    player2 = new Player()
  //     console.log(game);
  //     console.log(player1);
  // });
//Player 1
    $("button#roll").click(function(event){
    event.preventDefault();
    var playerroll = roll()
    $("#player1").text(playerroll);
    game.turn(playerroll);
    console.log(game.score);
    var gameScore = game.score;
    console.log(gameScore + "gameScore");
  })
  $("button#pass").click(function(event){
    event.preventDefault();
    console.log(game.score + "game.score in pass click");
    console.log(player1);
    // player1.pass(game.score);
    pass(game.score);
    $("#score1").text(player1.endScore);
})

//Player 2
$("button#roll2").click(function(event){
event.preventDefault();
var playerroll = roll()
$("#player2").text(playerroll);
game.turn(playerroll);
console.log(game.score);
var gameScore = game.score;
console.log(gameScore + "gameScore");
})
$("button#pass2").click(function(event){
event.preventDefault();
console.log(game.score + "game.score in pass click");
console.log(player1);
// player2.pass(game.score);
pass2(game.score);
$("#score2").text(player2.endScore);
})
})
