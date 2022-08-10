let playerWins = 0;
let computerWins = 0;
let roundWinner;

// Determines computer's choice when playing a round.
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

// Plays a round of Rock, Paper, Scissors and determines a winner.
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

// Updates score based on player win, loss or a tie.
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

// Checks the current score and determines winner of game if necessary.
function checkScore(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            result.textContent = `You win the game!`;
        } else {
            result.textContent = `You lose the game!`;
        } 
    }
}

const result = document.querySelector('.results');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    roundWinner = playRound('Rock', getComputerChoice());
    updateScore(roundWinner);
    checkScore(playerWins, computerWins);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    roundWinner = playRound('Paper', getComputerChoice());
    updateScore(roundWinner);
    checkScore(playerWins, computerWins);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    roundWinner = playRound('Paper', getComputerChoice());
    updateScore(roundWinner);
    checkScore(playerWins, computerWins);
});


