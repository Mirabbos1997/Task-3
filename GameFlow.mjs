import FairRandom from './FairRandom.mjs';
import readline from 'readline';
import chalk from 'chalk';

export default class GameFlow {
    constructor(diceList) {
        this.diceList = diceList;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    askQuestion(query) {
        return new Promise((resolve) => this.rl.question(query, resolve));
    }

    async showHelp() {
        console.log(chalk.yellowBright("\nHow to Play:"));
        console.log(
            chalk.greenBright(
                "1. The computer and you will choose different dice."
            )
        );
        console.log(
            chalk.greenBright(
                "2. Each die has 6 numbers. The goal is to roll a higher number than the computer."
            )
        );
        console.log(
            chalk.greenBright(
                "3. The game uses fair random generation to ensure no cheating."
            )
        );
        console.log(chalk.greenBright("4. You can exit the game anytime.\n"));
    }

    async determineFirstMove() {
        const key = FairRandom.generateKey();
        const value = FairRandom.generateRandomValue(2);
        const hmac = FairRandom.calculateHmac(key, value.toString());

        console.log(
            chalk.cyanBright(
                `I selected a random value in the range 0..1 (HMAC=${hmac}).`
            )
        );
        const userGuess = await this.askQuestion(
            chalk.yellow("Try to guess my selection (0 or 1): ")
        );

        if (userGuess === "exit") {
            console.log(chalk.redBright("Exiting the game. Goodbye!"));
            this.rl.close();
            process.exit(0);
        }

        const guessedValue = parseInt(userGuess, 10);
        console.log(
            chalk.cyanBright(`My selection: ${value} (KEY=${key.toString('hex')}).`)
        );
        return guessedValue !== value;
    }

    async playGame() {
        const computerFirst = await this.determineFirstMove();
        console.log(
            computerFirst
                ? chalk.blueBright("Computer makes the first move.")
                : chalk.blueBright("You make the first move.")
        );

        const availableDice = this.diceList.map((_, index) => index);

        let computerChoice;
        if (computerFirst) {
            computerChoice = availableDice.splice(
                Math.floor(Math.random() * availableDice.length),
                1
            )[0];
            console.log(
                chalk.cyanBright(`Computer chooses dice ${computerChoice + 1}.`)
            );
        }

        console.log(chalk.magenta("Choose your dice:"));
        availableDice.forEach((index) =>
            console.log(
                chalk.yellow(`${index} - ${this.diceList[index].values}`)
            )
        );

        const userChoice = await this.askQuestion(
            chalk.yellowBright("Your selection (or type 'help' or 'exit'): ")
        );

        if (userChoice === "help") {
            await this.showHelp();
            return this.playGame();
        }

        if (userChoice === "exit") {
            console.log(chalk.redBright("Exiting the game. Goodbye!"));
            this.rl.close();
            process.exit(0);
        }

        const userChoiceIndex = parseInt(userChoice, 10);
        if (!availableDice.includes(userChoiceIndex)) {
            console.log(chalk.redBright("Invalid choice. Exiting."));
            this.rl.close();
            return;
        }

        console.log(chalk.greenBright(`You chose dice ${userChoiceIndex + 1}.`));
        if (!computerFirst) {
            computerChoice = availableDice.find((index) => index !== userChoiceIndex);
            console.log(
                chalk.cyanBright(`Computer chooses dice ${computerChoice + 1}.`)
            );
        }

        const userRoll = this.diceList[userChoiceIndex].roll();
        const computerRoll = this.diceList[computerChoice].roll();

        console.log(
            chalk.magentaBright(
                `Your roll: ${userRoll}, Computer's roll: ${computerRoll}`
            )
        );
        if (userRoll > computerRoll) {
            console.log(chalk.greenBright("You win!"));
        } else if (userRoll < computerRoll) {
            console.log(chalk.redBright("Computer wins!"));
        } else {
            console.log(chalk.yellowBright("It's a tie!"));
        }

        this.rl.close();
    }
}
