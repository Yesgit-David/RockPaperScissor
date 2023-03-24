const Rock = 1;
const Paper = 2;
const Scissors = 3;

function getComputerChoice() {
   x = Math.floor(Math.random() * 3) + 1;
   if (x === 1) {
    console.log("Rock");
   } else if (x === 2) {
    console.log("Paper")
   } else {
    console.log("Scissors")
   }
   
}

getComputerChoice();