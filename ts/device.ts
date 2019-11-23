import { Remote, Cell, BTRemote } from './oop-ts';

let rm: Remote = new Remote()

let cl: Cell = new Cell()

let btRemote: BTRemote = new BTRemote()

let rem: Remote = {
    range: 10,
    rfBw: 2,
    signal: true,
    turnOff: () => { },
    turnOn: () => { }
}