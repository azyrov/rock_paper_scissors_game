let div = document.querySelector("#container");
let btnTest = document.createElement("button");
let btnTextTest = document.createTextNode("Test");
btnTest.append(btnTextTest);
div.append(btnTest);

let userChoiceRock = () => {

    btnTest.addEventListener("click", function (e) {
        e.preventDefault();
        let userChoice = 5;
        // let compChoice = 2;
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

function userRock() {
    btnRock.addEventListener("click", function (e) {
        e.preventDefault();


        let userChoice = "rock".toLowerCase();
        let computerChoice = "paper".toLowerCase();
        playRound(userChoice, computerChoice)
    })

    // for chrome devtools debugging
    let event = new MouseEvent("click");
    btnRock.dispatchEvent(event);
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
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
            You lose! Paper covers rock!`);
            
            return ++computerScore;

        } else if (computerChoice === "scissors") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
            You win! Rock breaks Scissors!`);

            return ++humanScore;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
            You win! Paper covers Rock`);

            return ++humanScore;

        } else if (computerChoice === "scissors") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
            You lose! Scissors cuts Paper!
            `);

            return ++computerScore;
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
            You lose! Rock breaks Scissors!`);
            
            return ++computerScore;

        } else if (computerChoice === "paper") {
            console.log(`Computer: ${computerChoice}
            Your Choice: ${userChoice}
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

userRock();