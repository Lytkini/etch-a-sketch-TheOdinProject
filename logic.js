const container = document.querySelector('#container');

let orderNumber = 1;

//container.textContent = 'Hello World!';

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    // div.textContent = orderNumber;
    div.setAttribute('id', 'childDiv')
    container.appendChild(div);
    orderNumber++;
}

const childDivs = document.querySelectorAll('#childDiv');

childDivs.forEach(childDiv => {
    childDiv.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
    }); 
});