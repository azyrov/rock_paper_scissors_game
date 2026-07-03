// STAGE ONE
// INIT getComputerChoice() function
// Pass math.floor(math.random()) to randomise between 1 and 3
// Call getComputerChoice() in switch
// Store output from switch in getComputerChoiceRandom
// STAGE TWO
// write function to obtain user input
// Obtain user input with prompt()
// return user input to getHumanChoice()
// STAGE THREE
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
//i allows access in global scope
let humanScore = 0;
// init computer score
//i allows access in global scope
let computerScore = 0;


// play round
let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log(`Computer: ${computerChoice}
        Your choice: ${humanChoice}.
        Jinx! Try again.
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

// STAGE FOUR
// create playGame() to repeat playRound()
//i playGame() contains loop playRound() and result message -> gameResult()
// call playRound() in playGame() to capture the winning condition
//i use the correct return in playRound() to return round score to playGame() 
// Increment humanScore or computerScore based on winning condition in round
//i if humanScore === 5 and computerScore < 5, console logs CONGRATULATIONS, YOU WON
//i if computerScore === 5 and humanScore < 5, console logs GAME OVER  
// output cummulative round score with roundScore()
// output final game result with gameResult() 



// Create playGame()
//i use the correct return in playRound() to return round score to playGame() 
function playGame() {
    // while condition finds the first player to reach 5
    //i the first false condition makes thes while condition false -> while (false && true) 
    //i while condition loops the playRound() as far as no player has reached score of 5
    while ((computerScore < 5) && (humanScore < 5)) {
    console.log(`BEGIN ROUND!`);
    // call playRound() to play a round
    playRound(getHumanChoice(), getComputerChoice());
    // call roundScore() to display cummulative round score
    roundScore();
    }

    // call gameResult()
    gameResult();
}

// collect round score
let roundScore = () => {
    console.log(`Computer: ${computerScore}
    You: ${humanScore}`)
}

//i gameResult() provides a congratulatory message if successful
//i gameResult() provides a GAME OVER if unsuccessful
let gameResult = () => {
    if (computerScore === 5) {
        console.log(`
            You lose.
            GAME OVER!`)
    } else if (humanScore === 5) {
        console.log(`
            Congratulations. 
            You WIN!`);
    } else {
        console.log(`Error!`);
    }
}

playGame();