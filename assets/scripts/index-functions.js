/**
 * HEADER CONTAINER
 * Coin toss function to hide the header container and display the main container to start the coin toss
 * @returns {string} hides the header container and shows the main container
 */
const startToss = () => {
    const headerContainerQuery = document.querySelector('#headerContainer');
    const mainContainerQuery = document.querySelector('#mainContainer');
    headerContainerQuery.style.display = 'none';
    mainContainerQuery.style.display = 'flex';
};

/**
 * MAIN CONTAINER
 * Coin toss function to display the image based on the randomise number of 1 and 2
 * @param {number} randomToss which is the random number of either 1 or 2
 * @returns {string} displays the image of a Peter or Benjamin 50p coin with the alt tag
 */
const displayToss = (randomToss) => {
    const tossImageQuery = document.querySelector('#tossImage');
    if (randomToss === 1) {
        tossImageQuery.setAttribute('src', '../assets/images/coin-toss-peter.png');
        tossImageQuery.setAttribute('alt', 'peter rabbit 50p coin');
    } else if (randomToss === 2) {
        tossImageQuery.setAttribute('src','../assets/images/coin-toss-benjamin.png');
        tossImageQuery.setAttribute('alt', 'benjamin rabbit 50p coin');
    }
};

/**
 * FOOTER CONTAINER
 * Coin toss function to add and display the counts of Peter and Benjamin
 * @param {number} randomToss which is the random number of either 1 or 2
 * @returns {string} displays the counts for Peter and Benjamin
 */
const displayCount = (randomToss) => {
    const totalPeterQuery = document.querySelector('#totalPeter');
    const totalBenjaminQuery = document.querySelector('#totalBenjamin');
    if (randomToss === 1) {
        numberOfPeter += 1;
        totalPeterQuery.innerText = numberOfPeter;
    } else if (randomToss === 2) {
        numberOfBenjamin +=1;
        totalBenjaminQuery.innerText = numberOfBenjamin;
    }
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display the probability of Peter
 * @param {number} totalTosses which is the total number of tosses
 * @return {number} percentagePeter which is the probability of getting Peter as an integer
 */
const calculateProbabilityOfPeter = (totalTosses) => {
    const calculatePercentagePeter = numberOfPeter/totalTosses*100;
    const percentagePeter = Number(calculatePercentagePeter.toFixed(0));
    return percentagePeter;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display the probability of Benjamin
 * @param {number} totalTosses which is the total number of tosses
 * @return {number} percentagePeter which is the probability of getting Peter as an integer
 */
const calculateProbabilityOfBenjamin = (totalTosses) => {
    const calculatePercentageBenjamin = numberOfBenjamin/totalTosses*100;
    const percentageBenjamin = Number(calculatePercentageBenjamin.toFixed(0));
    return percentageBenjamin;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display the probability of Peter and Benjamin
 * @param {number} totalTosses which is the total number of tosses
 * @return {string} probabilities of Peter and Benjamin
 */
const displayProbabilities = (totalTosses) => {
    const percentagePeterQuery = document.querySelector('#percentagePeter');
    const percentageBenjaminQuery = document.querySelector('#percentageBenjamin');
    percentagePeterQuery.innerText = `${calculateProbabilityOfPeter(totalTosses)}%`;
    percentageBenjaminQuery.innerText = `${calculateProbabilityOfBenjamin(totalTosses)}%`;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display every click of the Toss! button
 * @param {number} totalTosses which is the total number of tosses
 * @returns {string} displays the total number of tosses
 */
const displayTotalTosses = (totalTosses) => {
    const totalTossesQuery = document.querySelector('#totalTosses');
    totalTossesQuery.innerText = totalTosses;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to hide the header container and display the main container
 * @returns {string} hides the main container and shows the footer container
 */
const endToss = () => {
    const mainContainerQuery = document.querySelector('#mainContainer');
    const footerContainerQuery = document.querySelector('#footerContainer');
    mainContainerQuery.style.display = 'none';
    footerContainerQuery.style.display = 'flex';
};
