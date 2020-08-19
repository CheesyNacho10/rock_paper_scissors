function computerPlay() {
    let play = Math.random() * 3
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toString()
    computerSelection = computerSelection.toString()
    if (playerSelection.toLowerCase() 
        == computerSelection.toLowerCase()) {
            return "Draw! You both chosed " + playerSelection + "!"
    } else {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                if (computerSelection.toLowerCase() == "scissors") {
                    return "You won! Rock beats scissors!"
                } else {
                    return "You lose! Paper beats rock..."
                }
                break
            case "paper":
                if (computerSelection.toLowerCase() == "rock") {
                    return "You won! Paper beats rock!"
                } else {
                    return "You lose! Scissors beats paper..."
                }
                break
            case "scissors":
                if (computerSelection.toLowerCase() == "paper") {
                    return "You won! Scissors beats paper!"
                } else {
                    return "You lose! Rock beats scissors..."
                }
                break
            default:
                return "error"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerPlay = prompt("Choose your play: rock, paper or scissors", "error")
        console.log(playRound(playerPlay, computerPlay()))
    }
}