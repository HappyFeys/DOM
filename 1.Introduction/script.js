console.log(document.title);

document.title="Modifying the DOM";

document.body.style.backgroundColor='#FF69B4';

function randomColor() {
    let randomColor = Math.random()*255
    return randomColor;
}

document.body.style.backgroundColor= `rgb(${randomColor()},${randomColor()},${randomColor()})`;

const body = document.body;

for (const element of body.children) {
    console.log(element.tagName);
}