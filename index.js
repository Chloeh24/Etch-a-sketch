var grid = document.querySelector('#grid-container');


function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', cols)

    for(var i=0; i < (rows*cols); i++) {
        var cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item'
    }
}

makeRows(50, 50)

//set grid size 
var gridButton = document.querySelector('#size')

gridButton.addEventListener('click', function(){
    var newGrid = Number(window.prompt('Enter grid size:', ''));
    
    makeRows(newGrid, newGrid)
    
});


// change color 

var block = document.querySelectorAll('.grid-item')

for(var i=0; i < block.length; i++){
    block[i].addEventListener('mouseover', function(){
        this.classList.add('colored');
    })
}

//random color
var colorButton = document.querySelector('#color')

colorButton.addEventListener('click', function(){
    changeColor();
})

var randomColor = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'dimgrey','black']
var index = 0;

function changeColor() {
    if (index < randomColor.length) {
    colored.style.backgroundColor = randomColor[index];
    index++
    } else {
        colored.style.backgroundColor = rgb(60, 60, 60);
        index = -1
    }

}

//clear
var clear = document.querySelector('#clear')

clear.addEventListener('click', function(){
    clearGrid()
});

function clearGrid() {
    for (var i=0; i < block.length; i++){
        if (block[i].classList.contains('colored')){
         block[i].classList.remove('colored')
        }
     }
}
