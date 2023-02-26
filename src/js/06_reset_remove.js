'use strict';

// Reset handle function
function handleResetBtn(event) {
    event.preventDefault();
    cocktailList.innerHTML = '';
    searchInput.value = '';
    getInfoApi(urlMargarita);
    renderFavoriteList();
    labelMnsError.innerHTML = '';
}
// Handler function to delete all favs
function handleClickBtnClearAllFav(ev) {
    ev.preventDefault();
    localStorage.clear();
    dataCocktailFavList = [];
    renderFavoriteList();
    renderList(dataCocktailList);
}