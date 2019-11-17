class Car {
    constructor() {
        this.speed = 10
    }

    speedUp() {
        this.speed++
    }
}

class Bmw extends Car {

    constructor() {

    }
}

let cr = new Car()
cr.speed = 78
cr.speedUp()
console.log(cr.speed)

function Animal() {

    
}

let an = new Animal()

