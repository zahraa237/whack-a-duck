function init(){
    //all code goes here
    const gridElem = document.querySelector('.grid')

    const cells = []
    const gridwidth = 10;
    const numberOfCells = gridwidth * gridwidth; 

    function creatGrid(){
        //for every cell we want creat a div
        //add it to the grid
        for (let i = 0; i < numberOfCells; i++) {
            //creatig the div 
            const cell = document.createElement('div')
            cell.classList.add('duck') //adding the pic class
            cell.textContent = i + 1 //adding the number of the cell
            cells.push(cell)
            //adding it to the main div
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    creatGrid();
}

document.addEventListener('DOMContentLoaded', init);