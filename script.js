let container = document.createElement("div");
container.className = "container";
container.id = "container1";

let defaultGridSize = 16;
let gridSize = defaultGridSize;

function createGrid(gridSize){
    if (!isContainerEmpty(container)){
        container.innerHTML = '';
    }
    for(let i=0; i<gridSize; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
    
        for(let j=0; j<gridSize; j++){
            let div = document.createElement("div");
            div.className = "cell";
            div.id = "div" + i + j;

            addHoverEffect(div);

            row.appendChild(div);
        }
    
        container.appendChild(row);
    }
}

function addHoverEffect(cell){
    cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = getRandomColor();
    })
}

function isContainerEmpty(container){
    if(container.children.length === 0){
        return true;
    } else {
        return false;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let button = document.querySelector("#gridSizeButton");
button.addEventListener('click', function(){
    let userInput = prompt("Select number of squares per side for the new grid between 1 and 100.");

    if(userInput != null){
        if (isNaN(userInput)){
            alert("You must enter an integer");
        }
        else if (userInput < 1 || userInput > 100){
            alert("You must enter an integer between 1 and 100");
        }
        else {
            alert('You entered the number: ' + userInput);
            gridSize = userInput;
            createGrid(gridSize);
        }
        
    } 
    else {
        alert("Nothing was entered.");
    }
});

let clearGridButton = document.querySelector('#clearGrid');
clearGridButton.addEventListener('click', clearAllCells);

function clearAllCells() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell){
        cell.style.backgroundColor = "#FFFFFF"; //white
    })
};


createGrid(defaultGridSize);
document.body.appendChild(container);

