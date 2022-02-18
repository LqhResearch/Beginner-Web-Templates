const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing navbar
 */
var nav = $(".nav");

$(".js__nav").addEventListener("click", (event) => {
    nav.classList.add("nav__open");
});

nav.querySelector(".nav__item").addEventListener("click", (event) => {
    nav.classList.remove("nav__open");
});