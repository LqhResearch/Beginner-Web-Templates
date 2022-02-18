const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing mobile navigation bar
 */
var mobileNavbar = $(".mobile__nav");
$(".mobile__btn").addEventListener("click", (event) => {
    mobileNavbar.classList.toggle("mobile__nav--show");
});

/**
 * Handle opening and closing image modal
 */
var modal = $(".modal");
var modalImg = modal.querySelector(".modal__img");
var modalDesc = modal.querySelector(".modal__desc");
var modalClose = $(".modal__close");

function showImage(_this) {
    modal.style.display = "flex";
    modalImg.src = _this.src;
    modalDesc.innerHTML = _this.alt;
}

modalClose.addEventListener("click", (event) => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/**
 * Scroll back to top
 */
$(".js__back-top").addEventListener("click", (event) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});