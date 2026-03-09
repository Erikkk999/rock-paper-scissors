const playerChoices = document.querySelectorAll(".button-container button");

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
        });
    });


    let humanScore = 0;
    let computerScore = 0;
    const CAP = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function playRound(humanChoice, computerChoice, roundNumber) {

    console.log(
    `Round ${roundNumber}\nPlayer: ${CAP(humanChoice)} | Computer: ${CAP(computerChoice)}`);
        
    if (humanChoice === computerChoice) {
        console.log("Draw!");

    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`${CAP(computerChoice)} beats ${CAP(humanChoice)} | Computer Wins!`);
        ++computerScore;

    } else {
        console.log(`${CAP(humanChoice)} beats ${CAP(computerChoice)} | Player Wins!`);
        ++humanScore;
    }

    console.log(`Score\nPlayer: ${humanScore} | Computer: ${computerScore}`);
}

function getFinalResult(humanScore, computerScore) {

    if(humanScore === computerScore) {
        return "Draw!";
    } else if (humanScore > computerScore) {
        return "You Win!";
    } else {
        return "You Lost!";
    }
}

    const finalScoreMessage = getFinalResult(humanScore, computerScore);
}

playGame();
