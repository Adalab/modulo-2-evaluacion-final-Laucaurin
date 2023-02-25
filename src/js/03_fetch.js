'use strict';

// Fetch get info Api
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

// Fetch info default
getInfoApi(urlMargarita);

// Fetch info global
function handleSearchBtn(event) {
    event.preventDefault();

    if (searchInput.value === '') {
        labelMnsError.innerHTML = "This field is required";
        getInfoApi(urlMargarita);
    } else {
        getInfoApi(urlGlobal + searchInput.value);
    }

}


//Function to check if an empty img arrives and paint it
function emptyImg(data) {
    for (const drink of data) {
        if (drink.image === null) {
            drink.image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt06durojbI0YjFdIRY3p6MjgUaj4H8aegg&usqp=CAU`;
        }
    }
    renderList(data);
}
