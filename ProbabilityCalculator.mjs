export default class ProbabilityCalculator {
    static calculateProbabilities(diceList) {
        return diceList.map(dice1 => {
            return diceList.map(dice2 => {
                let wins = 0;
                let total = 0;

                dice1.values.forEach(value1 => {
                    dice2.values.forEach(value2 => {
                        total++;
                        if (value1 > value2) wins++;
                    });
                });

                return wins / total;
            });
        });
    }
}
