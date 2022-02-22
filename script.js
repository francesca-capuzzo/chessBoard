

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
            } else {
                let black = document.createElement('div');
                black.className += 'blackChess chess';
                black.style.width = 50/size + 'vh';
                black.style.height = 50/size + 'vh';
                lineDiv.appendChild(black);
            }
        }
        let newLine = document.createElement('br');
        lineDiv.appendChild(newLine);
        mainDiv.appendChild(lineDiv);
    }
    return mainDiv; 
}

