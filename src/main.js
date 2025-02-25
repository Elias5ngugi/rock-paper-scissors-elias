const choices = ["rock", "paper", "scissors"];
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const computerIcon = document.getElementById("computerIcon");
const playerIcon = document.getElementById("playerIcon");
const playScore = document.getElementById("playScore");

let computerScoreCount = 0;
let playerScoreCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rockbtn").addEventListener('click', () => startGame("rock"));
    document.getElementById("paperbtn").addEventListener('click', () => startGame("paper"));
    document.getElementById("scissorsbtn").addEventListener('click', () => startGame("scissors"));
});

function startGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    
    playerIcon.textContent = getIcon(playerChoice);
    computerIcon.textContent = getIcon(computerChoice);

    
    if (playerChoice === computerChoice) {
        playScore.textContent = "Currently Draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playScore.textContent = "You Win This Round!";
        playerScoreCount++;
    } else {
        playScore.textContent = "Computer Wins This Round!";
        computerScoreCount++;
    }

    
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
}

function getIcon(choice) {
    switch (choice) {
        case "rock": return "✊";
        case "paper": return "✋";
        case "scissors": return "✌️";
    }
}


