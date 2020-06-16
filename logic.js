const container = document.querySelector('#container');
const controls = document.querySelector('#controls');

const start = controls.querySelector('#start');
const reset = controls.querySelector('#reset');

const black = controls.querySelector('#black');
const random = controls.querySelector('#random');
const gradient = controls.querySelector('#gradient');

let squareSize = 0;
let childDivs = container.querySelectorAll('div');
let penColor = '';

black.addEventListener('click', () => {
    penColor = 'black';
    childDivs.forEach(childDiv => {
        childDiv.style.background = 'white';
        childDiv.style.opacity = '1';
    });
});

random.addEventListener('click', () => {
    penColor = 'random';
    childDivs.forEach(childDiv => {
        childDiv.style.background = 'white';
        childDiv.style.opacity = '1';
    });
});

gradient.addEventListener('click', () => {
    penColor = 'gradient';
    childDivs.forEach(childDiv => {
        childDiv.style.background = 'white';
        childDiv.style.opacity = '0';
    });
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createEtchASketchField(squareSize) {
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
    childDivs.forEach(childDiv => {
        childDiv.addEventListener('mouseover', function (e) {
            if (penColor === 'black' || penColor === '') {
                e.target.style.background = 'black';
            } else if (penColor === 'random') {
                color = getRandomColor();
                e.target.style.background = color;
            } else if (penColor === 'gradient') {
                currentOpacity = Number(e.target.style.opacity);
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }
                e.target.style.background = 'black';
                e.target.style.opacity = currentOpacity;
            }
        });
    });
};

start.addEventListener('click', () => {
    if (childDivs.length != 0) {
        alert('Press Reset to reset the field resolution.');
        return;
    }
    squareSize = prompt('Enter resolution (number of squares per side of the field):');
    createEtchASketchField(squareSize);

});

reset.addEventListener('click', () => {
    if (childDivs.length === 0) {
        alert('There is nothing to reset.');
        return;
    };
    childDivs.forEach(childDiv => {
        childDiv.remove();
    });
    squareSize = prompt('Enter resolution (number of squares per side of the field):');
    createEtchASketchField(squareSize);
});