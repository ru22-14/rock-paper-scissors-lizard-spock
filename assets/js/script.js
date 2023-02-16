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





/* The purpose of this function is to brings the computer's choice randomly 
 * throughout the game is played */

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];

}

/** win function will calculate the scores and will display the game winner */

function win(playerstr, computerstr) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScore_span.innerText = playerScore;
        computerScore_span.innerText = computerScore;
        result_h3.innerHTML = (`You Win, Start Again`);
    }
}

/** loose function will calculate who looses the game  */
function loose(playerstr, computerstr) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScore_span.innerText = playerScore;
        computerScore_span.innerText = computerScore;
        result_h3.innerHTML = (`Computer Wins, Try Again`);
    }


}
/*This is the main function of the Game. Everytime the player clicks on the button
the data is taken and compared with the computer's choice and will get the 
scores through win or loose function and will display a text accordingly. */

function game(playerChoice) {

    let computerChoice = getComputerChoice();
    let str1 = playerChoice.innerText;
    let str2 = computerChoice.innerText;

    if (playerChoice === rock_button && computerChoice === 'Rock') {
        result_h3.innerHTML = (`${playerChoice.innerText} is equals to ${computerChoice} its a Tie.`);


    } else if (playerChoice === paper_button && computerChoice === 'Paper') {
        result_h3.innerHTML = (`${playerChoice.innerText} is equals to ${computerChoice} its a Tie.`);

    } else if (playerChoice === scissors_button && computerChoice === 'Scissors') {
        result_h3.innerHTML = (`${playerChoice.innerText} is equals to ${computerChoice} its a Tie.`);

    } else if (playerChoice === lizard_button && computerChoice === 'Lizard') {
        result_h3.innerHTML = (`${playerChoice.innerText} is equals to ${computerChoice} its a Tie.`);

    } else if (playerChoice === spock_button && computerChoice === 'Spock') {
        result_h3.innerHTML = (`${playerChoice.innerText} is equals to ${computerChoice} its a Tie.`);

    }  else if (playerChoice === rock_button) {
        if (computerChoice === 'Paper') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === 'Scissors') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);



        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === 'Lizard') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);


        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === rock_button) {
        if (computerChoice === ' Spock') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === 'Rock') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === 'Scissors') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            win(str1, str2);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === 'Lizard') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === paper_button) {
        if (computerChoice === 'Spock') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === 'Rock') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === 'Paper') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === 'Lizard') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === scissors_button) {
        if (computerChoice === 'Spock') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === 'Rock') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === 'Paper') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === 'Scissors') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === lizard_button) {
        if (computerChoice === 'Spock') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === 'Rock') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === 'Paper') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === 'Scissors') {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);

        } else {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);
        }
    } else if (playerChoice === spock_button) {
        if (computerChoice === 'Lizard') {
            result_h3.innerHTML = (`${computerChoice} beats ${playerChoice.innerText} `);
            loose(str1, str2);

        } else {
            result_h3.innerHTML = (`${playerChoice.innerText} beats ${computerChoice} `);
            win(str1, str2);
        }
    }

}

/**  EventListener function for all buttons to get the information which button is being clicked
     and then work accordingly*/

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