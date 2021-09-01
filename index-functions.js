const headerContainerQuery = document.querySelector('#headerContainer');
const mainContainerQuery = document.querySelector('#mainContainer');
const footerContainerQuery = document.querySelector('#footerContainer');
const tossImageQuery = document.querySelector('#tossImage');
const percentagePeterQuery = document.querySelector('#percentagePeter');
const totalPeterQuery = document.querySelector('#totalPeter');
const percentageBenjaminQuery = document.querySelector('#percentageBenjamin');
const totalBenjaminQuery = document.querySelector('#totalBenjamin');
const totalTossesQuery = document.querySelector('#totalTosses');


/**
 * HEADER CONTAINER
 * Coin toss function to hide the header container and display the main container to start the coin toss
 */
const startToss = () => {
    headerContainerQuery.style.display = 'none';
    mainContainerQuery.style.display = 'flex';
};

/**
 * MAIN CONTAINER
 * Coin toss function to display the image based on the randomise number of 1 and 2
 * @param {number} randomToss which is the random number of either 1 or 2
 * @returns {string} displays the image of a Peter or Benjamin 50p coin
 */
const displayToss = (randomToss) => {
    if (randomToss === 1) {
        tossImageQuery.setAttribute('src', 'images/coin-toss-peter.png');
        tossImageQuery.setAttribute('alt', 'peter rabbit 50p coin');
    } else if (randomToss === 2) {
        tossImageQuery.setAttribute('src','images/coin-toss-benjamin.png');
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
 * Coin toss function to display the probability of Peter and Benjamin
 */
const displayProbabilities = (totalTosses) => {
    const calculatePercentagePeter = numberOfPeter/totalTosses*100;
    const percentagePeter = calculatePercentagePeter.toFixed(0);
    percentagePeterQuery.innerText = `${percentagePeter}%`;

    const percentageBenjamin = 100 - percentagePeter;
    percentageBenjaminQuery.innerText = `${percentageBenjamin}%`;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to display every click of the Toss! button
 * @param {number} totalTosses which is the total number of tosses
 * @returns {string} displays the total number of tosses
 */
const displayTotalTosses = (totalTosses) => {
    totalTossesQuery.innerText = totalTosses;
};

/**
 * FOOTER CONTAINER
 * Coin toss function to hide the header container and display the main container
 */
const endToss = () => {
    mainContainerQuery.style.display = 'none';
    footerContainerQuery.style.display = 'flex';
};
