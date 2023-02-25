'use strict';

// Variables
const urlMargarita = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const urlGlobal = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const searchInput = document.querySelector('.js__search_input');
const cocktailList = document.querySelector('.js__cocktail_list');
const cocktailFavList = document.querySelector('.js__fav_list');
const searchBtn = document.querySelector('.js__search_button');
const resetBtn = document.querySelector('.js__reset_button');
const clearAllFavBtn = document.querySelector('.js__btn_clear_all');
const labelMnsError = document.querySelector('.js__label_error');
let dataCocktailList = [];
let dataCocktailFavList = [];