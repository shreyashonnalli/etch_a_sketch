let body = document.querySelector("body");
let gridBox = document.querySelector(".grid-holder");
let gridGeneratorButton = document.getElementById("gridGeneratorButton");
let gridSize = null;
let gridElement = new Array(gridSize);
let gridRow = new Array(gridSize);
let drawTimer = null;
initialiseGrid();
let gridbuttons = gridElement;
makeButtonsWork();

body.appendChild(gridGeneratorButton);


document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function makeButtonsWork(){
  gridbuttons.forEach((button) => {
    button.addEventListener('mouseover',colourElement);
    button.addEventListener('mousedown', colourElement);
    //button.addEventListener('mouseout', ()=>button.setAttribute('style','background-color:white;border:1px solid black;min-width:30px;height:30px;'))
  });
}

gridbuttons.forEach((button) => {
  button.addEventListener('mouseover',colourElement);
  button.addEventListener('mousedown', colourElement);
  //button.addEventListener('mouseout', ()=>button.setAttribute('style','background-color:white;border:1px solid black;min-width:30px;height:30px;'))
});

gridGeneratorButton.addEventListener('click',changeGridSize);



function changeGridSize(){
  let gridSizeInput = parseInt(prompt("Please enter the new grid size","16"));
  clearGrid(gridSize);
  initialiseGrid(gridSizeInput);
  gridbuttons = gridElement;
  makeButtonsWork();
}


function colourElement(e){
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.setAttribute('style','background-color:aqua;border:1px solid black;min-width:30px;height:30px;');
}

function initialiseGrid(sizeOfGrid = 16){
  gridSize = sizeOfGrid;
  gridElement = new Array(sizeOfGrid);
  gridRow = new Array(sizeOfGrid);
  //this loop initialises all elements of grid
  for(let i=0;i<sizeOfGrid*sizeOfGrid;i++){
    if(i<sizeOfGrid){
      gridRow[i] = document.createElement("div");
    }
    gridElement[i] = document.createElement("div");
    gridElement[i].setAttribute('style','border:1px solid black;min-width:30px;height:30px;');
  }

  //this loop arranges elements into a grid
  for(let i=0;i<sizeOfGrid;i++){
    for(let j=(i*sizeOfGrid);j<((i+1)*sizeOfGrid);j++){
      gridRow[i].appendChild(gridElement[j]);
    }
    gridRow[i].setAttribute('style','display: flex;');
    gridBox.appendChild(gridRow[i]);
  }
}


function clearGrid(sizeOfGrid){

  for(let i=0;i<sizeOfGrid*sizeOfGrid;i++){
    if(i<gridSize){
      gridRow[i].parentElement.removeChild(gridRow[i]);
      gridRow[i] = null;
    }
    gridElement[i].parentElement.removeChild(gridElement[i]);
    gridElement[i] = null;
  }

}
