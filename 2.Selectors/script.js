//1.

const important = document.querySelectorAll('.important');

console.log(important);

for (const element of important) {
    element.title="This is an important item"
}

//2.

const img = document.querySelectorAll('img');

for (const iterator of img) {
    if (iterator.className!=='important') {
        iterator.style.display='none'
    }
}

//3.

const p = document.querySelectorAll('p');

for (const iterator of p) {
    console.log(iterator.innerText);
    if (iterator.className!=='') {
        console.log(iterator.className);
        console.log(iterator.getAttribute("class"));
    }
}

//4.

for (const iterator of p) {
    if (iterator.className=='') {
        iterator.style.color=`rgb(${randomColor()},${randomColor()},${randomColor()})`
    }
}

function randomColor() {
    let randomColor = Math.random()*255
    return randomColor;
}