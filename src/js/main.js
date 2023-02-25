'use strict';



// Get Local storage array favs
function getLocalStorage() {
    const localStorageFavDrinks = JSON.parse(localStorage.getItem('favorites'));
    if (localStorageFavDrinks) {
        dataCocktailFavList = localStorageFavDrinks;
        renderFavoriteList();
    }
}
getLocalStorage();

//funcion pintar todos fav RENDER
function renderFavoriteList() {
    cocktailFavList.innerHTML = '';
    for (const drink of dataCocktailFavList) {
        cocktailFavList.innerHTML += renderFavDrink(drink);
    }
    listenDislikeBtn();
}

//funcion pintar un fav RENDER
function renderFavDrink(drink) {//card__img
    let html = `<li class = "js__li_element li__element li__element_fav" id=${drink.id}>
         <img class="li__img li__img_fav" src=${drink.image} alt=${drink.name}/>
        <h3 class="li__title_fav li__title">${drink.name}</h3>

         <i class="fa-regular fa-trash-can icon__delete js-dislike-button " id=${drink.id}></i>
         
     </li > `;
    return html;
}

//fetch FECTH
function getInfoApi(urlPage) {
    fetch(urlPage)
        .then((response) => response.json())
        .then((data) => {
            dataCocktailList = data.drinks.map((drink) => ({
                id: drink.idDrink,
                name: drink.strDrink,
                image: drink.strDrinkThumb,
            }));
            emptyImg(dataCocktailList);
        });
}
getInfoApi(urlMargarita);

function handleSearchBtn(event) {
    event.preventDefault();
    getInfoApi(urlGlobal + searchInput.value);
}

//EMPTY PARA FETCH
function emptyImg(data) {
    for (const drink of data) {
        if (drink.image === null) {
            drink.image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt06durojbI0YjFdIRY3p6MjgUaj4H8aegg&usqp=CAU`;
        }
    }
    renderList(data);
}

//FOUND FAV PARA RENDER RENDERLIST

function foundFavorite(data) {
    const favoriteFound = dataCocktailFavList.find(fav => fav.id === data.id);
    if (favoriteFound === undefined) {
        return false;
    } else {
        return true;
    }
}


//RENDER
function renderList(data) {
    let favClass = '';
    cocktailList.innerHTML = '';
    for (const drink of data) {
        const foundFav = foundFavorite(drink);
        if (foundFav) {
            favClass = 'selected__fav'; //js-cocktail__card
            let html = `<li class = "js__li_element li__element ${favClass}" id=${drink.id}><img class="li__img" src=${drink.image} alt=${drink.name}/><h3 class="li__title_fav li__title">${drink.name}</h3></li > `;
            cocktailList.innerHTML += html;
        } else {
            let html = `<li class = "js__li_element li__element" id=${drink.id}><img class="li__img" src=${drink.image} alt=${drink.name} alt ="drink photo"/><h3 class="li__title">${drink.name}</h3>`;
            cocktailList.innerHTML += html;
        }
    }
    getLocalStorage();
    listenClickList();
    listenDislikeBtn();
}


// FUNCION MANEJADORA DEL EVENTO ESCUCHAR LI

function handleClickList(event) {
    event.preventDefault();
    const clickedItemId = event.currentTarget.id;
    const objetClicked = dataCocktailList.find(itemDrink => itemDrink.id === clickedItemId);
    const favoritesFound = dataCocktailFavList.findIndex(fav => fav.id === clickedItemId);
    if (favoritesFound === -1) {
        dataCocktailFavList.push(objetClicked);
    } else {
        dataCocktailFavList.splice(favoritesFound, 1);
    }
    setLocalStorage();
    renderList(dataCocktailList);
    renderFavoriteList();
}


function setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(dataCocktailFavList));
}



//FUNCION QUE EJECUTA EL EVNTO AL BTN BORRA DE FAV
function handleClickDislike(event) {
    event.preventDefault();
    const clickedItemId = event.currentTarget.id;
    const objetClicked = dataCocktailList.find(itemDrink => itemDrink.id === clickedItemId);
    const favoritesFound = dataCocktailFavList.findIndex(fav => fav.id === clickedItemId);
    if (favoritesFound === -1) {
        dataCocktailFavList.push(objetClicked);
        setLocalStorage();
        renderList(dataCocktailList);
        renderFavoriteList();
    } else {
        dataCocktailFavList.splice(favoritesFound, 1);
        setLocalStorage();
        renderList(dataCocktailList);
        renderFavoriteList();
    }
}


//FUNCION DEL EVENTO ESCUCHA LI
function listenClickList() {
    const cocktailList = document.querySelectorAll('.js__li_element');
    for (const drinkItem of cocktailList) {
        drinkItem.addEventListener('click', handleClickList);
    }
}

//FUNCION QUE AÑADE UN EVENTO AL BTN BORRA DE FAV
function listenDislikeBtn() {
    const dislikeBtn = document.querySelectorAll('.js-dislike-button');
    for (const dislikeItem of dislikeBtn) {
        dislikeItem.addEventListener('click', handleClickDislike);
    }
}

//FUNCION RESET

function handleResetBtn(event) {
    event.preventDefault();
    cocktailList.innerHTML = '';
    searchInput.value = '';
    getInfoApi(urlMargarita);

    renderFavoriteList();
}
//FUNCION MANEJADORA DE EVENTO BORRAR TODO
function handleClickBtnClearAllFav(ev) {
    ev.preventDefault();
    localStorage.clear();
    dataCocktailFavList = [];
    renderFavoriteList();
    renderList(dataCocktailList);

}

searchBtn.addEventListener('click', handleSearchBtn);
resetBtn.addEventListener('click', handleResetBtn);
clearAllFavBtn.addEventListener('click', handleClickBtnClearAllFav);