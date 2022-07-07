let gridBox = document.querySelector(".grid-holder");
let gridElement = new Array(16*16);
let gridRow = new Array(16);
initialiseGrid();


function initialiseGrid(){
  for(let i=0;i<196;i++){
    if(i<16){
      gridRow[i] = document.createElement("div");
    }
    gridElement[i] = document.createElement("div");
    gridElement[i].setAttribute('style','color:yellow;background:blue;border:1px solid black;width:100px;height:100px;');
    gridBox.appendChild(gridElement[i]);
  }
}
