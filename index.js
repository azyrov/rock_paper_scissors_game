let div = document.querySelector("#container");
let btnTest = document.createElement("button");
let btnTextTest = document.createTextNode("Test");
btnTest.append(btnTextTest);
div.append(btnTest);

let userChoiceRock = () => {

    btnTest.addEventListener("click", function (e) {
        e.preventDefault();
        let userChoice = 5;
        calc(userChoice, test());
    })
}

function calc(user, comp) {
    console.log(`${user}, ${comp}`);
}

function test() {
    return 1000;
}

userChoiceRock();

let btnRock = document.createElement("button");
let btnTextRock = document.createTextNode("Rock");
btnRock.append(btnTextRock);
div.append(btnRock);

let btnPaper = document.createElement("button");
let btnTextPaper = document.createTextNode("Paper");
btnPaper.append(btnTextPaper);
div.append(btnPaper);

let btnScissors = document.createElement("button");
let btnTextScissors = document.createTextNode("Scissors");
btnScissors.append(btnTextScissors);
div.append(btnScissors);

let display = document.createElement("div");
let greetingMain = document.createTextNode(`Welcome to ROCK-PAPER-SCISSOR!`);
let newLine = document.createElement("br");
let greetingInstruction = document.createTextNode(`Click a button to begin!`);



let playerScore = document.createElement("p");
playerScore.textContent = "";


let compScore = document.createElement("p");
compScore.textContent = "";

let winner = document.createTextNode("p");
winner.textContent = "";

display.append(greetingMain);
display.append(greetingInstruction);
display.insertBefore(newLine, greetingInstruction);
display.append(playerScore);
display.append(compScore);
display.append(winner);

div.prepend(display);

display.classList.add("display");

// added a new abort signal
// instantly removes listeners attached to elements
const controller = new AbortController();


function userRock() {
    btnRock.addEventListener("click", function (e) {
        e.preventDefault();


        let userChoice = "rock".toLowerCase();

        let compChoice = getComputerChoice();

        playRound(userChoice, compChoice)

        roundScore(userChoice, compChoice);
    },{signal: controller.signal})
}

function userPaper() {
    btnPaper.addEventListener("click", function (e) {
        e.preventDefault();


        let userChoice = "paper".toLowerCase();
        let compChoice = getComputerChoice();

        playRound(userChoice, compChoice)

        roundScore(userChoice, compChoice);
    },{signal: controller.signal})
}

function userScissors() {
    btnScissors.addEventListener("click", function (e) {
        e.preventDefault();


        let userChoice = "Scissors".toLowerCase();

        let compChoice = getComputerChoice();

        playRound(userChoice, compChoice)

        roundScore(userChoice, compChoice);
    },{signal: controller.signal})
}

let getComputerChoiceRandom = () => {
        return Math.floor((Math.random() * 3) + 1);
}

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


let computerScore = 0;
let humanScore = 0;

let playRound = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        console.log(`Computer: ${computerChoice}
        Your choice: ${userChoice}.
        Jinx! Try again.
        `);
        

    } else if (userChoice === "rock") {
        if (computerChoice === "paper"){
            return ++computerScore;

        } else if (computerChoice === "scissors") {
            return ++humanScore;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return ++humanScore;

        } else if (computerChoice === "scissors") {
            return ++computerScore;
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {            
            return ++computerScore;

        } else if (computerChoice === "paper") {
            return ++humanScore;

        }
    } else {
        alert(`Please input only one of the following:
Rock
Paper
Scissors`);
    }
}

let roundScore = (userChoice, computerChoice) => {
    playerScore.textContent = `You: ${humanScore} (${userChoice})`;
    compScore.textContent = `Computer: ${computerScore} (${computerChoice})`;

    if ((computerScore === 5) || (humanScore === 5)) {
        gameResult(humanScore, computerScore);
    }

}

function playGame() {
    userRock();
    userPaper();
    userScissors();
}

let gameResult = (humanScore, computerScore) => {
        if (humanScore === 5) {
            winner.textContent = "You won! CONGRATULATIONS";
            controller.abort()
        } else if (computerScore === 5) {
            winner.textContent = "Computer won. GAME OVER";
            controller.abort()
        }
}

playGame();
