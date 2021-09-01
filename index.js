let numberOfTosses = 1;
let numberOfPeter = 0;
let numberOfBenjamin = 0;

const startButton = document.querySelector('#startButton');
const tossButton = document.querySelector('#tossButton');
const endButton = document.querySelector('#endButton');
const resetButton = document.querySelector('#resetButton')

startButton.addEventListener('click', () => {
    startToss();
});


tossButton.addEventListener('click', () => {
    const totalTosses = numberOfTosses++;
    const randomToss = Math.ceil(Math.random() * 2);
    displayToss(randomToss);
    displayCount(randomToss);
    displayProbabilities(totalTosses);
    displayTotalTosses(totalTosses);
});

endButton.addEventListener('click', () => {
    endToss();
});

resetButton.addEventListener('click', () => {
    document.location.reload();
});