import chalk from 'chalk';
import Table from 'cli-table3';

export default class HelpTable {
    static generate(probabilities, diceList) {
        // Create the table with proper headers
        const table = new Table({
            head: [chalk.white('Dice'), ...diceList.map((_, i) => chalk.blueBright(`Dice ${i + 1}`))],
        });

        // Populate rows with probabilities
        probabilities.forEach((row, i) => {
            table.push([
                chalk.greenBright(`Dice ${i + 1}`),
                ...row.map((p) => chalk.yellowBright(p.toFixed(2))),
            ]);
        });

        return table.toString();
    }
}
