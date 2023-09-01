let playerWin = 0;
let compWin = 0;


function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]
}


function playRound(playerSelection, computerSelection) {
  const lowercasePlayerSelection = playerSelection.toLowerCase();

  if (
    (lowercasePlayerSelection === 'paper' && computerSelection === 'rock') ||
    (lowercasePlayerSelection === 'rock' && computerSelection === 'scissor') ||
    (lowercasePlayerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    console.log(`You Win!!!! ${playerSelection} beats ${computerSelection}`);
    playerWin++;
  } else if (lowercasePlayerSelection === computerSelection) {
    console.log('Tie!!');
  } else {
    console.log(`You Lose!!!! ${computerSelection} beats ${playerSelection}`);
    compWin++;
  }
}


function game(){
  for(let i = 1; i <= 5; i++){
    const computerSelection = getComputerChoice();
    let input = prompt("Enter tour Choice \n1.Rock \n2.Paper \n3.Scissor");
    playRound(input, computerSelection);
  }
}

game();


console.log(`Score\n Player:${playerWin} Computer:${compWin}`)
if(playerWin>compWin){
  console.log('Player wins');
}
else if(playerWin<compWin){
  console.log('Computer wins');
}
else{
  console.log("Its a Tie");
}