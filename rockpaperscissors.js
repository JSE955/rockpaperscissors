function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        return 'Rock';
    } else if (value === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection === 'Rock') {
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Paper') {
                console.log(`You Lose! Paper beats Rock`);
                return 1;
            } else {
                console.log(`You Win! Rock beats Scissors`);
                return 2;
            }
            break;
        case 'Paper':
            if (computerSelection === 'Paper') {
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Scissors') {
                console.log(`You Lose! Scissors beats Paper`);
                return 1;
            } else {
                console.log(`You Win! Paper beats Rock`);
                return 2;
            }
            break;
        case 'Scissors':
            if (computerSelection === 'Scissors') {
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Rock') {
                console.log(`You Lose! Rock beats Scissors`);
                return 1;
            } else {
                console.log(`You Win! Scissors beats Paper`);
                return 2;
            }
            break;
        default:
            console.log(`You didn't pick rock, paper or scissors.`);
            return 0;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let playerChoice, computerChoice, result;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Select Rock, Paper or Scissors.");
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if (result === 2) {
            playerWins++;
        } else if (result === 1) {
            computerWins++;
        } else {
            computerWins = computerWins + 0;
        }
    }

    if (playerWins > computerWins) {
        console.log('You win!');
    } else if (computerWins > playerWins) {
        console.log('You lose!');
    } else {
        console.log(`It's a tie!`);
    }
}