'use strict';

// Handler function btn search (Fetch info global)
function handleSearchBtn(event) {
    event.preventDefault();
    if (searchInput.value === '') {
        labelMnsError.innerHTML = '*This field is required';
        getInfoApi(urlMargarita);
    } else {
        getInfoApi(urlGlobal + searchInput.value);

    }
}

// Handler function li listener & disLike button listener
function handleClickListener(event) {
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

// Li listener
function listenClickList() {
    const cocktailList = document.querySelectorAll('.js__li_element');
    for (const drinkItem of cocktailList) {
        drinkItem.addEventListener('click', handleClickListener);
    }
}

// DisLike button listener
function listenDislikeBtn() {
    const dislikeBtn = document.querySelectorAll('.js-dislike-button');
    for (const dislikeItem of dislikeBtn) {
        dislikeItem.addEventListener('click', handleClickListener);
    }
}

// Remove label error on input click
function handleClickInput() {
    labelMnsError.innerHTML = '';
}