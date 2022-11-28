// User Choice Function
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      // Secret Cheat Code
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Invalid input. Options are rock, paper, scissors.");
    }
  };
  
  // Computer Choice Function
  function getComputerChoice() {
      const getComputerChoice = Math.floor(Math.random() * 3);
  
    switch (getComputerChoice) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };
  
  // Winner Function
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Same choice: DRAW";
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Paper wraps rock: COMPUTER WINS!";
      } else if (computerChoice === "scissors") {
        return "Rock destroys scissors: YOU WIN!";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Scissors cuts paper: COMPUTER WINS!";
      } else if (computerChoice === "rock") {
        return "Paper wraps rock: YOU WIN!";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Rock destroys scissors: COMPUTER WINS!";
      } else if (computerChoice === "paper") {
        return "Scissors cuts paper: YOU WIN!";
      }
    }
  
    // Secret Cheat Code
    if (userChoice === "bomb") {
      if (
        computerChoice === "rock" ||
        computerChoice === "paper" ||
        computerChoice === "scissors") {
          return 'Bomb destroys everything: YOU WIN!';
        } 
    }
  };
  
  // Play Game Function
  function playGame() {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner('scissors', computerChoice));
  }
  
  playGame();
  