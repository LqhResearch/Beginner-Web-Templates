const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing in RSVP modal
 */
var modal = $(".modal");
var modalBtn = modal.querySelectorAll(".js__modal-close");

$(".btn__rsvp").addEventListener("click", (event) => {
    modal.style.display = "flex";
});

modalBtn.forEach((element) => {
    element.addEventListener("click", (event) => {
        modal.style.display = "none";
    });
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});