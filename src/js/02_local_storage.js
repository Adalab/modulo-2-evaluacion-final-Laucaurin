'use strict';

// Get Local storage function
function getLocalStorage() {
    const localStorageFavDrinks = JSON.parse(localStorage.getItem('favorites'));
    if (localStorageFavDrinks) {
        dataCocktailFavList = localStorageFavDrinks;
        renderFavoriteList();
    }
}
getLocalStorage();


// Set Local Storage function
function setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(dataCocktailFavList));
}