
let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const ops = ["stone", "paper", "scissor"];
    const randomInx = Math.floor(Math.random() * 3);
    return ops[randomInx];
}

const drawGame = () => {
    console.log("Game was draw.")
    msg.innerHTML = "Game was draw.";

}

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerHTML = "You Win";
        userScore++;
        userScorePara.innerHTML = userScore;
    }
    else {
        console.log("Comp Win");
        msg.innerHTML = "Comp Win";
        compScore++;
        compScorePara.innerHTML = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        // draw game 
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "paper") {
            // scissor or stone
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor") {
            // stone or paper
            userWin = compChoice === "stone" ? false : true;
        }
        else {
            // scissor or paper
            userWin = compChoice === "paper" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});