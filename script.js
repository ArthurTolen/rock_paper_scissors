let playerSelection, computerSelection, playerRoundsWon = 0,
compRoundsWon = 0;


// Choose computer's play:
function computerPlay() {

    let comPlayNum = Math.floor(Math.random() * 3);
    if (comPlayNum == 0) {
        return "rock";
    } else if (comPlayNum == 1) {
        return "paper";
    } else if (comPlayNum == 2) {
        return "scissors";
    }
}

// Play one round:
function playRound(playerSelection, computerSelection) {

    // Turn player selection into lowercase:
    playerSelection = prompt("Make your move: rock, paper, or scissors?").toLowerCase();
    computerSelection = computerPlay();

    // Possible outcomes:
    if ((playerSelection == "rock" && computerSelection == "rock")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". It's a tie, hmm you copied my move!") // Here rock vs rock _ tie
        //TIE
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You lose! try again c'mon."); // Here rock vs paper _ comp wins
        compRoundsWon++;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You win! Let's see if you can keep that up."); // Here rock vs scissors _ player wins
        playerRoundsWon++;
    } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". It's a tie, you copied my move!"); // Here paper vs paper _ tie
        //TIE
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You lose! keep trying..let's go."); // Here paper vs scissors _ comp wins
        compRoundsWon++;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You win! Nice move."); // Here paper vs rock _ player wins
        playerRoundsWon++;
    } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". It's a tie, come on... gotta stop copying me now!"); // Here scissors vs scissors _ tie
        //TIE
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You win! You're getting really good"); // Here scissors vs paper _ player wins
        playerRoundsWon++;
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return ("Computer chose " + computerSelection + ", and You chose " + playerSelection + ". You lose! too bad, I thought you had this."); // Here scissors vs rock _ comp wins
        compRoundsWon++;
    }

}


// Play 5 rounds, keep score and log winner/loser at the end:

function game() {
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    
    if (compRoundsWon > playerRoundsWon) {
        console.log("Haha! I won this game.");
    } else if (compRoundsWon < playerRoundsWon) {
        console.log("Ight! You won this game.")
    } else {
        console.log("Wow! It's a tie!")
    }
}

game();
