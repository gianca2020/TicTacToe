// Function to handle attaching event listeners

const player = 'X';
const opp = 'O';
let currPlayer = player;
let isFunctionCalled = false;
//idk about this one
let win = false;

function attachClickListener(cell) {
    cell.addEventListener('click', handleCellClick);
}

var cells = document.querySelectorAll('.cell');

// Iterate over each cell and use the named function to add a click event listener
cells.forEach(attachClickListener);

// Function to handle cell click, make this check for the position of the player
function handleCellClick(event) {
    var cell = event.target;
    var index = cell.getAttribute('data-index');
    // Check if the cell is empty or already has an 'X'
    if (!cell.innerText) {
        cell.innerText = currPlayer;
        position[index] = currPlayer;
        isFunctionCalled = true;

        checkWinner();

        //ternary object is nicer to read lol
        currPlayer = currPlayer === player ? opp : player;

    }
}

function restartAll(event){
    cells.forEach(function (cell){
        cell.innerText = '';
        currPlayer = player;
        isFunctionCalled = false;
        win=false;
        document.getElementById('winner').innerText = ``;
    })
}

const winner=
    [
        [0,1,2],
        [0,3,6],
        [2,5,8],
        [6,7,8],
        [3,4,5],
        [0,4,8],
        [2,4,6],
        [1,4,7]
    ];

let position = ["", "", "", "", "", "", "", "", ""]


function checkWinner() {
    for (let i = 0; i < winner.length; i++) {
        const condition = winner[i];
        const cellA = position[condition[0]]
        const cellB = position[condition[1]]
        const cellC = position[condition[2]]

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            win = true;
            document.getElementById('winner').innerText = `${cellA} wins!`;
            break;
        }else if(cellA === cellC && cellB === cellA){
            win = true;
            document.getElementById('winner').innerText = `${cellA} wins!`;
            break;
        }
    }
}

const restartButton = document  .getElementById('restart');
if(restart){
    restart.addEventListener('click', restartButton);
}


