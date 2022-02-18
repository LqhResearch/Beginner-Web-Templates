const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing mobile navbar
 */
var nav = $('.nav');

nav.addEventListener('click', (event) => {
    nav.classList.add('nav__close');
});

$('.header__mobile-btn').addEventListener('click', (event) => {
    nav.classList.toggle('nav__close');
});

/**
 * Slider automatically runs after 3 seconds
 */
var indexSlider = 0;

var key = setInterval(function() {
    var sliderItem = $$(".slider__item");

    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = (i === indexSlider) ? "block" : "none";
    }
    indexSlider++;
    if (indexSlider === sliderItem.length)
        indexSlider = 0;
}, 3000);

/**
 * Handle opening and closing buy tickets modal
 */
var modal = $('.modal');
var modalClose = $('.modal__close');
var buyTicketsBtn = $$('.js__buy-ticket');

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

for (let i = 0; i < buyTicketsBtn.length; i++) {
    buyTicketsBtn[i].addEventListener('click', function() {
        modal.style.display = 'flex';
    });
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});