const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now. getSeconds();
    const secondDegrees = (seconds / 60) * 360
};

setInterval(setDate, 1000);
