// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 152; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon'); //add the div element a class name 'pokemon', to combine with css

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const image = document.createElement('img');
    image.src = `${baseURL}${i}.png`;

    pokemon.append(image);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

// disign:
// each pic displays inline-block Style
// under each pic, there is a number label

// <div id="pokemon">
//     <img src="">
//     <span>Label</span>
// </div>