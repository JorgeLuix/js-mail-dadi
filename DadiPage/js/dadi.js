

let images = [
  'img-dice/dice-1.webp',
  'img-dice/dice-2.svg',
  'img-dice/dice-3.webp',
  'img-dice/dice-4.webp',
  'img-dice/dice-5.webp',
  'img-dice/dice-6.webp'
];
let dice = document.querySelectorAll('img');
console.log(dice);

let winnerDisplay = document.getElementById('winner');
let Button = document.getElementById('btn-roll');
let buttonReset = document.getElementById ('Reset');


function rollDice() {


  let giocatoreRoll = Math.floor(Math.random() * 6) + 1;
  let computerRoll = Math.floor(Math.random() * 6) + 1;

  document.querySelector("#die-1").setAttribute("src", images[giocatoreRoll]);
  document.querySelector("#die-2").setAttribute("src", images[computerRoll]);

 giocatoreScore = giocatoreRoll;
  computerScore = computerRoll;

  if (giocatoreScore > computerScore) {
    winnerDisplay.innerHTML = 
    
    `<p class="fw-bold text-success">
    <i class="fa-solid fa-face-smile"></i> Hai vinto!!</p>`;
  
  } else if (computerScore > giocatoreScore) {
    winnerDisplay.innerHTML = 
    `<p class="fw-bold text-danger">
    <i class="fa-solid fa-face-sad-tear"></i> Hai perso!!</p>`;
    
  } else {
    winnerDisplay.innerHTML = 
    `<p class="fw-bold text-info-emphasis">
    <i class="fa-solid fa-face-surprise"></i> Hanno pareggiato!!</p>`;
   
  }
}

Button.addEventListener('click', rollDice);
buttonReset.addEventListener('click', function() {
    document.getElementById('giocatore-score').reset;
});
rollDice();