let colorArray = [];

const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const blueColor = document.getElementById('blue');
const newColorsButton = document.getElementById('new-colors');

const winnerColor = document.getElementById('winner-color');
const squareContainer = document.getElementsByClassName('square-container');
const squares = document.querySelectorAll('.square');

const createColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `RGB(${red}, ${green}, ${blue})`
}

for (let square of squares) {
    square.style.backgroundColor = createColor();
    colorArray.push(square.style.backgroundColor)

    square.addEventListener('click', () => {
        const winColor = () => {
            square.style.backgroundColor = createColor();
        }

        if (square.style.backgroundColor === winnerColor.innerHTML) {
            setInterval(winColor, 800)
            square.innerHTML = "YOU WON";
        } else {
            square.style.opacity = 0;
            square.style.transition = 'opacity 0.3s';
        }
    })
}
// finding the winnerColor inside all generated color's Array, and using it in the title
winnerColor.append(colorArray[Math.floor(Math.random() * colorArray.length)]);

newColorsButton.addEventListener('click', () => {
    location.reload();
})
