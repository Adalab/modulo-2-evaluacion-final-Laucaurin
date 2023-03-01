'use strict';const urlMargarita='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',urlGlobal='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',searchInput=document.querySelector('.js__search_input'),cocktailList=document.querySelector('.js__cocktail_list'),cocktailFavList=document.querySelector('.js__fav_list'),searchBtn=document.querySelector('.js__search_button'),resetBtn=document.querySelector('.js__reset_button'),clearAllFavBtn=document.querySelector('.js__btn_clear_all'),labelMnsError=document.querySelector('.js__label_error');let dataCocktailList=[],dataCocktailFavList=[];function getLocalStorage(){const t=JSON.parse(localStorage.getItem('favorites'));t&&(dataCocktailFavList=t,renderFavoriteList());}function setLocalStorage(){localStorage.setItem('favorites',JSON.stringify(dataCocktailFavList));}function getInfoApi(t){fetch(t).then(t=>t.json()).then(t=>{dataCocktailList=t.drinks.map(t=>({id:t.idDrink,name:t.strDrink,image:t.strDrinkThumb})),emptyImg(dataCocktailList);});}function emptyImg(t){for(const e of t)null===e.image&&(e.image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt06durojbI0YjFdIRY3p6MjgUaj4H8aegg&usqp=CAU');renderList(t);}function renderFavoriteList(){cocktailFavList.innerHTML='';for(const t of dataCocktailFavList)cocktailFavList.innerHTML+=renderDrink(t,'li__element_fav','li__title_fav','li__img_fav','fa-regular fa-trash-can icon__delete js-dislike-button');listenDislikeBtn();}function renderDrink(t,e,i,a,n){return`<li class = "js__li_element ${e}" id=${t.id}>\n         <img class=" ${a}" src=${t.image} alt=${t.name}/>\n        <h3 class="${i}">${t.name}</h3>\n        <i class="${n}" id=${t.id}></i>\n     </li > `;}function renderList(t){cocktailList.innerHTML='';for(const e of t){const t=foundFavorite(e);cocktailList.innerHTML+=t?renderDrink(e,'li__element','li__title selected__fav','li__img','fa-solid fa-heart icon__like'):renderDrink(e,'li__element','li__title','li__img');}getLocalStorage(),listenClickList(),listenDislikeBtn();}function foundFavorite(t){return void 0!==dataCocktailFavList.find(e=>e.id===t.id);}function handleSearchBtn(t){t.preventDefault(),''===searchInput.value?(labelMnsError.innerHTML='*This field is required',getInfoApi(urlMargarita)):getInfoApi(urlGlobal+searchInput.value);}function handleClickListener(t){t.preventDefault();const e=t.currentTarget.id,i=dataCocktailList.find(t=>t.id===e),a=dataCocktailFavList.findIndex(t=>t.id===e);-1===a?dataCocktailFavList.push(i):dataCocktailFavList.splice(a,1),setLocalStorage(),renderList(dataCocktailList),renderFavoriteList();}function listenClickList(){const t=document.querySelectorAll('.js__li_element');for(const e of t)e.addEventListener('click',handleClickListener);}function listenDislikeBtn(){const t=document.querySelectorAll('.js-dislike-button');for(const e of t)e.addEventListener('click',handleClickListener);}function handleClickInput(){labelMnsError.innerHTML='';}function handleResetBtn(t){t.preventDefault(),cocktailList.innerHTML='',searchInput.value='',getInfoApi(urlMargarita),renderFavoriteList();}function handleClickBtnClearAllFav(t){t.preventDefault(),localStorage.clear(),dataCocktailFavList=[],renderFavoriteList(),renderList(dataCocktailList);}getLocalStorage(),getInfoApi(urlMargarita),searchBtn.addEventListener('click',handleSearchBtn),resetBtn.addEventListener('click',handleResetBtn),clearAllFavBtn.addEventListener('click',handleClickBtnClearAllFav),searchInput.addEventListener('click',handleClickInput);