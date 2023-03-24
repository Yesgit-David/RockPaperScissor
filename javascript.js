const values = ["Rock", "Paper", "Scissors"];
const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

/*
function getComputerChoice() {
   x = Math.floor(Math.random() * 3) + 1;
   if (x === 1) {
    console.log("Rock");
   } else if (x === 2) {
    console.log("Paper")
   } else {
    console.log("Scissors")
   }
   return
}
*/
function getComputerChoice() {
    pick = values[Math.floor(Math.random() * values.length)];
    return pick;
}

function getPlayerChoice() {
    playerPick = prompt("Give me your choice.");
    return playerPick;
}



if (playerChoice === computerChoice) {
    console.log("Draw");
} else if (playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock")  {
    console.log("Win");
} else {
    console.log("Loose");
}






/* const Typein = prompt("What's your pick? Rock, paper or scissors?"); */



