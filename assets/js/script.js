/** declare possible choices and const from DOM */

const player_score = 0;
const computer_score = 0;
const userScore_span  = document.getElementById("player-score");
const computerScore_span  = document.getElementById("computer-score");
const result_div = document.querySelectorAll(".result");
const announcement = document.getElementsByName("h3");
const rock_div = document.getElementsByClassName("choice");
const paper_div = document.getElementsByClassName("choice");
const scissors_div = document.getElementsByClassName("choice");
const lizard_div = document.getElementsByClassName("choice");
const spock_div = document.getElementsByClassName("choice");


const buttons = document.querySelectorAll(".moves choice");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];


/** event listener */

options.forEach(option => {
    option.addEventListener("click", function () {
        
        let playerChoice = this.getAttribute("data-choice");
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = choices[computerNumber];
        console-log(computerChoice);

        playGame(playerChoice);
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
          }
        
        
        console.log(this);

    });

});


/** Game working function */

function playGame(playerChoice) {

    const gameResult = `${playerChoice} vs ${computerChoice}`;
    if (playerChoice === computerChoice) {
        alert(`${gameResult} is a Tie.`);
        return
    }
    // ROCK
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            alert(`${gameResult} = Computer Wins`);
            cScore++;
        } else {
            alert(`${gameResult} = You Win`);
            pScore++;
        }
    }
    // PAPER
    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            alert(`${gameResult} = Computer Wins`);
            cScore++;
        } else {
            alert(`${gameResult} = You Win`);
            pScore++;
        }
    }
    // SCISSORS 
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            alert(`${gameResult} = Computer Wins`);
            cScore++;
        } else {
            alert(`${gameResult} = You Win`);
            pScore++;
        }
    }
    // LIZARD
    else if (playerChoice === "Lizard") {
        if (computerChoice === "Spock") {
            alert(`${gameResult} = You Win`);
            pScore++;
        } else {
            alert(`${gameResult} = Computer Wins`);
            cScore++;
        }
    } else if (playerChoice === "Lizard") {
        if (computerChoice === "Rock") {
            alert(`${gameResult} = Computer Wins`);
            cScore++;
        } else {
            alert(`${gameResult} = You Win`);
            pScore++;
        }
    }
    // SPOCK
    else if (playerChoice === "Spock"){
        if (computerChoice === "Scissors"){
             alert(`${gameResult} = You Win`);
             pScore++;
       }  else {
             alert(`${gameResult} = Computer Wins`); 
             cScore++;
       }
   }

}
playGame(playerChoice);

 
// function updateScore() {
//     document.getElementById("p-score").textContent = pScore;
//     document.getElementById("c-score").textContent = cScore;}

 

  function checkWinner() {
    if (pScore === 5){
        alert ("You Win");

    } else (cScore === 5)
        alert("Computer wins");
    }
    
    
  
