document.querySelector('#startButton').addEventListener('click', () => {
    startToss();
});


document.querySelector('#tossButton').addEventListener('click', () => {
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

document.querySelector('#endButton').addEventListener('click', () => {
    endToss();
});

document.querySelector('#resetButton').addEventListener('click', () => {
    document.location.reload();
});