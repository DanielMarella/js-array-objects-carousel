



// Dato un array di oggetti letterali con:
//     1.url dell’immagine
//     2.titolo
//     3.descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.


// Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const carouselElement = document.querySelector('div.carousel');
console.log(carouselElement);

let active = 1;



images.forEach(function( imageElement ) {
    carouselElement.innerHTML +=
    `
    <div class="carousel-img">
    <img src="${imageElement.image}">
    <h3 class="title">${imageElement.title}</h3>
    <h5 class="text">${imageElement.text}</h5>
    </div>`;
        console.log(imageElement.image)
});


document.querySelectorAll('div.carousel-img')[active].classList.add('show');


const backButton = document.querySelector('div.previus-button');
backButton.addEventListener('click' , function(){
    if (active == 0 ){
        active = images.length - 1;
    } else {
        active = active - 1;
    }

    document.querySelector('div.carousel-img.show').classList.remove('show');
    document.querySelectorAll('div.carousel-img')[active].classList.add('show');
})

const nextButton = document.querySelector('div.forward-button');
nextButton.addEventListener('click', function(){
    if (active == images.length - 1){
        active = 0 ;
    } else {
        active = active + 1;
    }

    document.querySelector('div.carousel-img.show').classList.remove('show');
    document.querySelectorAll('div.carousel-img')[active].classList.add('show');
})

