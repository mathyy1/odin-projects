function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber <= 1/3) return "rock"
    if (randomNumber <= 2/3) return "paper"
    return "scissors"
}

function playGame(humanChoice) {

    if (gameHasBeenPlayed) {
        document.querySelector('#human').textContent = 0;
        document.querySelector('#computer').textContent = 0;
        document.querySelector('#computer-choice').textContent = '';
        gameHasBeenPlayed = false;
    }

    let computerChoice = getComputerChoice();
    const computerChoiceDisplay = document.querySelector('#computer-choice');
    computerChoiceDisplay.textContent = "Computer: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    heading.textContent = playRound(humanChoice, computerChoice)

    const winner = whoWon();

    if (winner !== 'none') {
        resetGame();
        heading.textContent = winner + ' Won!'
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            const formattedChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            return "It's a draw! " + formattedChoice + " equals " + formattedChoice + ".";
        }

        // Human wins
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            incrementWinner('human');
            return "You win! Rock beats Scissors.";
        }
        if (humanChoice === 'paper' && computerChoice === 'rock') {
            incrementWinner('human');
            return "You win! Paper beats Rock.";
        }
        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            incrementWinner('human');
            return "You win! Scissors beats Paper."
        }

        // Human loses
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            incrementWinner('computer');
            return "You lose! Paper beats Rock.";
        }
        if (humanChoice === 'paper' && computerChoice === 'scissors') {
            incrementWinner('computer');
            return "You lose! Scissors beats Paper.";
        }
        if (humanChoice === 'scissors' && computerChoice === 'rock') {
            incrementWinner('computer');
            return "You lose! Rock beats Scissors.";
        }
    }

    function incrementWinner(winner) {
        switch (winner) {
            case 'human':
                humanScore++;
                document.querySelector('#human').textContent = humanScore;
                break;
            case 'computer':
                computerScore++;
                document.querySelector('#computer').textContent = computerScore;
                break;
        }
    }
}

function whoWon() {
    if (humanScore === 5 ) return 'You';
    if (computerScore === 5) return 'Computer';
    return 'none';
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    heading.textContent = '';
    gameHasBeenPlayed = true;
}

let gameHasBeenPlayed = false;
let humanScore = +document.querySelector('#human').textContent;
let computerScore = +document.querySelector('#computer').textContent;
const heading = document.querySelector('#text');

const selections = document.querySelector('#selections');
selections.addEventListener('click', (event) => {
    const target = event.target.id;
    playGame(target);
})