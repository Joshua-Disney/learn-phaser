const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput
    } else {
      console.log('Invalid input!')
    }
  }
  
  const getComputerChoice = () => {
    const compChoice = Math.floor(Math.random() * 3)
    if (compChoice === 0) {
      return 'rock'
    } else if (compChoice === 1) {
      return 'paper'
    } else if (compChoice === 2) {
      return 'scissors'
    } else {
      console.log('Error getting computer choice')
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return `The game was a tie between ${userChoice} and ${computerChoice}.`
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return `The computer chose ${computerChoice} and won over the user's ${userChoice}.`
      } else {
        return `The user chose ${userChoice} and won over the computer's ${computerChoice}.`
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return `The computer chose ${computerChoice} and won over the user's ${userChoice}.`
      } else {
        return `The user chose ${userChoice} and won over the computer's ${computerChoice}.`
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return `The computer chose ${computerChoice} and won over the user's ${userChoice}.`
      } else {
        return `The user chose ${userChoice} and won over the computer's ${computerChoice}.`
      }
    } else if (userChoice === 'bomb') {
      return `The user was sneaky and chose ${userChoice}!  The computer's ${computerChoice} was destroyed.  The user wins!`
    }
  }
  
  const playGame = (choice) => {
    let userChoice = getUserChoice(choice)
    let computerChoice = getComputerChoice()
    console.log(determineWinner(userChoice, computerChoice))
  }