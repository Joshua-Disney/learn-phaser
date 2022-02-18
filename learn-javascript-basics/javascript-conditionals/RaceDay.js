let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false

let runnerAge = 18

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000
  console.log(`Racer Number ${raceNumber} will race at 9:30 am!`)
} else if (runnerAge > 18) {
  console.log(`Racer Number ${raceNumber} will race at 11:00 am!`)
} else if (runnerAge === 18) {
  console.log(`Runner Number ${raceNumber} please report to the registration desk.`)
} else {
  console.log(`Racer Number ${raceNumber} will race at 12:30 pm!`)
}