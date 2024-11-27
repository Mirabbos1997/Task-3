import DiceParser from './DiceParser.mjs';
import ProbabilityCalculator from './ProbabilityCalculator.mjs';
import HelpTable from './HelpTable.mjs';
import GameFlow from './GameFlow.mjs';
import chalk from 'chalk';

async function main() {
    try {
        console.log(chalk.greenBright("Welcome to the Dice Game!"));
        console.log(chalk.yellow("Use the command-line menu to select options.\n"));

        const args = process.argv.slice(2);
        const diceList = DiceParser.parse(args);

        const probabilities = ProbabilityCalculator.calculateProbabilities(diceList);
        console.log(chalk.blueBright("Probabilities Table:"));
        console.log(HelpTable.generate(probabilities, diceList));

        const game = new GameFlow(diceList);
        await game.playGame();
    } catch (error) {
        console.error(chalk.redBright(`Error: ${error.message}`));
        console.log(
            chalk.yellowBright(
                "Usage: node main.mjs 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3"
            )
        );
    }
}

main();
