'use strict';

// Get Local storage
function getLocalStorage() {
    const localStorageFavDrinks = JSON.parse(localStorage.getItem('favorites'));
    if (localStorageFavDrinks) {
        dataCocktailFavList = localStorageFavDrinks;
        renderFavoriteList();
    }
}
getLocalStorage();

// Set Local Storage
function setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(dataCocktailFavList));
}