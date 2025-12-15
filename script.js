function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
        return "Rock"
        case 1:
        return "Paper"
        default:
        return"Scissors"
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper or Scissors?");
    return input.toLowerCase();
}

console.log(getHumanChoice());
