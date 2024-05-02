const buttonElement = document.querySelectorAll('button');
const resultElement = document.getElementById('result');
const playerElement = document.getElementById('user-score');
const computerElement = document.getElementById('computer-score');
const computerchoiceEl=document.getElementById('comp-img');

let playerScore = 0;
let computerScore = 0;

buttonElement.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playround(button.id, computerPlay());
        resultElement.textContent = result;
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    if(choices[randomChoice]==='rock'){
        ci="&#x1F44A;";
    }else if(choices[randomChoice]==='paper'){
        ci="&#x1f590;";
    }else if(choices[randomChoice]==='scissors'){
        ci="&#x270c;";
    }
    computerchoiceEl.innerHTML=ci;
    computerElement.style.width='500px';
    return choices[randomChoice];
}

function playround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerElement.textContent = playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerElement.textContent = computerScore;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}
