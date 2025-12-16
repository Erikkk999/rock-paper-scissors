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

function getHumanChoice() {

    const input = prompt("Rock, Paper or Scissors?") || getComputerChoice();
    return input.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function playRound(humanChoice, computerChoice, roundNumber) {

    console.log(
    `Round ${roundNumber}\nPlayer: ${cap(humanChoice)} | Computer: ${cap(computerChoice)}`);
        
    if (humanChoice === computerChoice) {
        console.log("Draw!");

    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`${cap(computerChoice)} beats ${cap(humanChoice)} | Computer Wins!`);
        ++computerScore;

    } else {
        console.log(`${cap(humanChoice)} beats ${cap(computerChoice)} | Player Wins!`);
        ++humanScore;
    }

    console.log(`Score\nPlayer: ${humanScore} | Computer: ${computerScore}`);
}

for (let i = 0;i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, i + 1);
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
    alert(
    `${finalScoreMessage}\n\nFinal Score\nPlayer: ${humanScore} | Computer: ${computerScore}`);
}

playGame();
