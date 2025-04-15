console.log("Welcome to the Rock, Paper, Scissors game")

let playGame = function(){

    let humanScore=0
    let computerScore=0;



let getComputerChoice = function(){
    choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choiceArray.length);
    const item = choiceArray[randomIndex];
    console.log(`The computer choice is ${item}`)
    return item;
};


let getHumanChoice = function(){
const userInput= prompt("Please enter your choice (rock/paper/scissors):").toLowerCase();
return userInput;
};


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

    for (let i = 0; i < 5; i++) {
       console.log( `Round: ${i+1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Scores || Human: ${humanScore} | Computer: ${computerScore}`);
      }
      
  console.log("\nFinal Result:");
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("It's a tie game!");
  }

};
playGame();
