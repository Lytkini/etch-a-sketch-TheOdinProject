const container = document.querySelector('#container');
const controls = document.querySelector('#controls');
const reset = controls.querySelector('#reset');

let squareSize = prompt('Enter square size:', 10);

let childDivWidth = 0;
let childDivs = container.querySelectorAll('div');
let color = '';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createEtchASketchField(squareSize) {
    container.style.borderBottom = '0px';
    container.style.borderRight = '0px';

    childDivWidth = 100 / squareSize;

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
        childDiv.addEventListener('mouseover', function (e) {
            //color = getRandomColor();
            e.target.style.background = 'black';
        });
    });
};

createEtchASketchField(squareSize);

reset.addEventListener('click', () => {
    childDivs.forEach(childDiv => {
        childDiv.remove();
    });
    squareSize = prompt('Enter square size (up to 64):');
    createEtchASketchField(squareSize);
});