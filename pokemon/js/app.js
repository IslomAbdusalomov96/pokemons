let elHeroList = document.querySelector('.hero__list');

const pokemonValue = function(num) {
    for(let item of num) {
        let newItem = document.createElement('li');
        let newImg = document.createElement('img');
        let newHr = document.createElement('hr');
        let newBox = document.createElement('div');
        let newLeft = document.createElement('div');
        let newName = document.createElement('h2');
        let newType = document.createElement('p');
        let newLink = document.createElement('a');
        let newLike = document.createElement('img');
        let newBottom = document.createElement('div');
        let newWeight = document.createElement('span');
        let newAge = document.createElement('span');
        newImg.textContent = item.img;
        newName.textContent = item.name;
        newType.textContent = item.type;
        newWeight.textContent = item.weight;
        newAge.textContent = item.candy_count;
        newItem.setAttribute('class', 'hero__item');
        newImg.setAttribute('class', 'hero__img');
        newHr.setAttribute('class', 'hero__line');
        newBox.setAttribute('class', 'hero__content');
        newName.setAttribute('class', 'hero__name');
        newType.setAttribute('class', 'hero__type');
        newLink.setAttribute('class', 'hero__link');
        newLink.setAttribute('href', '#');
        newLike.setAttribute('class', 'hero__like');
        newLike.setAttribute('src', './images/pokemon-heart.png');
        newBottom.setAttribute('class', 'hero__bottom');
        newWeight.setAttribute('class', 'hero__weight');
        newAge.setAttribute('class', 'hero__age');
        newItem.appendChild(newImg);
        newItem.appendChild(newHr);
        newLeft.appendChild(newName);
        newLeft.appendChild(newType);
        newBox.appendChild(newLeft);
        newLink.appendChild(newLike);
        newBox.appendChild(newLink);
        newItem.appendChild(newBox);
        newBottom.appendChild(newWeight);
        newBottom.appendChild(newAge);
        newItem.appendChild(newBottom);
        elHeroList.appendChild(newItem);
    }
}
pokemonValue(pokemons);