const menu = {
    _meal: '',
    _price: 0,

    // setters
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck
        } else {
            console.log('meal must be a string.')
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck
        } else {
            console.log('price must be a number')
        }
    },

    // getters
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} for $${this._price}!`
        } else {
            return 'Meal or price was not set correctly!'
        }
    }
}

console.log(menu.todaysSpecial)

menu.meal = 3
menu.price = 'three'
menu.meal = 'ramen'
menu.price = 3.50

console.log(menu)
console.log(menu.todaysSpecial)
