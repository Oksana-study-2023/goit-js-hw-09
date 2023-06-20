const bodyEl = document.querySelector(`body`);
const btnStart = document.querySelector(`button[data-start]`);
const btnStop = document.querySelector(`button[data-stop]`);
const COLOR_CHANGE_TIME = 1000;


btnStart.addEventListener(`click`, onBtnStartClick);
btnStop.addEventListener(`click`, onBtnStopClick);

function onBtnStartClick() {
    console.log(`start`);
    // setTimeout(() => {
    //     getRandomHexColor();
    // }, COLOR_CHANGE_TIME);
};

function onBtnStopClick() {
    console.log(`stop`);
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }


