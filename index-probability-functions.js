/**
 * FOOTER CONTAINER
 * Coin toss function to display the probability of Peter
 */
export const calculateProbabilityOfPeter = (numberOfPeter, totalTosses) => {
    const calculatePercentagePeter = numberOfPeter/totalTosses*100;
    const percentagePeter = Number(calculatePercentagePeter.toFixed(0));
    return percentagePeter;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display the probability of Benjamin
 */
export const calculateProbabilityOfBenjamin = (numberOfBenjamin, totalTosses) => {
    const calculatePercentageBenjamin = numberOfBenjamin/totalTosses*100;
    const percentageBenjamin = Number(calculatePercentageBenjamin.toFixed(0));
    return percentageBenjamin;
};
