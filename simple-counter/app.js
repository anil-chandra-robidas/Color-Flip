"use strict";
const showCount = document.querySelector('.showCount');
const dec   = document.querySelector('.dec');
const reset = document.querySelector('.reset');
const inc   = document.querySelector('.inc');

var i = 0;
dec.addEventListener('click', (e) => {
    e.preventDefault();
    showCount.textContent = i--;
});

reset.addEventListener('click', (e) => {
    e.preventDefault();
    showCount.textContent = 0;
});

inc.addEventListener('click', (e) => {
    e.preventDefault();
    showCount.textContent = i++;
});