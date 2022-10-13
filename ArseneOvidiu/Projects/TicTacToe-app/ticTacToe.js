
const gameTabs = document.querySelectorAll('.game-tab');
const form = document.querySelector('.playerSelect-container');
const startMessage = document.querySelector('#startMessage');
const firstPlayer = document.getElementById('firstPlayer');
const submit = document.getElementById('submit');
const header = document.getElementById('header');


const refreshGame = () => {
    location.reload()
}

form.addEventListener('submit', (e) => {
    e.preventDefault();


    // shows if x should be placed on click - below on - if (weapon === 'o') the false value is set -> xChoice = false;
    let xChoice = true;

    const formData = new FormData(e.target);
    const weapon = formData.get('name').toLowerCase();

    if (weapon === 'x') {
        startMessage.style.display = 'none';
        firstPlayer.style.display = 'none';
        submit.value = 'Refresh the game';
        form.addEventListener('submit', refreshGame);

    } else if (weapon === 'o') {
        startMessage.style.display = 'none';
        firstPlayer.style.display = 'none';
        submit.value = 'Refresh the game';
        xChoice = false;
        form.addEventListener('submit', refreshGame);

    } else {
        startMessage.innerHTML = `Sorry, that's not a valid option, try X or O`;
        xChoice = undefined;
        firstPlayer.style.display = 'none';
        submit.value = 'Refresh the game';
        form.addEventListener('submit', refreshGame);
    }

    // every square of the game has an id=number of that square; ex: id='three' for the 3rd square
    // once you click a square the number of that square gets pushed to an array
    let winnerX = [];
    let winnerO = [];
    let winnerL = [];



    // for loop that sets 'X' or 'O' to squares
    for (let tab of gameTabs) {
        tab.addEventListener('click', () => {
            if (xChoice === undefined) {
                tab.innerHTML = 'L';
                winnerL.push(tab.id);
            } else if (!xChoice && tab.innerHTML === '') {
                tab.innerHTML = 'O';
                xChoice = true;
                winnerO.push(tab.id);
            } else if (xChoice && tab.innerHTML === '') {
                tab.innerHTML = 'X';
                xChoice = false;
                winnerX.push(tab.id);
            }

            // console.log(winnerX);

            //winning scenarios
            let win1 = ['one', 'two', 'three'];
            let win2 = ['four', 'five', 'six'];
            let win3 = ['seven', 'eight', 'nine'];
            let win4 = ['one', 'four', 'seven'];
            let win5 = ['two', 'five', 'eight'];
            let win6 = ['three', 'six', 'nine'];
            let win7 = ['one', 'five', 'nine'];
            let win8 = ['three', 'five', 'seven'];

            // function that checks if the winning scenarios are part of the created array with pushed id's

            let xWins = (array) => {
                let success = array.every((val) => {
                    return winnerX.indexOf(val) !== -1;
                })
                return success;
            };

            let oWins = (array) => {
                let success = array.every((val) => {
                    return winnerO.indexOf(val) !== -1;
                })
                return success;
            };

            let lWins = (array) => {
                let success = array.every((val) => {
                    return winnerL.indexOf(val) !== -1;
                })
                return success;
            };

            // condition to stop the title modifying from ex: X wins to O wins in the same game
            if (header.innerHTML === 'Tic Tac Toe') {

                if (xWins(win1) || xWins(win2) || xWins(win3) || xWins(win4) || xWins(win5) || xWins(win6) || xWins(win7) || xWins(win8)) {
                    header.innerHTML = 'X wins!';
                }

                if (oWins(win1) || oWins(win2) || oWins(win3) || oWins(win4) || oWins(win5) || oWins(win6) || oWins(win7) || oWins(win8)) {
                    header.innerHTML = 'O wins!';
                }

                if (lWins(win1) || lWins(win2) || lWins(win3) || lWins(win4) || lWins(win5) || lWins(win6) || lWins(win7) || lWins(win8)) {
                    header.innerHTML = 'YOU UNLOCKED THE EASTER EGG';
                }
            }

        });

    }
})

