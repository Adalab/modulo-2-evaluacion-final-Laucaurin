'use strict';

//  Render list Favorites
function renderFavoriteList() {
    cocktailFavList.innerHTML = '';
    for (const drink of dataCocktailFavList) {
        cocktailFavList.innerHTML += renderDrink(drink, 'li__element_fav', 'li__title_fav', 'li__img_fav', 'fa-regular fa-trash-can icon__delete js-dislike-button');
    }
    listenDislikeBtn();
}

// Render li
function renderDrink(drink, classLi, classH3, classImg, classIcon) {
    let html = `<li class = "js__li_element ${classLi}" id=${drink.id}>
         <img class=" ${classImg}" src=${drink.image} alt=${drink.name}/>
        <h3 class="${classH3}">${drink.name}</h3>
        <i class="${classIcon}" id=${drink.id}></i>
     </li > `;
    return html;
}

// Render list
function renderList(data) {
    cocktailList.innerHTML = '';
    for (const drink of data) {
        const foundFav = foundFavorite(drink);
        if (foundFav) {
            cocktailList.innerHTML += renderDrink(drink, 'li__element', 'li__title selected__fav', 'li__img', 'fa-solid fa-heart icon__like');
        } else {
            cocktailList.innerHTML += renderDrink(drink, 'li__element', 'li__title', 'li__img');
        }
    }
    getLocalStorage();
    listenClickList();
    listenDislikeBtn();
}

// Find favorites to use in render list
function foundFavorite(data) {
    const favoriteFound = dataCocktailFavList.find(fav => fav.id === data.id);
    if (favoriteFound === undefined) {
        return false;
    } else {
        return true;
    }
}