const ol = document.querySelector("ol");
let lastLi = ol.children[4];
let firstLi = ol.children[0];

ol.insertBefore(lastLi, firstLi);

const section = document.querySelectorAll('section');

let firstH2 = section[1].children[0];

console.log(firstH2);

let secondH2 = section[2].childNodes[1].children[0];

console.log(secondH2);

section[1].insertAdjacentElement("afterbegin", secondH2);
section[2].insertAdjacentElement("afterbegin", firstH2);

section[2].remove();




//removeChild(child)