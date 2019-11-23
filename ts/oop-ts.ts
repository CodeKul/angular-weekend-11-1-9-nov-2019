import { DeviceFallListener } from './../interfaces';
export class Remote implements DeviceFallListener {
    private range: number
    private rfBw: number
    private signal: boolean

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

    onFall(zldlvkvsaldkr: number) {
        console.log(`Called only when Free Fall On the Ground`)
        // sending wa notification
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
