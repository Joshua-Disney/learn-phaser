const team = {
    _players: [
        { firstName: 'Yen Sid', lastName: 'Disney', age: 34 },
        { firstName: 'Adri', lastName: 'Martinez', age: 30 },
        { firstName: 'Derrek', lastName: 'Matthews', age: 30 }
    ],
    _games: [
        { opponent: 'Cubs', teamPoints: 33, opponentPoints: 0 },
        { opponent: 'Angels', teamPoints: 5, opponentPoints: 2 },
        { opponent: 'Padres', teamPoints: 7, opponentPoints: 6 }
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(newPlayer)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(newGame)
    }
}

team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)

console.log(team._players)
console.log(team._games)
