function init(){
    //all code goes here
    const gridElem = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score-display')
    const soundElem = document.querySelector('#sound')

    const cells = []
    const gridwidth = 10;
    const numberOfCells = gridwidth * gridwidth; 

    let duckPosition = 4
    let score = 0
    let totalDucks = 0

    function addDuck(){
        cells [duckPosition].classList.add('duck') //adding the class duck to the cell
        totalDucks++; //incrementing the total ducks everytime it runs

    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck') //removing the class duck from the cell
    }

    function endGame(){
        alert(`Game Over! Your final score is ${score}`) //alerting the user that the game is over
        score = 0
        scoreDisplay.textContent = `Your score is ${score}` //updating the score display
        totalDucks = 0
    }

    function play(){
        //setTimeout WAITS x seconds and then runs the function
        //runung it every x seconds
        setInterval(() => {
            if(totalDucks < 10){
            removeDuck(); //removing the duck from the previous position
            duckPosition = Math.floor(Math.random() * numberOfCells); //getting a random number between 0 and 99
            addDuck(); }//adding the duck to the new position
            else {
                endGame(); 
            }

    }, 1000) //run every 1 seconds

        

    }

    function handelClick(event){

        //check if the cell has the class duck
        if (event.target.classList.contains('duck')){
            soundElem.pause(); //pause the sound if it is playing
            soundElem.currentTime = 0; //reset the sound to the beginning
            score += 10 }

        //updating the score display
        scoreDisplay.textContent = `Your score is ${score}` 
        soundElem.play(); //playing the sound when the duck is clicked
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
    play(); 
}

document.addEventListener('DOMContentLoaded', init);