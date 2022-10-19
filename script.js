/* rock paper scissors */

// variables
let playerInputFormatting;
let playerInput;
let c;
let playerScore = 0;
let computerScore = 0;

// 1 - computer selects 
function getComputerChoice() {
    const n = Math.floor(Math.random() * 3);

    if (n === 0) {
        c = "Rock";
    }
    else if (n === 1) {
        c = "Paper";
    }
    else { c = "Scissors" };
    //control of results
    //return console.log(`Computer choose: ${c}`);
}

//control of results
//getComputerChoice();

// 2 - player selects 

//Handle player input and normalize the format
function getPlayerChoice() {
    playerInput = prompt("Rock, Paper or Scissors ?");
    playerInputFormatting = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

}
// check for correct player input
function checkPlayerInput() {
    //playerInputFormatting;
    do {
        getPlayerChoice();
    }
    while ((playerInputFormatting !== "Rock") && (playerInputFormatting !== "Paper") && (playerInputFormatting !== "Scissors"));

    //control of results
    //return console.log(`Player choose: ${playerInputFormatting}`);
}

// control of results
//getPlayerChoice();
//checkPlayerInput();


//3 - a round is played / a round winner is determined / score is added.

function playRound() {
    getComputerChoice();
    checkPlayerInput();
    //DRAW
    if (playerInputFormatting === c) {
        playerScore += 1;
        computerScore += 1;
        console.log(`It´s a draw! Player chose ${playerInputFormatting} and computer also chose ${c}`)
    }
    //PLAYER WINS
    else if (playerInputFormatting === "Rock" && c === "Scissors") {
        playerScore += 1;
        console.log(`Player wins! ${playerInputFormatting} beats ${c}.`)
    }

    else if (playerInputFormatting === "Paper" && c === "Rock") {
        playerScore += 1;
        console.log(`Player wins! ${playerInputFormatting} beats ${c}.`)
    }

    else if (playerInputFormatting === "Scissors" && c === "Paper") {
        playerScore += 1;
        console.log(`Player wins! ${playerInputFormatting} beats ${c}.`)
    }

    //PLAYER LOSES
    else if (playerInputFormatting === "Rock" && c === "Paper") {
        computerScore += 1;
        console.log(`Player loses! ${c} beats ${playerInputFormatting}.`)
    }

    else if (playerInputFormatting === "Paper" && c === "Scissors") {
        computerScore += 1;
        console.log(`Player loses! ${c} beats ${playerInputFormatting}.`)
    }

    else if (playerInputFormatting === "Scissors" && c === "Rock") {
        computerScore += 1;
        console.log(`Player loses! ${c} beats ${playerInputFormatting}.`)
    }

}

//control of results
//playRound();
//console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

//4 - a game is played for 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        playerScore;
        computerScore;
    }

    //5 - inform winner
    if (playerScore === computerScore) { console.log(`*** DRAW *** ${playerScore} to ${computerScore}`) }
    else if (playerScore > computerScore) { console.log(`*** VICTORY!!! *** ${playerScore} to ${computerScore}`) }
    else { console.log(`*** DEFEAT *** ${playerScore} to ${computerScore}`) };
};

game();

