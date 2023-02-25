'use strict';

// Fetch info global + handler function btn search
function handleSearchBtn(event) {
    event.preventDefault();
    if (searchInput.value === '') {
        labelMnsError.innerHTML = "This field is required";
        getInfoApi(urlMargarita);
    } else {
        getInfoApi(urlGlobal + searchInput.value);
    }
}

// Handler function li listener event
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
    renderFavoriteList()
}


// li listener event function
function listenClickList() {
    const cocktailList = document.querySelectorAll('.js__li_element');
    for (const drinkItem of cocktailList) {
        drinkItem.addEventListener('click', handleClickList);
    }
}

// Event handler function btn delete fav
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

// Btn delete favs listner function
function listenDislikeBtn() {
    const dislikeBtn = document.querySelectorAll('.js-dislike-button');
    for (const dislikeItem of dislikeBtn) {
        dislikeItem.addEventListener('click', handleClickDislike);
    }
}