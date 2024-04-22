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

function getHumanChoice() {
    let promptUser = true;
    let choice;
    while (promptUser) {
        choice = parseInt(prompt("Choose 1 for Rock, 2 for Paper, 3 for Scissors"));
        if (choice !== 1 && choice !== 2 && choice !== 3) {
            alert("Invalid choice. Choose again.");
            continue;
        } else {
            promptUser = false;
        }
    }
    
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    }
}

let humanScore = 0;
let computerScore = 0;