// INIT getComputerChoice() function
// Pass math.floor(math.random()) to randomise between 1 and 3
// INIT getComputerChoiceString variable
// Call getComputerChoice() in switch
// Store output from switch in getComputerChoiceString


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

// alert(getComputerChoiceString);
