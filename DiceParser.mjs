import Dice from './Dice.mjs';

export default class DiceParser {
    static parse(args) {
        if (args.length < 3) {
            throw new Error("You must specify at least 3 dice configurations as 6 comma-separated integers.");
        }

        return args.map(arg => {
            const values = arg.split(',').map(Number);
            if (values.some(isNaN) || values.length !== 6) {
                throw new Error(`Invalid dice configuration: '${arg}'. Each dice must have 6 integers.`);
            }
            return new Dice(values);
        });
    }
}
