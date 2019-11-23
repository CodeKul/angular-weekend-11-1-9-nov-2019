export class Remote {
    range: number
    rfBw: number
    signal: boolean
    
    constructor() {
        this.range = 10
        this.rfBw = 1
    }

    turnOn() {
        this.signal = true
    }

    turnOff() {
        this.signal = false
    }
}

export class BTRemote extends Remote {

}

export class WiFiRemote extends Remote {

}

export class Cell {

}

(function () {

})() //iife //
