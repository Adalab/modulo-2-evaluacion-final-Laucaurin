'use strict';

//variables
const formInput = document.querySelector('.js__form_input');
const btnSearch = document.querySelector('.js__btn_search');
const urlMargarita = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const listElements = document.querySelector('.js__list_elements');
const listElementsfav = document.querySelector('.js__list_fav');


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
        renderDrinkList(listCocktails);


    });



// Fetch elementos por buscador
function handleClickSearch(ev) {
    ev.preventDefault();
    listElements.innerHTML = '';
    const inputValue = formInput.value;
    fetch(url + inputValue)
        .then((response) => response.json())
        .then((data) => {
            listCocktails = data.drinks;

            const filteredList = listCocktails.filter(drink => drink.strDrink.toLowerCase().includes(inputValue.toLowerCase()));
            console.log(filteredList);


            renderDrinkList(filteredList);
            //localstorage("nombre-guardar", que-voy-guardar)
            localStorage.setItem("ElementsDrinks", JSON.stringify(listCocktails));
        });
}


//Pinta todos los li a la lista
function renderDrinkList(listCocktails) {
    listElements.innerHTML = '';
    for (const drink of listCocktails) {
        listElements.innerHTML += renderDrink(drink);
    }
    addEventToElement();
}

//Pinta todos los li a la lista de favs
function renderFavoriteList(listCocktailsfavs) {
    listElementsfav.innerHTML = "";
    for (const drink of listCocktailsfavs) {
        listElementsfav.innerHTML += renderDrink(drink);
    }
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
    const idSelected = ev.currentTarget.id;


    //find : devuelve el primer elemento que cumpla una condición 
    const selectedDrink = listCocktails.find(drink => drink.id === idSelected);
    console.log(selectedDrink)

    // //findeIndex: la posición donde está el elemento, o -1 sino está en el listado
    // const indexDrink = listCocktailsfavs.findIndex(drink => drink.id === idSelected);

    // //Comprobar si ya existe el favorite

    // if (indexDrink === -1) { //no está en el listado de favoritos
    //     //La guardo en el listado de favoritos: push
    //     listCocktailsfavs.push(selectedDrink);
    // } else { //si está en el listado de favoritos eliminarlo
    //     //splice: elimina un elemento a partir de una posición
    //     listCocktailsfavs.splice(indexDrink, 1);
    // }
    // //Pintar en el listado HTML de favoritos:
    // renderFavoriteList(listCocktailsfavs);
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