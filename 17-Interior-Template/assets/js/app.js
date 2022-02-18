const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing sidebar
 */
var sidebar = $('.sidebar');

$('.mobile__nav .btn').addEventListener('click', (event) => {
    sidebar.style.display = 'block';
});

$('.sidebar__close').addEventListener('click', (event) => {
    sidebar.style.display = 'none';
});

/**
 * Handle opening and closing image modal
 */
var modal = $('.modal');
var modalImg = modal.querySelector('.modal__img');
var modalDesc = modal.querySelector('.modal__desc');

function onClick(_this) {
    modal.style.display = 'flex';
    modalImg.src = _this.src;
    modalDesc.innerHTML = _this.alt;
}

modal.querySelector('.modal__close').addEventListener('click', (event) => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});