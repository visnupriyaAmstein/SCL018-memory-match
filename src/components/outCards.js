//import App from '/components/App.js';
import shuffle from './shuffle.js';
import simpson from '../data/simpson/simpson.js';
import match from './match.js';
//import cronometro from "./cronometro.js";

const outCards = () => {

    let table = document.createElement('div');
    //return node;
    let images = simpson.items;
    let totalImages = images.concat(images);
    let randomImages = shuffle(totalImages);
     //console.log(randomImages);

    table = document.getElementById('boardGame');
    
    table.innerHTML = '';

    const myFunction = (element) => {
    
        let card = document.createElement('div');

        card.innerHTML =

    `<div class='area-tarjeta'>
    <div class='tarjeta' data-imagen='${element.imageUrl}'> 
    <div class='cara-trasera'> <img src = '${element.imageUrl} class='imagesSimpsons'/> </div>
    <div class='cara-superior'>
    </div>
    </div>
    </div>`
    
    table.appendChild(card);
    //cronometro();
    }
    randomImages.forEach(myFunction);
  //  return node;

  //outCards();


document.querySelectorAll(".tarjeta").forEach(match);

}
export default outCards;


