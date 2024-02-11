// declare cells to reference later on
var cells;

// select container div
const grid = document.querySelector(".grid-container");

// find gridsize to fill
var screen = document.querySelector(".screen");

// make initial grid when website loads
makeGrid(20);

// get user input
const form = document.querySelector("#gridsizeform");
form.addEventListener("submit", changeGrid);

// nested loop to make grid
function makeGrid(size) {
    // loop in the column direction and make row
    for (let i = 0; i < size; i++) {
        // create div for each row and add className of row
        const newDiv = document.createElement('div');
        newDiv.className = "gridrow";

        // in each row, create div flexbox and append 6 boxes
        for (let j = 0; j < size; j++) {
            // create div for each cell
            const newCell = document.createElement('div');
            newCell.className = "gridcell";

            // append cell to end of current gridrow
            newDiv.appendChild(newCell);
        }

        //append each row to gridbox
        screen.appendChild(newDiv);
    }
    // change color with mouse click and hover 
    cells = Array.from(screen.querySelectorAll(".gridcell"));
    cells.forEach(div => {
        div.addEventListener("mouseenter", (e) =>
            e.target.style.backgroundColor = color()
        )
    })
}

//generate a random color
function color() {
    // randomise a number between 0 to 16777215 (FFFFFF) and make it an integer
    // toString(16) takes in integer value and converts it into base 16 including values from [0, 9], [A, F], max = 255 --> FF
    // Math.floor(Math.random() * 99) generates opacity
    return "#" + Math.floor(Math.random() * 16777215).toString(16) + Math.floor(Math.random() * 99);
}

function deleteGrid() {
    screen.parentNode.removeChild(screen);
}

function changeGrid(e) {
    // prevent default behaviour of form submission
    e.preventDefault();

    // delete the grid -- return value = div.grid
    deleteGrid();

    // create grid with .grid 
    screen = document.createElement("div");
    screen.className = "screen";
    console.log(screen);
    grid.appendChild(screen);
    makeGrid(10);
}

