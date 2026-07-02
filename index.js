// INIT getComputerChoice() function
// Pass math.floor(math.random()) to randomise between 1 and 3
// INIT getComputerChoiceString variable
// Call getComputerChoice() in switch
// Store output from switch in getComputerChoiceString
// Obtain user input with prompt()
// INIT variable humanScore to track human score
// INIT variable computerScore to track computer score

//? Refactoring the code and placing code into functions
// collect computer choice//
// randomize a computer choice between 1 and 3 with getComputerChoiceRandom()
let getComputerChoiceRandom = () => {
        return Math.floor((Math.random() * 3) + 1);
}

// call randomized computer choice getComputerChoiceRandom() with getComputerChoice()
let getComputerChoice = () => {
    switch (getComputerChoiceRandom()) {
        case 1:
           return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "rock_paper_scissors";
    }
}

// collect human choice
let getHumanChoice = () => {
    let userChoice = prompt("Rock, Paper, Scissors? Choose ONE");
    return userChoice.toLowerCase();

}

// init human score
let humanScore = 0;
// init computer score
let computerScore = 0;


// play game
let playRound = (humanChoice, computerChoice) => {
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
            You lose! Paper covers rock!`);
            
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

// create playGame() to track the loops
// call playRound() in play game to capture the winning condition
// use the right return in playRound() to return code to playGame() 
// Increment humanScore or computerScore based on winning condition pin round
// if humanScore === 5 and computerScore < 5, console logs CONGRATULATIONS, YOU WON
// if computerScore === 5 and humanScore < 5, console logs GAME OVER  



// Create playGame()

function playGame() {
        playRound(getHumanChoice(), getComputerChoice());
            console.log(`Computer: ${computerScore}
        You: ${humanScore}`)

    // for (let i = 0; i === 0; ++i) {


    // }
}

playGame();

// pass `playRound(getHumanChoiceLowercase, computerChoice)` to result variable
// playGame() contains a for statement
// the for statement runs until (humanScore === 5) || (computerScore === 5)
// IF ((humanscore === 5) || (computerScore === 5)
//  ELSE IF humanScore === 5 
//      THEN Congratulations, you win
//  ELSE IF computerScore === 5
//      THEN You lose