// Creare un array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

// **** Creazione elementi bottoni
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let prevBtn = document.createElement("button")
prevBtn.classList.add("prev");
let nextBtn = document.createElement("button")
nextBtn.classList.add("next");

prev.appendChild(prevBtn);
next.appendChild(nextBtn);

prevBtn.addEventListener("click", handleArrowMinusClick);
nextBtn.addEventListener("click", handleArrowPlusClick);
// ****

let i = 0;

// Tramite un ciclo for-each, creare degli elementi per ogni oggetto all'interno del DOM e popolare il carosello
// Definisco queste variabili fuori dal ciclo e dalla funzione
const items = document.getElementById("items");
let imageContainer;

images.forEach((media, index) => {

    imageContainer = document.createElement("div");
    imageContainer.classList.add("item");

    // Creazione degli elementi HTML per l'immagine, il titolo e il testo
    let image = document.createElement("img");
    image.src = media.image;

    let title = document.createElement("h2");
    title.textContent = media.title;

    let text = document.createElement("p");
    text.textContent = media.text;

    // Aggiunta degli elementi al div imageContainer
    imageContainer.appendChild(image);
    imageContainer.appendChild(title);
    imageContainer.appendChild(text);

    // Assegno la classe active al primo elemento dell'array
    if (!index){
        imageContainer.classList.add("active");
    }

    // Aggiunta del div imageContainer al contenitore items
    items.appendChild(imageContainer);
});

// console.log(imageContainer);

function handleArrowPlusClick() {
    // Seleziono tutti gli elementi con classe "active" e gliela rimuovo
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
    // Seleziono tutti gli elementi che hanno classe "item"
    const childrens = document.querySelectorAll('.item');

    // Aumento di 1 l'index
    i++;
    // Aggiungo il ciclo infinito indicando che se i è >= della lunghezza di childrens allora i deve riassumere il valore di 0
    if(i >= childrens.length){
        i = 0
    };

    // Assegno all'elemento i coorrente la classe "active" per renderlo visibile in pagina
    childrens[i].classList.add("active");
}

// Ripeto la funzione ma con indicazioni differenti per tornare all'i precedente
function handleArrowMinusClick() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');

    const childrens = document.querySelectorAll('.item');

    i--;
    if(i < 0){
        i = childrens.length - 1
    };

    childrens[i].classList.add("active");
}

setInterval(handleArrowPlusClick, 3000);


    

