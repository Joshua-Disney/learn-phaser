const getSleepHours = day => {
    // SHould be updated each day representing how many hours actually slept
    switch (day) {
      case 'Monday': return 8
        break
      case 'Tuesday': return 8
        break
      case 'Wednesday': return 8
        break
      case 'Thursday': return 8
        break
      case 'Friday': return 8
        break
      case 'Saturday': return 8
        break
      case 'Sunday': return 8
        break
      default: return 'Probs 8'
        break
    }
  }
  
  const getActualSleepHours = () =>  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
  const getIdealSleepHours = () => {
    let idealWeekHours = 5 * 5
    let idealWeekendHours = 10 * 2
    return idealWeekHours + idealWeekendHours
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  
    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep this week.  ^_^')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed this week.  ${actualSleepHours - idealSleepHours} hours of it, in fact.`)
    } else {
      console.log(`You should probs get some more sleep, my dude.  You're ${idealSleepHours - actualSleepHours} hours behind where you said you want to be.`)
    }
  }
  