const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing sidebar
 */
var sidebar = $(".sidebar");

$(".header .btn").addEventListener("click", (event) => {
    sidebar.style.display = "block";
});

$$(".sidebar .btn").forEach((element) => {
    element.addEventListener("click", (event) => {
        sidebar.style.display = "none";
    });
});

/**
 * Handle opening and closing image modal
 */
var modal = $(".modal");
var modalImg = modal.querySelector(".modal__img");
var modalDesc = modal.querySelector(".modal__desc");
var modalClose = $(".modal__close");

function onClick(_this) {
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
    if (event.target == sidebar) {
        sidebar.style.display = "none";
    }
});