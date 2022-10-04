let selectSeconds = document.getElementById('seconds');
let selectTens = document.getElementById('tens');
let seconds = 0;
let tens = 0;
let interval;


const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');


const startTimer = () => {
    tens++

    if (tens <=9){
    selectTens.innerHTML = '0' + tens;
    }

    if (tens > 9){
    selectTens.innerHTML = tens;
    }

    if (tens == 99){
        tens = 0;
        seconds++;
        selectSeconds.innerHTML = '0' + seconds;

        if (seconds > 9) {
            selectSeconds.innerHTML  = seconds;
        }
        
    }
}


startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer,10);
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
} )

resetButton.addEventListener('click', () => {
    clearInterval(interval)
    tens = 0;
    seconds = 0;

    selectTens.innerHTML = '00';
    selectSeconds.innerHTML = '00';
})