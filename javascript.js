const values = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    pick = values[Math.floor(Math.random() * values.length)];
    return pick;
}

// function getPlayerChoice() {
//     playerPick = prompt("Give me your choice.");
//     findFirstLetter = playerPick.charAt(0);
//     capFirstLetter = findFirstLetter.toUpperCase();
//     cutRest = playerPick.substring(1);
//     otherSmall = cutRest.toLowerCase();
//     playerPickCorrect = (`${capFirstLetter}${otherSmall}`);
//     return playerPickCorrect;
// }



function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        console.log("Draw");
        resultSquare.textContent = "Draw"
        keepScore()
        console.log(playerScore, computerScore);
    } else if (playerChoice === "Scissors" && computerChoice === 
    "Paper" || playerChoice === "Rock" && computerChoice === 
    "Scissors" || playerChoice === "Paper" && computerChoice === "Rock")  { 
        console.log("Win");
        resultSquare.textContent = "Win"
        keepScore()
        console.log(playerScore, computerScore);
    } else {
        console.log("Loose");
        resultSquare.textContent = "Loose"
        keepScore()
        console.log(playerScore, computerScore);
    }
    
}




function keepScore() {
    switch (resultSquare.textContent) {
        case "Win":
            playerScore = playerScore + 1; 
            resultPlayer.textContent = playerScore;
            endGame();
            break;
        case "Loose":
            computerScore = computerScore + 1;
            resultComputer.textContent = computerScore;
            endGame();
            break;
        case "Draw":
            playerScore = playerScore;
            computerScore = computerScore;
            endGame();
    }
}

function endGame() {
    if (playerScore === 5) {
        resultSquare.textContent = "You win!";
        playerScore = 0;
        computerScore = 0;
        resultPlayer.textContent = "0"
        resultComputer.textContent = "0"
    } else if (computerScore === 5) {
        resultSquare.textContent = "You lost!"
        playerScore = 0;
        computerScore = 0;
        resultPlayer.textContent = "0"
        resultComputer.textContent = "0"
    }
}

// function game() {
//     for (let x = 0; x < 5; x++) {
//         keepScore();
//     }
//     if (playerScore === computerScore) {
//         console.log("Draw!");
//     } else if (playerScore > computerScore) {
//         console.log("You Win!"); 
//     } else {
//         console.log("You loose!");
//     }
// }

// game();
// console.log(`You got ${playerScore} points and the computer have ${computerScore}`);



const toolSquareRocky = document.querySelector('.toolSquareRock');
const toolSquarePapery = document.querySelector('.toolSquarePaper');
const toolSquareScissorsy = document.querySelector('.toolSquareScissors');

function removeTransition(element) {
    if (element.classList.contains("transform")) {
        element.classList.remove('transform')
    } else {
        element.classList.add('transform');
    }
}


toolSquareRocky.addEventListener('click', () => {
    playRound("Rock")
    removeTransition(toolSquareRocky);
});
toolSquarePapery.addEventListener('click', () => {
    playRound("Paper")
    removeTransition(toolSquarePapery);
});
toolSquareScissorsy.addEventListener('click', () => {
    playRound("Scissors")
    removeTransition(toolSquareScissorsy);
});


const resultSquare = document.createElement('div');
const resultPlayer = document.createElement('div');
const resultComputer = document.createElement('div');
const wrappedResults = document.createElement('div');

resultSquare.classList.add('result');
resultPlayer.classList.add('playerScore');
resultComputer.classList.add('playerScore');

wrappedResults.setAttribute('style', 'display: flex; justify-content: center; gap: 10rem; margin-top: 100px;');


const parentElement = document.querySelector('body');

parentElement.appendChild(resultSquare);
parentElement.appendChild(wrappedResults);
wrappedResults.appendChild(resultPlayer);
wrappedResults.appendChild(resultComputer);


// function addPoints() {
// if (resultSquare.textContent === "Win") {
//     playerScore = playerScore + 1;
//     return resultPlayer.textContent = playerScore;
// }}

























