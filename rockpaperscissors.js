let playerWins = 0;
let computerWins = 0;
let roundWinner;

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
                result.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Paper') {
                result.textContent = `You Lose! Paper beats Rock`;
                return 1;
            } else {
                result.textContent = `You Win! Rock beats Scissors`;
                return 2;
            }
            break;
        case 'Paper':
            if (computerSelection === 'Paper') {
                result.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Scissors') {
                result.textContent = `You Lose! Scissors beats Paper`;
                return 1;
            } else {
                result.textContent = `You Win! Paper beats Rock`;
                return 2;
            }
            break;
        case 'Scissors':
            if (computerSelection === 'Scissors') {
                result.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Rock') {
                result.textContent = `You Lose! Rock beats Scissors`;
                return 1;
            } else {
                result.textContent = `You Win! Scissors beats Paper`
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

function updateScore(value) {
    if (value === 2) {
        playerWins++;
        player.textContent = `Player: ${playerWins}`;
    } else if (value === 1) {
        computerWins++;
        computer.textContent = `Computer: ${computerWins}`;
    } else {
        computerWins = computerWins + 0;
    }
}

const result = document.querySelector('.results');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    roundWinner = playRound('Rock', getComputerChoice());
    // Update score based on winner of round
    updateScore(roundWinner);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    updateScore(roundWinner);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    updateScore(roundWinner);
});


