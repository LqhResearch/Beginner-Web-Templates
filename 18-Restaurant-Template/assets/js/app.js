const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing image modal
 */
var menuModal = $(".menu-modal");
var contactModal = $(".contact-modal");

$$(".modal__close").forEach((element) => {
    element.addEventListener("click", (event) => {
        element.parentElement.parentElement.style.display = "none";
    });
});

$(".js__menu").addEventListener("click", (event) => {
    menuModal.style.display = "flex";
});

$(".js__contact").addEventListener("click", (event) => {
    contactModal.style.display = "flex";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
});