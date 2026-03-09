const playerChoices = document.querySelectorAll(".button-container button");
const playerDisplay = document.querySelector(".player-score");
const computerDisplay = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".invitation");
const roundWinner = document.querySelector(".rule");
const choice = document.querySelector(".choice");

let humanScore = 0;
let computerScore = 0;
let round = 0;

const CAP = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function getComputerChoice() {
    
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
        return "rock";
        case 1:
        return "paper";
        default:
        return "scissors";
    }
}

function playGame() {

    playerChoices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const playerChoice = choice.id;
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);
            round++
        });
    });
}

function playRound(humanChoice, computerChoice) {
        
    if (humanChoice === computerChoice) {
        return "draw";

    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
         ++computerScore;
        return "computer";

    } else {
        ++humanScore;
        return "human";
    }
}


playGame();
