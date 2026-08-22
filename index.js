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