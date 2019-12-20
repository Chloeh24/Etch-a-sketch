var grid = document.querySelector('#grid-container');


function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', cols)

    for(var i=0; i < (rows*cols); i++) {
        var cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item'
    }
}

makeRows(50, 50);

//set grid size 
var gridButton = document.querySelector('#size')

gridButton.addEventListener('click', function(){
    var newGrid = Number(window.prompt('Enter grid size:', ''));
    
    makeRows(newGrid, newGrid)
    
});


// change color 

var block = document.querySelectorAll('.grid-item')
var draw = 'rgb(80, 80, 80)';

for(var i=0; i < block.length; i++){
    block[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = draw;
    })
};

//to black

var blackButton = document.querySelector('#black')

blackButton.addEventListener('click', function(){
    draw = 'rgb(80, 80, 80)'
})

//random color
var colorButton = document.querySelector('#color')

colorButton.addEventListener('click', function(){
    changeColor();
    console.log(colorButton.innerHTML)
})

var randomColor = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink','white']
var index = 0;

function changeColor(){ 
    if (index < randomColor.length) {
        draw = randomColor[index]
        colorButton.innerHTML = randomColor[index]
        index++
    } else {
        index = 0
        draw = randomColor[index]
    }
}



//clear
var clear = document.querySelector('#clear')

clear.addEventListener('click', function(){
    
    for (var i=0; i < block.length; i++){
        block[i].style.backgroundColor = 'rgb(204, 204, 204)'
        }
     });
