let userName = "Disney"
// Greets the user by name if provided
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!")

const userQuestion = "Will I get lucky tonight?"
// Logs the question and adds the users name if provided
console.log(`${userName ? userName : "The user"} asked "${userQuestion}"`)

// Gets a random integer between 0 - 7 inclusive
const randomNumber = Math.floor(Math.random() * 8)

let eightBall = ""

// Switch statement changes valude of eightBall based on value of randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "Aint no way in hell!"
    break
  case 1:
    eightBall = "Odds are 1 in a million."
    break
  case 2:
    eightBall = "It doesn't seem very likely."
    break
  case 3:
    eightBall = "Ehhh...  Seems maybe 50/50 at best."
    break
  case 4:
    eightBall = "Proceed with caution."
    break
  case 5:
    eightBall = "You got this, bro!"
    break
  case 6:
    eightBall = "You'd have to try to fail on purpose."
    break
  case 7:
    eightBall = "Not even God can stop it."
    break
  default:
    eightBall = "Somehow, Math broke.  Good job breaking Math.  Are you proud of yourself?"
    break
}

console.log(eightBall)