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
/*const getLocalStored = JSON.parse(localStorage.getItem("drinksDefault"));
if (getLocalStored) {
    dataListCocktails = getLocalStored;
    renderList(dataListCocktails);
}*/
const localStorageFav = JSON.parse(localStorage.getItem('cocktailsFav'));
if (localStorageFav) {
    dataListCocktailsfavs = localStorageFav;
    renderFavoriteList(dataListCocktailsfavs);
}


// Fetch items by default
fetch(urlMargarita)
    .then((response) => response.json())
    .then((data) => {
        dataListCocktails = data.drinks;
        // .map((drinks) => ({
        //     idDrink: drinks.idDrink,
        //     nameDrink: drinks.strDrink,
        //     img: drinks.strDrinkThumb,
        // }));
        renderList(dataListCocktails);
        // localStorage.setItem("drinksDefault", JSON.stringify(dataListCocktails));

    });



// Fetch elements by search
function handleClickSearch(ev) {
    ev.preventDefault();
    listCocktails.innerHTML = '';
    const inputValue = formInput.value;
    fetch(urlGlobal + inputValue)
        .then((response) => response.json())
        .then((data) => {
            dataListCocktails = data.drinks;
            const filteredList = dataListCocktails.filter(drink => drink.strDrink.toLowerCase().includes(inputValue.toLowerCase()));
            console.log(filteredList);
            renderList(filteredList);
        });
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
        listCocktailsfav.innerHTML += renderDrink(drink);
    }
    addEventToElement();
    localStorage.setItem('cocktailsFav', JSON.stringify(dataListCocktailsfavs));
}


// Render an element
function renderDrink(drink) {
    let html = `<li class="js-li-element" id=${drink.idDrink}>
        <article >
        <h3>${drink.strDrink}</h3>
        <img class="img" src=${drink.strDrinkThumb} || https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600 alt ="drink photo"/>
    </article> 
    </li> `;
    return html;
}

// Function that obtains the id of the element in the click event of the addEventToElement function
function handleClickElement(ev) {
    ev.currentTarget.classList.toggle('selected');
    const selectId = ev.currentTarget.id;
    const selectedDrink = dataListCocktails.find(drink => drink.idDrink === selectId);
    const indexDrink = dataListCocktailsfavs.findIndex(drink => drink.idDrink === selectId);

    if (indexDrink === -1) {
        dataListCocktailsfavs.push(selectedDrink);
    } else {
        dataListCocktailsfavs.splice(indexDrink, 1);
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
    listCocktails.innerHTML = '';
    listCocktailsfav.innerHTML = '';
    formInput.value = '';
    localStorage.removeItem('cocktailsFav');
}


// Search button event
btnSearch.addEventListener('click', handleClickSearch);

// Reset button event
btnReset.addEventListener('click', handleClickReset);