// INIT getComputerChoice() function
// Pass math.floor(math.random()) to randomise between 1 and 3
// INIT getComputerChoiceString variable
// Call getComputerChoice() in switch
// Store output from switch in getComputerChoiceString
// Obtain user input with prompt()
// INIT variable humanScore to track human score
// INIT variable computerScore to track computer score


let getComputerChoice = () => {
    return Math.floor((Math.random() * 3) + 1);
}

let getComputerChoiceString;

switch (getComputerChoice()) {
    case 1:
        getComputerChoiceString = "rock";
        break;
    case 2:
        getComputerChoiceString = "paper";
        break;
    case 3:
        getComputerChoiceString = "scissors";
        break;
    default:
        getComputerChoiceString = "rock_paper_scissors";
        break;
}

console.log(`getComputerChoiceString: ${getComputerChoiceString}`);

let getHumanChoice = prompt("Rock, Paper, Scissors? Choose ONE");

console.log(`getHumanChoice: ${getHumanChoice}`);


let humanScore = 0;
let computerScore = 0;

// console.log(`Computer: ${computerChoice}
// Your Choice: ${humanChoice}

let playRound = (humanChoice, computerChoice) => {
    humanScore = 0;
    computerScore = 0;

    if (humanChoice === computerChoice) {
        console.log(`Computer: ${computerChoice}
        Your choice: ${humanChoice}.
        Jinx! Try again.
        
        SCORE
        Computer: ${computerScore}
        You: ${humanScore};
        `);
        

    } else if (humanChoice === "rock") {
        if (computerChoice === "paper"){
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You lose! Rock covers paper!`);
            
            return ++computerScore;

        } else if (computerChoice === "scissors") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You win! Rock breaks Scissors!`);

            return ++humanScore;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You win! Paper covers Rock`);

            return ++humanScore;

        } else if (computerChoice === "scissors") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You lose! Scissors cuts Paper!
            `);

            return ++computerScore;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You lose! Rock breaks Scissors!`);
            
            return ++computerScore;

        } else if (computerChoice === "paper") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${humanChoice}
            You win! Scissors cuts Paper!`);

            return ++humanScore;

        }
    } else {
        alert(`Please input only one of the following:
Rock
Paper
Scissors`);
    }
}

let getHumanChoiceLowercase = getHumanChoice.toLowerCase();
let computerChoice = getComputerChoiceString;

;

// create playGame() to track the loops
// call playRound() in play game to capture the winning condition
// use the right return in playRound() to return code to playGame() 
// Increment humanScore or computerScore based on winning condition pin round
// if humanScore === 5 and computerScore < 5, console logs CONGRATULATIONS, YOU WON
// if computerScore === 5 and humanScore < 5, console logs GAME OVER  

console.log(playRound(getHumanChoiceLowercase, computerChoice));