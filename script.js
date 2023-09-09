let playerWin = 0;
let compWin = 0;
const optionButton = document.querySelectorAll('.buttonGame')
const resultText = document.getElementById('resultText');
const finalScore = document.getElementById('finalScore');
const score = document.getElementById('score');


function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]
}
// Get all the buttons with the class "buttonGame"
const optionButtons = document.querySelectorAll('.buttonGame');

// Add a click event listener to each button
optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Access the "value" attribute of the clicked button
    const buttonValue = button.value;
    const computerSelection = getComputerChoice();
    playRound(buttonValue, computerSelection);
  });
});

function playRound(playerSelection, computerSelection) {
  const lowercasePlayerSelection = playerSelection.toLowerCase();
    
  if (
    (lowercasePlayerSelection === 'paper' && computerSelection === 'rock') ||
    (lowercasePlayerSelection === 'rock' && computerSelection === 'scissor') ||
    (lowercasePlayerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    console.log(`You Win!!!! ${playerSelection} beats ${computerSelection}`);
    resultText.textContent = `You Win!!!! ${playerSelection} beats ${computerSelection}`
    playerWin++;

  } else if (lowercasePlayerSelection === computerSelection) {
    console.log('Tie!!');
    resultText.textContent = 'Tie!!';
  } else {
    console.log(`You Lose!!!! ${computerSelection} beats ${playerSelection}`);
    resultText.textContent = `You Lose!!!! ${computerSelection} beats ${playerSelection}`;
    compWin++;
  }
  score.textContent = `Player: ${playerWin} Computer: ${compWin}`;
  if(playerWin==5 & compWin<5){
    console.log('Player Wins');
    finalScore.textContent='Player Wins';

  }
  else if(compWin==5 & playerWin<5){
    console.log('Computer Wins');
    finalScore.textContent='Computer Wins';
  }
}


