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


// change color 

var block = document.querySelectorAll('.grid-item')

for(var i=0; i < block.length; i++){
    block[i].addEventListener('mouseover', function(){
        this.classList.add('colored');
    })
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