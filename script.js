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

let playerSelection = toLowerCase(prompt("Selection:"));

function game(ComputerChoice, playerChoice) {
    let sameChoice = false;

    while (! sameChoice) {
        if (ComputerChoice === "rock") {
            if (playerChoice === "paper") {
                console.log("You win Rock beats paper");
            }
        }
    }
}
console.log(game(getComputerChoice(), playerSelection))
