class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello, I am ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} year${this.age!=1?'s':''} old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation='Nowhere') {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting
    }

}

const me = new Person('Derek Willingham', 23)
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Person(undefined, 1)
console.log(other.getGreeting())
console.log(other.getDescription())

const theTraveler = new Traveler('Daustin', undefined, undefined)
console.log(theTraveler.getGreeting())
