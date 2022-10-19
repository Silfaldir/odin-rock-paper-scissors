/********* GAME ********
 * rock-paper-scissors-*/
 
 // variables
 let playerInputFormatting;
 let playerInput;
 let computerChoice;
 let playerScore = 0;
 let computerScore = 0;

 // 1 - computer selection

 function getComputerChoice(){
    const n = Math.floor(Math.random() * 3);

    if (n === 0) {
        computerChoice = "Rock";
    }
    else if (n === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    //control of results
    return console.log(`Computer choose: ${computerChoice}`);
 }

 //control of results
 getComputerChoice();

 // 2 - player selects

 // Handle player input and normalize the format

function getPlayerChoice(){
    //player input formatting
    playerInput = prompt("Rock, Paper or Scissors?");
    playerInput.toLowerCase();
    playerInputFormatting = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
}

// check for correct player input
function checkPlayerInput(){
    do {
        getPlayerChoice();
    }
    while ((playerInputFormatting !== "Rock") && (playerInputFormatting !== "Paper") && (playerInputFormatting !== "Scissors"));

    //control of results
    return console.log(`Player choose: ${playerInputFormatting}`);
}

//control of results
getPlayerChoice();
checkPlayerInput();