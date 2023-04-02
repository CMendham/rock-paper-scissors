

/* Rock Paper Scissors*/

function capitalizeFirstLetter(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

let playerScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {

    let gameOptions = ['Rock', 'Paper', 'Scissors'];

    /* Randomly select from gameOptions array */
    let computerChoice = gameOptions[Math.floor(Math.random() 
        * gameOptions.length)];
        console.log(`Computer selects ${computerChoice}`)

    let playerChoicePrompt = (prompt("Make your selection.", "Rock, Paper, or Scissors?"))

    let playerChoice = capitalizeFirstLetter(playerChoicePrompt);
        console.log(`Human selects ${playerChoice}`)

    function playGame () {
    
        if (computerChoice == "Rock" && playerChoice == "Rock" || computerChoice == "Paper"
            && playerChoice == "Paper" || computerChoice == "Scissors" && playerChoice == "Scissors") { 
                
            console.log(`Computer chose ${computerChoice} and you chose ${playerChoice} it's a tie.`)
    
        } else if (computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper"
        && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper") {
            
            computerScore ++
            console.log(`Computer chose ${computerChoice} and you chose ${playerChoice}
             computer wins. Score: Computer ${computerScore} to your ${playerScore}.`)
            
        } else if (computerChoice == "Scissors" && playerChoice == "Rock" || computerChoice == "Rock"
        && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Scissors") {
            
            playerScore ++;
            console.log(`Computer chose ${computerChoice} and you chose ${playerChoice}
             computer wins. Score: Computer ${computerScore} to your ${playerScore}.`);
        }
    }
    console.log(playGame())
}
