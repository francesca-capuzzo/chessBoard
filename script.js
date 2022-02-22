let cells = [];

function displayChess() {
    let size = prompt("What size chess board?: ");
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
                lineDiv.appendChild(white);
                cells.push(white);
            } else {
                let black = document.createElement('div');
                black.className += 'blackChess chess';
                black.style.width = 50/size + 'vh';
                black.style.height = 50/size + 'vh';
                lineDiv.appendChild(black);
                cells.push(black);
            }
        }
        let newLine = document.createElement('br');
        lineDiv.appendChild(newLine);
        mainDiv.appendChild(lineDiv);
    }
    console.log(cells);
    requestAnimationFrame(() => animate2(0)); 
    
}



// function animate(time) {

//     let realtime = time/20;

//     let index = Math.floor(realtime) % cells.length;

//     if (cells[index - 1]) {
//         cells[index - 1].style.backgroundColor = '';
//     } else {
//         cells[cells.length - 1].style.backgroundColor = '';
//     }

//     cells[index].style.backgroundColor = 'red';

//     requestAnimationFrame(() => animate(time + 1));

// }

function animate2(time) {

    let realtime = time/20;
    let index = Math.floor(realtime) % cells.length;
    let column = index % Math.sqrt(cells.length);
    let row = Math.floor(index / Math.sqrt(cells.length));
   
    requestAnimationFrame(() => animate2(time + 1));
}
