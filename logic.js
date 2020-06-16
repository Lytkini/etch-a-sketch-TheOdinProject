//aska user for a square size at start
let squareSize = prompt('Enter square size (up to 64):', 10);


const container = document.querySelector('#container');


const controls = document.querySelector('#controls');
const reset = controls.querySelector('#reset');

let childDivWidth = 100/squareSize;


reset.addEventListener('click', () => {
    squareSize = prompt('Enter square size (up to 64):');
    childDivs.forEach(childDiv => {
        childDiv.style.background = 'lightblue';
    });
    console.log('' + squareSize);
});

console.log(squareSize);

let orderNumber = 1;

for (let i = 0; i < squareSize*squareSize; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    orderNumber++;
}

const childDivs = container.querySelectorAll('div');

childDivs.forEach(childDiv => {
    childDiv.style.width = childDivWidth + '%';
    childDiv.style.height = childDivWidth + '%';
    childDiv.style.flexBasis = childDivWidth + '%';
});

childDivs.forEach(childDiv => {
    childDiv.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
    });
});

