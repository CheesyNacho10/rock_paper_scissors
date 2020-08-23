let buttons = document.querySelectorAll('button');
let playerPic = document.getElementById('player_choice');
let computerPic = document.getElementById('computer_choice');
let displayPlayerScore = document.getElementById('player_score');
let displayComputerScore = document.getElementById('computer_score');
let displayMessage = document.getElementById('message');

buttons.forEach((button) => {
    let playerSelection = button.id;
    button.addEventListener('click', (e) => playRound(playerSelection));
});

function computerPlay() {
    let play = Math.random() * 3;
    if (play >= 1) {
        if (play >= 2) {
            return "Scissors"
        } else {
            return "Rock"
        }
    } else {
        return "Paper"
    }
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toString().toLowerCase();
    let computerSelection = computerPlay().toString().toLowerCase();

    let playerWin = false;
    let computerWin = false;

    function noWinner() {
        playerWin = false;
        computerWin = false;
    }

    function playerWins() {
        playerWin = true;
        computerWin = false;
    }

    function computerWins() {
        playerWin = false;
        computerWin = true;
    }

    if (playerSelection.toLowerCase() 
        == computerSelection.toLowerCase()) {
            noWinner();
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        computerWins();
    } else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		playerWins();
    }

    setPics(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    game(playerWin, computerWin, playerSelection, computerSelection);
}

function setPics(playerSelection, computerSelection) {
    playerPic.src = `images/${playerSelection}.png`;
	computerPic.src = `images/${computerSelection}_fliped.png`;
}

let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

function game(playerWin, computerWin, playerSelection, computerSelection) {
    if (playerWin) {
        playerScore++;
        displayPlayerScore.innerHTML = `${playerScore}`;
        displayMessage.innerHTML = `You have beaten him!`;
    } else if (computerWin) {
        computerScore++;
        displayComputerScore.innerHTML = `${computerScore}`;
        displayMessage.innerHTML = `He has beaten you!`;
    }
    else {
        displayMessage.innerHTML = `It's a draw`;
    }
}