const ul = document.querySelector('ul');
let li = ul.childNodes
let arrayLi=[]

//prepend(objet a insérer)

for (let i = 0; i < li.length; i++) {
    const element = li[i];
    if (element.nodeType===1) {
        arrayLi.push(element)
        if (element.innerText == "Fast and Furious") {
            ul.prepend(element)
        }
    }

}

li[0].classList.add('important')
const important = document.querySelector('.important')

for (let element of li) {
    element.addEventListener('click', ()=>{
        if (element.innerText=="Fast and Furious") {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else
        alert(element.innerText)
    })
}

//fonction qui vérifie si j'ai des doublons dans la liste
for (let i = 0; i < li.length; i++) {
    //première boucle qui itère sur le tableau
    for (let j = 1; j < li.length; j++) {
        //deuxième boucle qui itère sur le deuxième
        if (i==j) {
            //je vérifie si on compare les mêmes, si ce sont les mêmes, je continue ma route
            continue
        }else if(li[i].isEqualNode(li[j])){
            //Si ce sont les mêmes, je retire l'élément de ma liste.
            ul.removeChild(li[i])
        }
    }
}


///////////////////////////////////////////////////

const body = document.querySelector('body');
body.addEventListener("keyup", (e)=>{
    if(e.key =='r'){
        for (let i = 0; i < arrayLi.length; i++) {
            if (li[i].nodeName=="#text") {
                continue
            }else{
            console.log(`${li[i]} est à l'index ${i}`);
            let numberRandom = Math.floor(Math.random()*2);
            console.log(numberRandom);
            (numberRandom==1) ?
                ul.insertAdjacentElement('afterbegin',li[i]) :
                ul.appendChild(li[i]); 
                ul.prepend(important)
            }
        }
    }
    else if(e.key=="d"){
        const clone = important.cloneNode(true);
        ul.appendChild(clone)
    }
})

//////////////////////////////////////////////////////////


let div = document.createElement("div")
div = body.insertBefore(div,ul)

let select = document.createElement('select')
div.appendChild(select)
for (let i = 0; i < 3; i++) {
    let option = document.createElement("option");
    select.appendChild(option);
    switch (i) {
        case 0:
            option.innerText = ""

            break;
        case 1:
            option.innerText = "important franchises"
            break;
            default:
            option.innerText = "normal franchises"   
            break;
    }
}
console.log(li);
select.addEventListener('change', (e)=>{
    switch (e.target.value) {
        case "important franchises":
            changeStyleHidden()
            important.style.visibility = "visible"
            break;
        case "normal franchises":
            changeStyleVisible()
            important.style.visibility ="hidden"
            break;
        
        default:
            changeStyleVisible()
            break;
    }
})

function changeStyleHidden() {
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
            if (element.nodeType===1) {
            element.style.visibility="hidden"
        }
    } 
}

function changeStyleVisible() {
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
            if (element.nodeType===1) {
            element.style.visibility="visible"
        }
    } 
}