/**
 * FOOTER CONTAINER
 * Coin toss function to calculate the probability of Peter
 * @param {number} numberOfPeter which is current number of tosses for Peter
 * @param {number} totalTosses which is the total number of tosses
 * @returns {number} roundPercentagePeter for probability of Peter
 */
export const calculateProbabilityOfPeter = (numberOfPeter, totalTosses) => {
    const calculatePercentagePeter = numberOfPeter/totalTosses*100;
    return Number(calculatePercentagePeter.toFixed(0));
};

/**
 * FOOTER CONTAINER
 * Coin toss function to calculate the probability of Benjamin
 * @param {number} percentageOfPeter which is the probability of Peter
 * @returns {number} percentageBenjamin for probability of Benjamin
 */
export const calculateProbabilityOfBenjamin = (percentageOfPeter) => {
    return 100 - percentageOfPeter;
};