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

console.log(getComputerChoice());