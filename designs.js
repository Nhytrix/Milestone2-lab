//define variables:
var gridHeight, gridWidth, selectedColor;
var tableGrid;
var submitted;

window.onload = init;

// When size is submitted by the user, call makeGrid()


function init() {
  console.log('init starting');
  gridHeight = document.getElementById('inputHeight');
  gridWidth = document.getElementById('inputWidth');
  selectedColor = document.getElementById('colorPicker');
  tableGrid = document.getElementById('pixelCanvas');
 document.getElementById('sizePicker').addEventListener('submit',makeGrid);
}

function makeGrid() {
  // Your code goes here!
  console.log('makeGrid() function starting...');


}
