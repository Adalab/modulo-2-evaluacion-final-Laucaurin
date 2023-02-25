'use strict';

//  Render list Fav
function renderFavoriteList() {
    cocktailFavList.innerHTML = '';
    for (const drink of dataCocktailFavList) {
        cocktailFavList.innerHTML += renderFavDrink(drink);
    }
    listenDislikeBtn();
}

// Render li fav
function renderFavDrink(drink) {
    let html = `<li class = "js__li_element li__element_fav" id=${drink.id}>
         <img class=" li__img_fav" src=${drink.image} alt=${drink.name}/>
        <h3 class="li__title_fav li__title">${drink.name}</h3>

         <i class="fa-regular fa-trash-can icon__delete js-dislike-button " id=${drink.id}></i>
         
     </li > `;
    return html;
}

// Render list
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

// Found Fav to render list
function foundFavorite(data) {
    const favoriteFound = dataCocktailFavList.find(fav => fav.id === data.id);
    if (favoriteFound === undefined) {
        return false;
    } else {
        return true;
    }
}