const startButton = document.querySelector('#startButton');
const tossButton = document.querySelector('#tossButton');
const endButton = document.querySelector('#endButton');
const resetButton = document.querySelector('#resetButton')

startButton.addEventListener('click', () => {
    startToss();
});


tossButton.addEventListener('click', () => {
    let numberOfTosses = 1;
    let numberOfPeter = 0;
    let numberOfBenjamin = 0;
    const totalTosses = numberOfTosses++;
    const randomToss = Math.ceil(Math.random() * 2);
    displayToss(randomToss);
    displayCount(randomToss, numberOfPeter, numberOfBenjamin);
    displayProbabilities(numberOfPeter, totalTosses);
    displayTotalTosses(totalTosses);
});

endButton.addEventListener('click', () => {
    endToss();
});

resetButton.addEventListener('click', () => {
    document.location.reload();
});