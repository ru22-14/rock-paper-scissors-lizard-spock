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



/**function to get the computer choice */

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];


}
console.log(getComputerChoice());

/** win function will display the game winner */

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (playerScore === 5) {
        result_h3.innerHTML = (`You Win`);
        playerScore = 0;
        computerScore = 0;
    }
}

/** loose function will display who looses the game  */
function loose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (computerScore === 5) {
        result_h3.innerHTML = (`Computer Wins`);
        playerScore = 0;
        computerScore = 0;
    }


}

/** main game function */

function game(playerChoice) {

    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        console.log("it's a Tie");
    } else if (playerChoice === rock_button) {
        if (computerChoice === paper) {
            console.log("you loose");
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === scissors) {
            win(playerChoice, computerChoice);
            console.log("you win");
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === lizard) {
            win(playerChoice, computerChoice);
            console.log("you win");
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === spock) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === rock) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === scissors) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === lizard) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === spock) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === rock) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === paper) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === lizard) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === spock) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === rock) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === paper) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === scissors) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === spock) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === rock) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === paper) {
            loose(playerChoice, computerChoice);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === scissors) {
            win(playerChoice, computerChoice);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === lizard) {
            loose(playerChoice, computerChoice);
        }
    }

}

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