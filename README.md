
# Dice Game

This project implements a generalized dice game as per the task requirements, ensuring **fair random number generation** using HMAC-based cryptographic methods. The game supports multiple dice configurations and provides a CLI-based interactive experience.

---

## Features

- Cryptographically secure random number generation with HMAC for fairness.
- Command-line interface for user interaction.
- Probabilities table calculated dynamically and displayed using a formatted table.
- Comprehensive error handling for invalid input.
- Options for **Help** and **Exit** during the game.

---

## Requirements

- Node.js version 14 or higher.
- `chalk` and `cli-table3` libraries for enhanced terminal output.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dice-game.git
   cd dice-game
   ```

2. Install dependencies:
   ```bash
   npm install chalk cli-table3
   ```

---

## How to Run

### Valid Input

Run the game with valid dice configurations:
```bash
node main.mjs 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3
```

### Invalid Input

Run the game with invalid configurations to test error handling:

1. No dice configurations:
   ```bash
   node main.mjs
   ```
2. Fewer than 3 dice:
   ```bash
   node main.mjs 2,2,4,4,9,9 1,1,6,6,8,8
   ```
3. Invalid dice configuration:
   ```bash
   node main.mjs 2,2,4,4 1,1,6,6,8,8 3,3,5,5,7,7
   ```

---

## Gameplay Instructions

1. When the game starts, a **Probabilities Table** will be displayed showing the probabilities of winning for each dice pair.
2. Follow the prompts:
   - Guess the computer's random value (0 or 1).
   - Choose your dice.
   - Roll the dice.
3. View the results and determine the winner.

### Help Option
At any time, type `help` to view instructions on how to play.

### Exit Option
Type `exit` to quit the game.

---

## Example Commands

1. **With Four Identical Dice**:
   ```bash
   node main.mjs 1,2,3,4,5,6 1,2,3,4,5,6 1,2,3,4,5,6 1,2,3,4,5,6
   ```

2. **With Three Unique Dice**:
   ```bash
   node main.mjs 2,2,4,4,9,9 1,1,6,6,8,8 3,3,5,5,7,7
   ```

---

## Submission Requirements

### To Submit:
1. Record a video demonstrating:
   - Valid and invalid inputs.
   - Probabilities table display.
   - Two complete game rounds.
2. Upload the video to a public platform (YouTube, Google Drive, etc.).
3. Share the video link and GitHub repository with:
   - **p.lebedev@itransition.com**

---

## License

This project is provided for educational purposes and complies with the task requirements.
