const playerChoices = document.querySelectorAll(".button-container button");
const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".invitation");
const roundWinner = document.querySelector(".rule");
const choiceContainer = document.querySelector(".choice-display");
const choice = document.querySelector(".choice");
const context = document.createElement("p");
choiceContainer.appendChild(context);



let humanScore = 0;
let computerScore = 0;
let round = 0;
let isGameActive = true;

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
            if (!isGameActive) {
                return;
            }
            const playerChoice = choice.id;
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);
            round++
            updateDisplay(result, playerChoice, computerChoice);
            checkGameOver();
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

function updateDisplay(result, playerChoice, computerChoice) {

    const choiceDisplay =
    `Computer chose ${CAP(computerChoice)} & Player chose ${CAP(playerChoice)}`;
    
    roundNumber.textContent = `Round [${round}]`;
    playerScoreDisplay.textContent = `Player: ${humanScore}`;
    compScoreDisplay.textContent = `Computer: ${computerScore}`;

    if (result === "draw") {
        choice.textContent = `Both chose ${CAP(computerChoice)}`;
        context.textContent = "No One Wins";
        roundWinner.textContent = `It's a Draw!`;
    } else if (result === "computer") {
        choice.textContent = `${choiceDisplay}`;
        context.textContent = `${CAP(computerChoice)} beats ${CAP(playerChoice)}`;
        roundWinner.textContent = "Computer Wins the Round!";
    } else {
        choice.textContent = `${choiceDisplay}`;
        context.textContent = `${CAP(playerChoice)} beats ${CAP(computerChoice)}`;
        roundWinner.textContent = "Player Wins the Round!";
    }
}

function checkGameOver() {

    if (round < 5) return;

    isGameActive = false;

    let finalMessage = "";
    if (humanScore > computerScore) finalMessage = "You Won!";
    else if (computerScore > humanScore) finalMessage = "You Lost!";
    else finalMessage = "It's a Tie!";

    roundNumber.textContent = "Game Over";
    roundWinner.textContent = `${finalMessage}`;
    choice.textContent = "Click any button to reset the game";
    context.textContent = "";

}

playGame();
