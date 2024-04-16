function randomColor() {
    let randomColor = Math.random()*255
    return randomColor;
}

const learner = ["Tom",
    "Manu",
    "Giovanni",
    "Iliess",
    "Justine",
    "Nath",
    "Maryam",
    "Lyne",
    "Zahra",
    "Dzhey",
    "Isabelle",
    "Natallia",
    "Jordan",
    "Caroline",
    "Arnaud",
    "Julie",
    "Youris",
    "Stacy",
    "Dylan",
    "Angel",
    "AdrienC",
    "Denis",
    "Ludovic",
    "AdrienB",
    "Mohamed",
    "Dorian"];

const article = document.querySelector('article')
console.log("learner lenght :"+learner.length);

// Fonction pour retourner un tableau mélangé

function randomLearner(array) {
    const shuffledArray = array.slice();
    randomArray(shuffledArray);
    console.log("mélange length : "+shuffledArray.length);
    console.log(shuffledArray);
    const learnerBis = [];
    while(shuffledArray.length>0){
        const apprenant = shuffledArray.splice(0,1)[0];
        learnerBis.push(apprenant);
    }
    return learnerBis;
}

const learnerRandom = randomLearner(learner);

// Fonction pour mélanger le tableau
function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


for (const element of learnerRandom) {
    let section = document.createElement('section');
    section.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
   
    let name = document.createElement('p');
    name.innerText=element;
    section.appendChild(name);
    article.appendChild(section);
    let couleurDeFond = getComputedStyle(section).backgroundColor;
    let rgbValue = couleurDeFond.match(/\d+/g);
    let rouge = parseInt(rgbValue[0]);
    let vert = parseInt(rgbValue[1]);
    let bleu = parseInt(rgbValue[2]);

    if (((0.3*rouge)+(0.59*vert)+(0.11*bleu))>=128) {
        name.style.color="black";
    } else{
        name.style.color="white";
    }
}

