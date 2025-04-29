

let playGame = function(){

    let humanScore=0
    let computerScore=0;
    let btn1=document.querySelector("#btn1");
    let btn2=document.querySelector("#btn2");
    let btn3=document.querySelector("#btn3");



let getComputerChoice = function(){
    choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choiceArray.length);
    const item = choiceArray[randomIndex];
    console.log(`The computer choice is ${item}`)
    return item;
};


btn1.addEventListener("click",()=>{
  const computerChoice=getComputerChoice();
  const result=playRound("rock",computerChoice);
  playerDisplay.textContent="Player: rock";
  computerDisplay.textContent=`Computer:${computerChoice}`;
  resultDisplay.textContent=result;
  scoreDisplay.textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

if (humanScore === 5 || computerScore === 5) {
  winnerDisplay.textContent = humanScore === 5 ? "You won the game!" : "The computer won the game!";
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
}
});
btn2.addEventListener("click",()=>{
  const computerChoice=getComputerChoice();
  const result=playRound("paper",computerChoice);
  playerDisplay.textContent="Player: paper";
  computerDisplay.textContent=`Computer:${computerChoice}`;
  resultDisplay.textContent=result;
  scoreDisplay.textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

if (humanScore === 5 || computerScore === 5) {
  winnerDisplay.textContent = humanScore === 5 ? "You won the game!" : "The computer won the game!";
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
}
});
btn3.addEventListener("click",()=>{
  const computerChoice=getComputerChoice();
  const result=playRound("scissors",computerChoice);
  playerDisplay.textContent="Player: scissors";
  computerDisplay.textContent=`Computer:${computerChoice}`;
  resultDisplay.textContent=result;
  scoreDisplay.textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

if (humanScore === 5 || computerScore === 5) {
  winnerDisplay.textContent = humanScore === 5 ? "You won the game!" : "The computer won the game!";
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
}
});

const playerDisplay=document.querySelector("#playerDisplay");
const computerDisplay=document.querySelector("#computerDisplay");
const resultDisplay=document.querySelector("#resultDisplay");
const scoreDisplay=document.querySelector("#scoreDisplay");
const winnerDisplay=document.querySelector("#winnerDisplay");



let playRound = function(humanChoice, computerChoice){
    let result;
    if (humanChoice === computerChoice) {
        result = "The result is a tie";
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
      ) {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      } else {
        result = "Invalid input.";
      }

    
    return result;
    };
  
  }
playGame();

