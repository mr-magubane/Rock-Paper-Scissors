function getComputerChoice() {
    let guessValue = Math.floor(Math.random()*3+1);
    if (guessValue === 1){
        return "rock";
    } else if (guessValue === 2){
        return "paper";
    } else {
        return "scissors";
    }
}
const compSelection = getComputerChoice()
const playerSelection = prompt("Selection:").toLowerCase();

function playRound(ComputerChoice, playerChoice) {
    
    if (ComputerChoice == "rock"){
        if (playerChoice == "paper"){
            return "You win! Paper beats Rock";
        } else if (playerChoice == "scissors"){
            return "You lose! Rock beats Scissors";
        }
    } else if (ComputerChoice == "paper"){
        if (playerChoice == "rock"){
            return "You lose! Paper beats Rock";
        } else if (playerChoice == "scissors"){
            return "You win! Scissors beats Paper";
        }
    } else if (ComputerChoice == "scissors"){
        if (playerChoice == "rock"){
            return "You win! Rock beats Scissors";
        } else if (playerChoice == "paper"){
            return "You lose! Scissors beats Paper";
        }
    }
    return `The round was a Draw, both selected ${playerChoice}`;
}
console.log("Computer:",compSelection);
console.log("You:",playerSelection);
console.log(playRound(compSelection, playerSelection));
