class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }

    // getters
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this.ratings
    }

    // setters
    set isCheckedOut(boo) {
        this._isCheckedOut = boo
    }

    // Methods
    getAverageRating() {
        let value = this._ratings.reduce((currentVal, accumulator) => {
            return currentVal + accumulator
        }, 0)

        return value / this._ratings.length
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    addRating(rating) {
        this._ratings.push(rating)
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title)
        this._author = author
        this._pages = pages
    }

    // getters
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director
        this._runTime = runTime
    }

    // getters
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title)
        this._artist = artist
        this._songs = songs
    }

    // getters
    get artist() {
        return this._artist
    }
    get songs() {
        return this._songs
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())
