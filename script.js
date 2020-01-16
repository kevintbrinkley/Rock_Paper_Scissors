
//Randomly selects the computer's play
function computerPlay() {
  var choice = Math.ceil(Math.random() * 3)

  if (choice == 3) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice ==1) {
    return "scissors";
  } else {
    return "oops";
  }
}

//Assesses the player choice and computerPlay() to determine a round winner
function results(playerSelection, computerSelection) {

  if (playerSelection == "rock" && computerSelection == "rock") {
    return "draw";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "draw";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "draw";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "win";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "win";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "win";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "lose";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "lose";
  } else (playerSelection == "rock" && computerSelection == "paper") 
    return "lose";
}

//Identifying or creating the html elements needed
let playerScore = 0;
let computerScore = 0;
let previousPlayerScore = 0;
let previousComputerScore = 0;

const buttons = document.querySelectorAll('button');

const updatePlayer = document.createElement('p');
const updateComputer = document.createElement('p');
const updateResults = document.createElement('h3');
const reset = document.createElement('button');
reset.classList.add("reset");
const updateContainer = document.getElementById('updates');


buttons.forEach(button => {
  button.addEventListener('click', playRound);
});

//Runs a full round, calculating winner with results() and updating the scores and html for the round
function playRound(button) {

  previousPlayerScore = playerScore;
  previousComputerScore = computerScore;
  const computerSelection = computerPlay();
  const playerSelection = button.target.id;
  const result = results(playerSelection, computerSelection);
  let outcome = "It's a draw!";

  if (result === "lose") {
    computerScore++;
    outcome = "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (result === "win") {
    playerScore++;
    outcome = "You win! " + playerSelection + " beats " + computerSelection;
  }

  updatePlayer.textContent = "Player chose " + playerSelection;
  updateComputer.textContent = "Computer chose " + computerSelection;
  updateResults.textContent = outcome;
  updateContainer.appendChild(updatePlayer);
  updateContainer.appendChild(updateComputer);
  updateContainer.appendChild(updateResults);

  updateScores();
  endGame(playerScore, computerScore);
}

//Updates the html score counters for each player, and highlights when a player scores
function updateScores() {
  const playerPoints = document.getElementById('playerPoints');
  const computerPoints = document.getElementById('computerPoints');
  playerPoints.textContent = "Player: " + playerScore;
  computerPoints.textContent = "Computer: " + computerScore;

  if(previousPlayerScore<playerScore) { 
    playerPoints.style.color = "Blue";
  } else {
    playerPoints.style.color = "Black";
  }

  if(previousComputerScore<computerScore) { 
    computerPoints.style.color = "Blue";
  } else {
    computerPoints.style.color = "Black";
  }
}

//Displays winner at end of game, and updates running log of winners
function finalTally(score1, score2) {
  if (score1 > score2) {
    return "Player wins! Good job!";
    playerWon();
  } else {
    return "Computer wins! Better luck next time!"
    computerWon();
  }
}

//Ends game after 5 points.  Disables buttons, creates reset button, and resets the scores on the backend
function endGame(score1, score2) {
  if ((score1 === 5) || (score2 === 5)) {
    gameCounter();
    updateResults.textContent = finalTally(playerScore, computerScore);
    reset.textContent = "Play Again?";
    updateContainer.appendChild(reset);

    buttons.forEach(button => {
      button.removeEventListener('click', playRound);
      button.classList.add('disabled');
    });
    reset.addEventListener('click', resetGame);

    playerScore = 0;
    computerScore = 0;
  }
}

//Cleans up the screen, removes reset button, enables option buttons, and shows reset scores on screen
function resetGame() {
  updateContainer.removeChild(reset);
  updateContainer.removeChild(updatePlayer);
  updateContainer.removeChild(updateComputer);
  updateContainer.removeChild(updateResults);

  buttons.forEach(button => {
    button.addEventListener('click', playRound);
    button.classList.remove('disabled');
  });
  updateScores();

}

//Executes the logging of the game winner to right side of screen
function gameCounter() {
  if(playerScore>computerScore) {
    playerWon();
  } else {
    computerWon();
  }
}

//Logs player won on right side of screen. (Native CSS makes player wins blue)
function playerWon() {
  var node = document.createElement('li');
  var textNode = document.createTextNode("Player won!");
  node.appendChild(textNode);
  document.getElementById('gameListUpdates').appendChild(node);
}

//Logs computer won on right side of screen. (Class of "evil" makes computer wins red.)
function computerWon() {
  var node = document.createElement('li');
  node.classList.add('evil');
  var textNode = document.createTextNode("Computer won!");
  node.appendChild(textNode);
  document.getElementById('gameListUpdates').appendChild(node);
}