function init(){
    //all code goes here
    const gridElem = document.querySelector('.grid')

    const cells = []
    const gridwidth = 10;
    const numberOfCells = gridwidth * gridwidth; 

    let duckPosition = 4

    function addDuck(){
        cells [duckPosition].classList.add('duck') //adding the class duck to the cell
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck') //removing the class duck from the cell
    }

    function play(){
        setInterval(() => {
            removeDuck(); //removing the duck from the previous position
            duckPosition = Math.floor(Math.random() * numberOfCells); //getting a random number between 0 and 99
            addDuck(); //adding the duck to the new position

        }, 3000) //run every 3 seconds
    }

    function creatGrid(){
        //for every cell we want creat a div
        //add it to the grid
        for (let i = 0; i < numberOfCells; i++) {
            //creatig the div 
            const cell = document.createElement('div')
            //cell.classList.add('duck') //adding the pic class
            cell.textContent = i //adding the number of the cell
            cells.push(cell)
            //adding it to the main div
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    creatGrid();
    play(); //starts the game
}

document.addEventListener('DOMContentLoaded', init);