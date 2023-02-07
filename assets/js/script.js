/** declare possible choices and const from DOM */

const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const buttons =document.getElementsByClassName("choice");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

/** event listener */

for (let button of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");

        
        playGame(playerChoice);

    });

}

/** Game working function */

function playGame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random()*5)];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    gameScores(result);

}
