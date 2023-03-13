

let giocatoreScore = 0;
let computerScore = 0;


let giocatoreScoreDisplay = document.getElementById('giocatore-score');
let computerScoreDisplay = document.getElementById('computer-score');
let winnerDisplay = document.getElementById('winner');
let Button = document.getElementById('btn-roll');
let buttonReset = document.getElementById ('Reset');


function rollDice() {

  let giocatoreRoll = Math.floor(Math.random() * 6) + 1;
  let computerRoll = Math.floor(Math.random() * 6) + 1;

  giocatoreScore = giocatoreRoll;
  computerScore = computerRoll;
  giocatoreScoreDisplay.innerHTML = giocatoreScore;
  computerScoreDisplay.innerHTML = computerScore;

  
  if (giocatoreScore > computerScore) {
    winnerDisplay.innerHTML = 
    `<p class="fw-bold text-success"> Hai vinto!!</p>`;
  
  } else if (computerScore > giocatoreScore) {
    winnerDisplay.innerHTML = 
    `<p class="fw-bold text-danger"> Hai perso!!</p>`;
    
  } else {
    winnerDisplay.innerHTML = 
    `<p class="fw-bold text-info-emphasis"> Hanno pareggiato!!</p>`;
   
  }
}

Button.addEventListener('click', rollDice);
buttonReset.addEventListener('click', function() {
    document.getElementById('giocatore-score').reset;
});