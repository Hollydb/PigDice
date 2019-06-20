function roll (){
  return Math.floor((Math.random() * 6) + 1);
};


function PigDice (players, score, round) {
  this.player=players,
  this.score=[]
  this.round=1
}

PigDice.prototype.turn = function(roll) {
  if (roll != 1){
    this.score.push(roll);
  } else {
    game.score = [];
    game.round += 1;
  }
}


  function whosturn (round) {
    if (round  % 2 === 0){
      $("#whosturn").text("Player 2 turn")
    } if(round % 2 === 1){
      $("#whosturn").text("Player 1 turn")
    }
  }



  function Player(endScore, playerID) {
    this.endScore=0,
    this.playerID=playerID
  }


  pass = function(score) {
    for(i=0;i<score.length;i++){
      if (game.round % 2 === 0) {
        player2.endScore += score[i];
      } else {
        player1.endScore += score[i];
      }
    }
  }
  function reset (score){
    game.score =[];
    game.round +=1
    console.log(game.round);
  }

  function win (score) {
    if (player1.endScore > 99){
      $("#winner").text("Player 1 Wins!!!")
    } if (player2.endScore > 99){
      $("#winner").text("Player 2 Wins!!!")
    }

  }

  var game = new PigDice();
  var player1 = new Player(0, "player1");
  var player2 = new Player(0, "player2");
  $(document).ready(function() {

    $("button#roll").click(function(event){
      event.preventDefault();
      var playerroll = roll()
      $("#currentroll").text(playerroll);
      game.turn(playerroll);
      var gameScore = game.score;
      whosturn(game.round);
    })
    $("button#pass").click(function(event){
      event.preventDefault();
      pass(game.score);
      $("#score2").text(player2.endScore);
      $("#score1").text(player1.endScore);
      reset(game.score);
      whosturn(game.round);
      win(player1.endScore, player2.endScore);
      console.log(player1);
      console.log(player2);
      console.log ("this is the game round" + game.round);
    })
  })
