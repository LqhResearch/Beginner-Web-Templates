const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle toggle grid gutter
 */
function toggleGridGutter() {
    $('.grid--3').classList.toggle('grid__gutter');
    $('.grid--3').classList.toggle('px--16');
}