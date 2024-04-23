let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function checkForWinner() {
    if (humanScore < 5 && computerScore < 5) {
        return;
    }
    if (humanScore > computerScore) {
        results.textContent = "You win the game!";
    } else if (humanScore < computerScore) {
        results.textContent = "You lose the game!";
    } else {
        results.textContent = "It's a tie! Game over!";
    }
}

function updateScoreDisplay() {
    score.textContent = `Current Score | Player: ${humanScore} | Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            results.textContent = "You lose! Paper beats Rock!";
            computerScore++;
        } else if (computerChoice === "scissors") {
            results.textContent = "You win! Rock beats Scissors!"
            humanScore++;
        } else {
            results.textContent = "It's a tie!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            results.textContent = "You lose! Scissors beats Paper!";
            computerScore++;
        } else if (computerChoice === "rock") {
            results.textContent = "You win! Paper beats Rock!";
            humanScore++;
        } else {
            results.textContent = "It's a tie!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            results.textContent = "You lose! Rock beats Scissors!";
            computerScore++;
        } else if (computerChoice === "paper") {
            results.textContent = "You win! Scissors beats Paper!";
            humanScore++;
        } else {
            results.textContent = "It's a tie!";
        }
    }
    updateScoreDisplay();
    checkForWinner();
}

