'use strict';

function handleClickInput() {
    labelMnsError.innerHTML = '';
}
// Events
searchBtn.addEventListener('click', handleSearchBtn);
resetBtn.addEventListener('click', handleResetBtn);
clearAllFavBtn.addEventListener('click', handleClickBtnClearAllFav);
searchInput.addEventListener('click', handleClickInput);