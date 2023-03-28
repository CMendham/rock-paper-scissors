/* Pseudocode for Rock Paper Scissors
        1. Allow player to select from rock, paper, or scissors
        2. Allow one human and one computer player
        3. Same selection is a tie
        4. Rock beats Scissors
        5. Scissors beats Paper
        6. Paper beats Rock
*/

/* Create a function that represents the computer randomly
selecting rock, paper, or scissors */


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getComputerChoice() {
    let x = getRandomInt()    
        if (x == 1) {
            getComputerChoice = "Rock";
        } else if (x == 2) {
            getComputerChoice = "Paper";
        } else {
            getComputerChoice = "Scissors";
        }
    return getComputerChoice
}
