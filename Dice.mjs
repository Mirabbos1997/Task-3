export default class Dice {
    constructor(values) {
        if (values.length !== 6) {
            throw new Error("A dice must have exactly 6 values.");
        }
        this.values = values;
    }

    roll() {
        return this.values[Math.floor(Math.random() * this.values.length)];
    }
}
