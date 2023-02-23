'use strict';

//variables
const formInput = document.querySelector('.js__form_input');
const btnSearch = document.querySelector('.js__btn_search');
const urlMargarita = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const listElements = document.querySelector('.js__list_elements');

let listCocktails = [];
let listCocktailsfavs = [];


//fech Elementos por defecto
fetch(urlMargarita)
    .then((response) => response.json())
    .then((data) => {
        listCocktails = data.drinks;
        // .map((drinks) => ({
        //     idDrink: drinks.idDrink,
        //     nameDrink: drinks.strDrink,
        //     img: drinks.strDrinkThumb,
        // }));
        console.log(listCocktails);
        renderDrinkList(listCocktails);

    });

// Fetch elementos por buscador
function handleClickSearch(ev) {
    ev.preventDefault();
    const inputValue = formInput.value;
    fetch(url + inputValue)
        .then((response) => response.json())
        .then((data) => {
            renderDrinkList(listCocktails);
        });
}


//Pinta todos los li a
function renderDrinkList(listCocktails) {
    for (const drink of listCocktails) {
        listElements.innerHTML += renderDrink(drink);
    }
    addEventToElement();
}


//Pintar un elemento li
function renderDrink(drink) {
    let html = `<li id=${drink.idDrink}>
        <article class="js-li-element">
        <h3>${drink.strDrink}</h3>
        <img class="img" src=${drink.strDrinkThumb} alt ="Foto bebida"/>
    </article> 
    </li> `;
    return html;
}

//funcion que recoge el id del elemento en el click del evento de la función addEventToElement
function handleClickElement(ev) {
    console.log(ev.currentTarget.id);

    ev.currentTarget.classList.toggle('selected');
}


//Escuchar evento sobre cada elemento
function addEventToElement() {
    const liElementsList = document.querySelectorAll('.js-li-element');
    for (const li of liElementsList) {
        li.addEventListener('click', handleClickElement);
    }
}


//Evento botón buscar
btnSearch.addEventListener('click', handleClickSearch);