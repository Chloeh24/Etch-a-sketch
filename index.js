var grid = document.querySelector('#grid-container');


function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', cols)

    for(var i=0; i < (rows*cols); i++) {
        var cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item'
    }
}

makeRows(40, 40)


// change color 

var block = document.querySelectorAll('.grid-item')

for(var i=0; i < block.length; i++){
    block[i].addEventListener('click', function(){
        this.classList.add('colored');
    })
}

//clear
var clear = document.querySelector('button')

clear.addEventListener('click', function() {
    block.forEach(x, function() {
        if(x.classList.contains('colored')){
            x.classList.remove('colored')
        }
    })
    
})