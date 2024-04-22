const _initTime = Date.now()
const ul = document.querySelector("ul")


const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    let li = document.createElement("li");
    li.innerText = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`
    ul.appendChild(li)   
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//Fonction qui crée un nouvelle div
let displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');

function createDiv(color) {
    let div = document.createElement("div");
    div.classList.add("displayedsquare");
    div.classList.add(color);
    displayedsquareWrapper.appendChild(div);
    div.addEventListener("click", ()=>{
        alert(color)
    })
}

//On crée une div au click

for (let element of actionSquares) {
    element.addEventListener("click", () => {
        console.log(element.classList[1]);
        createDiv(element.classList[1]);
    }) 
}

const body = document.querySelector('body')

body.addEventListener("keydown", (e)=>{
    if(e.keyCode===32){
        body.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        let li = document.createElement("li");
        li.innerText = `[${getElapsedTime()}] You press the blank space with the ${body.style.backgroundColor}`
        ul.appendChild(li)
    }
    else if (e.keyCode ===76){
        ul.innerHTML=""
    }
    else if (e.keyCode === 83){
        displayedsquareWrapper.innerHTML=""
        body.style.backgroundColor="rgb(255,255,255)"
    }
})

