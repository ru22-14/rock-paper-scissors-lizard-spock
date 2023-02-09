/** declare possible choices and const from DOM */

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_h3 = document.getElementById("result");
const rock_button = document.getElementById("btn-1");
const paper_button = document.getElementById("btn-2");
const scissors_button = document.getElementById("btn-3");
const lizard_button = document.getElementById("btn-4");
const spock_button = document.getElementById("btn-5");
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const lizard = "lizard";
const spock = "spock";
const choice = document.getElementById("choice");

/**  EventListener function for all buttons */
function main() {

    rock_button.addEventListener('click', function () {
        // game(rock_button);
        game(rock_button);


    });

    paper_button.addEventListener('click', function () {
        game(paper_button);

    });

    scissors_button.addEventListener('click', function () {
        game(scissors_button);
    });

    lizard_button.addEventListener('click', function () {
        game(lizard_button);
    });

    spock_button.addEventListener('click', function () {
        game(spock_button);
    });

}

main();

/**function to get the computer choice */

function getComputerChoice() {
    const choices = ['rock','paper','scissors','lizard','spock'];
    const randomNumber = Math.floor(Math.random() *5);
    return choices[randomNumber];
    
    
}
console.log(getComputerChoice());

/** main game function */

function game(playerChoice){
    
    
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice){
        console.log("it's a Tie");
        return
    }
    else if (playerChoice === rock_button ) {
        if(computerChoice === paper){
        console.log("You loose");
        loose(playerChoice, computerChoice);
        
    }else {
        console.log("you win")
        win(playerChoice, computerChoice);
    }
}
    else if(playerChoice === paper_button ) {
        if(computerChoice === rock){
        console.log("you win");
        win(playerChoice, computerChoice);
        
    } else {
        console.log("Computer wins");
        loose(playerChoice, computerChoice);
    }
}
  
    else if (playerChoice ===  scissors_button ) {
        if(computerChoice === rock){
            console.log("Computer Wins");
            loose(playerChoice, computerChoice);
             
            
        } else{
            console.log("you win");
            win(playerChoice, computerChoice);
        }
        
} 

    else if (playerChoice ===  lizard_button ) {
        if(computerChoice === rock){
            console.log("Computer Wins");
            loose(playerChoice, computerChoice);
            
            
    
        }else{
            console.log("you win");
            win(playerChoice, computerChoice);
        }
} 

    else if (playerChoice ===  lizard_button ) {
        if(computerChoice === spock){
            console.log("you Win");
            win(playerChoice, computerChoice);
           
        } else{
            console.log("Computer Wins");
            loose(playerChoice, computerChoice);
            
        }
    } 

    else if (playerChoice ===  spock_button ) {
        if(computerChoice === scissors){
            console.log("you Win");
            win(playerChoice, computerChoice);
        } else {
            console.log("Computer Wins");
            loose(playerChoice, computerChoice);
             
        }
        
    }
    console.log(playerChoice);   
} 