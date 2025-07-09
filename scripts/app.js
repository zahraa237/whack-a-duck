function init(){
    //all code goes here
    const gridElem = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score-display')

    const cells = []
    const gridwidth = 10;
    const numberOfCells = gridwidth * gridwidth; 

    let duckPosition = 4
    let score = 0

    function addDuck(){
        cells [duckPosition].classList.add('duck') //adding the class duck to the cell
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck') //removing the class duck from the cell
    }

    function play(){
        //setTimeout WAITS x seconds and then runs the function
        //runung it every x seconds
        setInterval(() => {
            removeDuck(); //removing the duck from the previous position
            duckPosition = Math.floor(Math.random() * numberOfCells); //getting a random number between 0 and 99
            addDuck(); //adding the duck to the new position

        }, 3000) //run every 3 seconds
    }

    function handelClick(event){

        //check if the cell has the class duck
        if (event.target.classList.contains('duck')){
            score += 10 }

        //updating the score display
        scoreDisplay.textContent = `Your score is ${score}` 

    }

    function creatGrid(){
        //for every cell we want creat a div and add it to the grid

        for (let i = 0; i < numberOfCells; i++) {
            //creatig the div 
            const cell = document.createElement('div')

            cell.textContent = i //adding the number of the cell

            //adding event listener to the cell
            cell.addEventListener('click', handelClick)

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