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

const article = document.querySelector('article');
const titre = document.querySelector('h2');
console.log("learner lenght :"+learner.length);

for (const element of learner) {
    let section = document.createElement('section');
    //Attribution d'une BGC aléatoire à la section
    section.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
    //Création d'un p avec le nom des apprenants
    let name = document.createElement('p');
    name.innerText=element;
    //On ajoute notre p à la section
    section.appendChild(name);
    //Pour chaque étudiant on cherche un nombre entre 0 et 1, si l'élève à 1, on le place sous le h2, si pas on le place a la suite de la section.
    let numberRandom = Math.floor(Math.random()*2);
    console.log(numberRandom);
    (numberRandom==1) ?
        titre.insertAdjacentElement('afterend',section) :
        article.appendChild(section);
    //Ici, on recupère le code rgb de section
    let couleurDeFond = getComputedStyle(section).backgroundColor;
    //On utilise un RegEx pour ne récupérer que les chiffres
    let rgbValue = couleurDeFond.match(/\d+/g);
    let rouge = parseInt(rgbValue[0]);
    let vert = parseInt(rgbValue[1]);
    let bleu = parseInt(rgbValue[2]);
    //Si la somme de ces valeurs supérieurs ou égal à 128, considérée comme light donc on met une couleur black, sinon on met blanc
    if (((0.3*rouge)+(0.59*vert)+(0.11*bleu))>=128) {
        name.style.color="black";
    } else{
        name.style.color="white";
    } 
} 