const values = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    pick = values[Math.floor(Math.random() * values.length)];
    return pick;
}

function getPlayerChoice() {
    playerPick = prompt("Give me your choice.");
    findFirstLetter = playerPick.charAt(0);
    capFirstLetter = findFirstLetter.toUpperCase();
    cutRest = playerPick.substring(1);
    otherSmall = cutRest.toLowerCase();
    playerPickCorrect = (`${capFirstLetter}${otherSmall}`);
    return playerPickCorrect;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice === computerChoice) {
        return "Draw"
    } else if (playerChoice === "Scissors" && computerChoice === 
    "Paper" || playerChoice === "Rock" && computerChoice === 
    "Scissors" || playerChoice === "Paper" && computerChoice === "Rock")  { 
        return "Win"
    } else {
        return "Loose"
    }
}


function keepScore() {
    switch (playRound()) {
        case "Win":
            playerScore = playerScore + 1; 
            break;
        case "Loose":
            computerScore = computerScore + 1;
            break;
        case "Draw":
            playerScore = playerScore;
            computerScore = computerScore;
    }
}

function game() {
    for (let x = 0; x < 5; x++) {
        keepScore();
    }
    if (playerScore === computerScore) {
        console.log("Draw!");
    } else if (playerScore > computerScore) {
        console.log("You Win!"); 
    } else {
        console.log("You loose!");
    }
}

game();
console.log(`You got ${playerScore} points and the computer have ${computerScore}`);

const test = "test";













