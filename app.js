const game = () => {
    let pScore=0;
    let cScore=0;
    //Start the Game
    const startGame = ()=> {
        const playBTN = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        playBTN.addEventListener("click", () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadeIn");
        });
};
};
//play match
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = "";
        });
    });
    //computer options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach(options => {
        options.addEventListener("click", function() {
            //computer choice
            const computernumber = math.floor(math.random() * 3);
            const computerchoice = computeroptions[computernumber];
            setTimeout(() => {
                comparehands(this.textcontext, computerchoice);
                //update images
                playerHand.src = './assets/${this.textcontent}.png';
                computerHand.src = '.assets/${computerchoice}.png';
            }, 2000);
            //animation
            playerHand.style.animation = "shakeplayer 2s ease";
            computerHand.style.animation = "shakecomputer 2s ease";
        });
    });
};
const updatescore = () => {
    const playerscore = document.querySelector(".player-score p");
    const computerscore = document.querySelector(".computer-score p");
    playerscore.textContent = pScore;
    computerscore.textContent = cScore;
};
const comparehands = (playerchoice, computerchoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerchoice === computerchoice) {
        winner.textContent = "It's a tie";
        return;
    }
    //check for rock
    if (playerchoice === "rock") {
        if (computerchoice === "scissors") {
            winner.textContent = "Player Wins";
            pScore++;
            updatescore();
            return;
        }
    }
}
    //Check for Paper
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();