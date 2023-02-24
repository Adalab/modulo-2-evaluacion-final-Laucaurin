'use strict';

// Variables
const formInput = document.querySelector('.js__form_input');
const btnSearch = document.querySelector('.js__btn_search');
const btnReset = document.querySelector('.js__btn_reset');
const urlMargarita = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const urlGlobal = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const listCocktails = document.querySelector('.js__list_elements');
const listCocktailsfav = document.querySelector('.js__list_fav');

let dataListCocktails = [];
let dataListCocktailsfavs = [];

// Local storage
const localStorageFav = JSON.parse(localStorage.getItem('cocktailsFav'));
if (localStorageFav) {
    dataListCocktailsfavs = localStorageFav;
    renderFavoriteList(dataListCocktailsfavs);
}

// Fetch
function getElements(urlPage) {
    fetch(urlPage)
        .then((response) => response.json())
        .then((data) => {
            dataListCocktails = data.drinks.map((drinks) => ({
                idDrink: drinks.idDrink,
                nameDrink: drinks.strDrink,
                img: drinks.strDrinkThumb,
            }));
            renderList(dataListCocktails);
        });
}
getElements(urlMargarita);

// function + fetch event search
function handleClickSearch(ev) {
    ev.preventDefault();
    listCocktails.innerHTML = '';
    const inputValue = formInput.value;
    getElements(urlGlobal + inputValue);
}

// Render all elements to list
function renderList(dataListCocktails) {
    listCocktails.innerHTML = '';
    for (const drink of dataListCocktails) {
        listCocktails.innerHTML += renderDrink(drink);
    }
    addEventToElement();
}

// Render all elements to favorite list
function renderFavoriteList(dataListCocktailsfavs) {
    listCocktailsfav.innerHTML = '';
    for (const drink of dataListCocktailsfavs) {
        listCocktailsfav.innerHTML += renderDrinkFav(drink);
    }
    addEventToElement();
    localStorage.setItem('cocktailsFav', JSON.stringify(dataListCocktailsfavs));
}


// Render an element


function renderDrink(drink) {
    // const searchFav = dataListCocktailsfavs.findIndex(drink => drink.idDrink);
    let html = `<li class="js-li-element" id=${drink.idDrink}>
     <article >
     <h3>${drink.nameDrink}</h3>
         <img class="img" src=${drink.img} || https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600 alt ="drink photo"/>
     </article>
     </li> `;
    return html;

}

//Render an element fav
function renderDrinkFav(drink) {
    let html = `<li class="js-li-fav" id=${drink.idDrink}>
     <article >
     <h3>${drink.nameDrink}</h3>
         <img class="img" src=${drink.img} || https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600 alt ="drink photo"/>
     </article>
     </li> `;
    return html;
}

function renderDrink(drink) {
    // const searchFav = dataListCocktailsfavs.findIndex(drink => drink.idDrink);
    let html = `<li class="js-li-element" id=${drink.idDrink}>
     <article >
     <h3>${drink.nameDrink}</h3>
         <img class="img" src=${drink.img} || https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600 alt ="drink photo"/>
     </article>
     </li> `;
    return html;

}

/*
const liElement = document.createElement('li');
 liElement.setAttribute("class", 'js-li-element');
 liElement.setAttribute("id", `${drink.idDrink}`);
 const artElement = document.createElement('article');
 const h3Element = document.createElement('h3');
 const h3Content = document.createTextNode(`${drink.strDrink}`);
 const imgElement = document.createElement('img');
 imgElement.setAttribute("src", `${drink.strDrinkThumb}`);
 imgElement.setAttribute("class", "img");
 imgElement.setAttribute("alt", "img drink");

 h3Element.appendChild(h3Content);
 artElement.append(h3Element, imgElement);
 liElement.appendChild(artElement);
return liElement*/


// Function that obtains the id of the element in the click event of the addEventToElement function
function handleClickElement(ev) {

    const selectId = ev.currentTarget.id;
    const selectedDrink = dataListCocktails.find(drink => drink.idDrink === selectId);
    const indexDrink = dataListCocktailsfavs.findIndex(drink => drink.idDrink === selectId);
    if (indexDrink === -1) {
        dataListCocktailsfavs.push(selectedDrink);
        ev.currentTarget.classList.add('selected');
    } else {

        dataListCocktailsfavs.splice(indexDrink, 1);
        ev.currentTarget.classList.remove('selected');
    }
    renderFavoriteList(dataListCocktailsfavs);
}


// Listen event on each element
function addEventToElement() {
    const liElementsList = document.querySelectorAll('.js-li-element');
    for (const li of liElementsList) {
        li.addEventListener('click', handleClickElement);
    }
}

// Reset function
function handleClickReset(ev) {
    ev.preventDefault();
    getElements(urlMargarita);
    formInput.value = '';
}

// Search button event
btnSearch.addEventListener('click', handleClickSearch);

// Reset button event
btnReset.addEventListener('click', handleClickReset);