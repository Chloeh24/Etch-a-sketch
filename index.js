var grid = document.querySelector('#grid-container');


function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', cols)

    for(var i=0; i < (rows*cols); i++) {
        var cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item'
    }
}

makeRows(16, 16)

var block = document.querySelectorAll('.grid-item')

block.addEventListener('click', function() {
    block.classList.add('colored')
});