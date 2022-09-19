
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

const NUMBER_OF_ROUNDS = 5;

function playRound() {
	
	var compSelection = getComputerChoice()
	var playerSelection = prompt("Selection:").toLowerCase();
	console.log("You:",playerSelection);
	console.log("Computer:",compSelection);

    if (compSelection == "rock"){
        if (playerSelection == "paper"){
            return "You win! Paper beats Rock";
        } else if (playerSelection == "scissors"){
            return "You lose! Rock beats Scissors";
        }
    } else if (compSelection == "paper"){
        if (playerSelection == "rock"){
            return "You lose! Paper beats Rock";
        } else if (playerSelection == "scissors"){
            return "You win! Scissors beats Paper";
        }
    } else if (compSelection == "scissors"){
        if (playerSelection == "rock"){
			return "You win! Rock beats Scissors";
        } else if (playerSelection == "paper"){
            return "You lose! Scissors beats Paper";
        }
    }
    return `The round was a Draw, both selected ${playerSelection}`;
}

function game() {
	var yourScore = 0;
	var compScore = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
		console.log("Ronud", i + 1)
		var round = playRound();
    	console.log(round);
		if (round.includes("win!")) {
			yourScore ++;
		} else if (round.includes("lose!")) {
			compScore ++;
		}
		console.log(`You ( ${yourScore} ) : Computer ( ${compScore} ) \n `)
    }
	if (yourScore > compScore) {
		return `Congratulations YOU WON!!! \n Final Score You ( ${yourScore} ) : Computer ( ${compScore} )`
	} else if (yourScore < compScore) {
		return `You Lost :( \n Final Score You ( ${yourScore} ) : Computer ( ${compScore} )`
	} else {
		return `Draw \n Final Score You ( ${yourScore} ) : Computer ( ${compScore} )`
	}
}
console.log(game())
