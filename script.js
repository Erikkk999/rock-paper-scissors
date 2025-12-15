function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
        return "rock"
        case 1:
        return "paper"
        default:
        return"scissors"
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper or Scissors?");
    return input.toLowerCase();
}

function playGame() {

let humanScore = 0;
let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        console.log(`Round ${i + 1}\nPlayer: ${humanChoice} | Computer: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log("Draw!");

        } else if ((humanChoice === "rock" && computerChoice === "paper")
            || (humanChoice === "paper" && computerChoice === "scissors")
            || (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log(`${computerChoice} beats ${humanChoice} | Computer Wins!`);
            ++computerScore;

        } else if ((computerChoice === "rock" && humanChoice === "paper")
            || (computerChoice === "paper" && humanChoice === "scissors")
            || (computerChoice === "scissors" && humanChoice === "rock")) {
            console.log(`${humanChoice} beats ${computerChoice} | Player Wins!`);
            ++humanScore;

        } else {
            alert("Invalid choice!");
        }
        console.log(`Score\nPlayer: ${humanScore} | Computer: ${computerScore}`);
    }

    let i = 0;
    for (;i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }
}

playGame();
