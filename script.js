// select container div
const grid = document.querySelector(".grid-container");

// find gridsize to fill
const screen = document.querySelector(".grid");

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
}

makeGrid(1600);