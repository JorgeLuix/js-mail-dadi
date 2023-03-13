/**************
 Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

 */

/*Creare array per l'invitati**/
ListGuests = [
    "jorgecastillo@example.com", 
    "jcastillo@example.com", 
    "example@example.com",
    "luiscastillo@example.com", 
    "castillotenasoa@example.com", 
    "classe92@example.com",

];
/*****Creare array per l'invitati*---*/

const emailInput = document.getElementById("email-input");
const checkButton = document.getElementById("check-button");
const checkButtonCancellare = document.getElementById("check-button-cancellare");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
  const email = emailInput.value.trim().toLowerCase();
  if (email) {
    result.textContent = "Benvenuto(a) alla festa" ;
  } else {
    result.textContent = "Mi dispiace, non sei in lista d'invitati";
  }
})
  checkButtonCancellare.addEventListener('click', function(){
    emailInput.value= '';

})