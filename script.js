let cells = [];
let size = prompt("What size chess board?: ");
function displayChess() {
    
    // let size = 5;
    let mainDiv = document.getElementById('main-div');
    for (let i = 0; i < size; i++) {
        let lineDiv = document.createElement('div');
        lineDiv.className = 'line';
        lineDiv.style.height = 50/size + 'vh';
        for (let y = 0; y < size; y++) {
            if ((i + y) % 2 == 0) {
                let white = document.createElement('div');
                white.className += 'whiteChess chess';
                white.style.width = 50/size + 'vh';
                white.style.height = 50/size + 'vh';
                white.style.backgroundColor = 'white';
                lineDiv.appendChild(white);
                cells.push(white);
            } else {
                let black = document.createElement('div');
                black.className += 'blackChess chess';
                black.style.width = 50/size + 'vh';
                black.style.height = 50/size + 'vh';
                black.style.backgroundColor = 'black';
                lineDiv.appendChild(black);
                cells.push(black);
            }
        }
        let newLine = document.createElement('br');
        lineDiv.appendChild(newLine);
        mainDiv.appendChild(lineDiv);
    }
    console.log(cells);
    //requestAnimationFrame(() => animate5(0)); 
    requestAnimationFrame((incremental) => baseAnimation(incremental, 0, 0)); 
}



/**
 * Animate the cells of the array
 * @param time - The current time in milliseconds.
 */
function animate(time){

    let realtime = time/20;
    let index = Math.floor(realtime) % cells.length;
    if (cells[index - 1]) {
        cells[index - 1].style.backgroundColor = '';
    } else {
        cells[cells.length - 1].style.backgroundColor = '';
    }
    cells[index].style.backgroundColor = 'yellow';
    requestAnimationFrame(() => animate(time + 1));
}



/**
 * Animate the cells in the grid by changing their color
 * @param time - The time in milliseconds since the animation started.
 */
function animate2(time) {

    let realtime = time/20;
    let index = Math.floor(realtime) % cells.length;
    let column = index % Math.sqrt(cells.length);
    let row = Math.floor(index / Math.sqrt(cells.length));
    const board = Math.floor(realtime / cells.length)
    cells[index].style.backgroundColor = (column + row + board)  % 2 === 0 ? "black" : "white" ;
    requestAnimationFrame(() => animate2(time + 1));
}



/**
 * Animate the cells of the grid by changing their background color every 20 milliseconds
 * @param time - The current time in milliseconds.
 */
function animate3(time){

    if (time % 20 === 0) {
        for (const cell of cells) {
            cell.style.backgroundColor = cell.style.backgroundColor === 'white' ? 'black' : 'white';
        }
    }
    requestAnimationFrame(() => animate3(time + 1))
}




function animate4(time) {
    let realtime = time / 20;
    let index = Math.floor(realtime) % cells.length;
   
    let transparency = (1 / cells.length);  //numero 0-1 trasparenza
    let opacity = transparency * index;
    cells[index].style.backgroundColor = 'rgb(255, 0, 0, ' + opacity + ')';
    requestAnimationFrame(() => animate4(time + 1));
}




function animate5(time) {
    let realtime = time*2;
    let index = Math.floor(realtime) % cells.length;
    let transparency = (1 / cells.length);
    let opacity = transparency * index;
    cells[index].style.backgroundColor = 'rgb(255, 0, 0, ' + opacity + ')';
    for (const cell of cells) {
        cell.style.transform = 'rotate(' + realtime + 'deg)';
    }
    
    requestAnimationFrame(() => animate3(time + 1));
    requestAnimationFrame(() => animate5(time + 1));
}




function baseAnimation(incrementalTime, lastTime, counter) {

    let delta = incrementalTime - lastTime;
    lastTime = incrementalTime;

    let angle = 360/100 * delta;

    for (const cell of cells) {
        cell.style.transform = 'rotate(' + (angle * counter) + 'deg)';
    }

    //console.log(delta);                         //--> printa un delta del time iniziale e del time successivo (20 millisecondi di differenza)
    requestAnimationFrame((incremental) => baseAnimation(incremental, lastTime, counter++)); 
}

