const container = document.querySelector('#container');
const controls = document.querySelector('#controls');
const start = controls.querySelector('#start');
const reset = controls.querySelector('#reset');

let squareSize = 0;
let childDivs = container.querySelectorAll('div');
console.log(childDivs);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createEtchASketchField(squareSize) {
    let penColor = prompt('Chose pen color (black, random or gradient):');
    let childDivWidth = 100 / squareSize;
    let color = '';

    if (squareSize > 0) {
        container.style.borderTop = '1px solid black';
        container.style.borderLeft = '1px solid black';
    }

    for (let i = 0; i < squareSize * squareSize; i++) {
        let orderNumber = 1;
        let div = document.createElement('div');
        container.appendChild(div);
        orderNumber++;
    };

    childDivs = container.querySelectorAll('div');

    childDivs.forEach(childDiv => {
        childDiv.style.width = childDivWidth + '%';
        childDiv.style.height = childDivWidth + '%';
        childDiv.style.flexBasis = childDivWidth + '%';
    });

    if (penColor === 'black' || penColor === '') {
        childDivs.forEach(childDiv => {
            childDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'black';
            });
        });
    } else if (penColor === 'random') {
        childDivs.forEach(childDiv => {
            childDiv.addEventListener('mouseover', function (e) {
                color = getRandomColor();
                e.target.style.background = color;
            });
        });
    } else if (penColor === 'gradient') {
        let currentOpacity = 0;
        childDivs.forEach(childDiv => {
            childDiv.addEventListener('mouseover', function (e) {
                currentOpacity = Number(e.target.style.opacity);
                console.log('current opacity' + currentOpacity);
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }
                e.target.style.background = 'black';
                e.target.style.opacity = currentOpacity;
            });
        });
    };
};

start.addEventListener('click', () => {
    if (childDivs.length != 0) {
        alert('Press Reset to reset field.');
        return;
    }
    squareSize = prompt('Enter square size (up to 64):');
    createEtchASketchField(squareSize);
    console.log(childDivs);
});

reset.addEventListener('click', () => {
    if (childDivs.length === 0) {
        alert('There is nothing to reset. Press Start');
        return;
    }
    container.style.borderTop = '';
    container.style.borderLeft = '';
    childDivs.forEach(childDiv => {
        childDiv.remove();
    });
    squareSize = prompt('Enter square size (up to 64):');
    createEtchASketchField(squareSize);
});