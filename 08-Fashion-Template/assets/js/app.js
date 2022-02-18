const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing comments
 */
var repliesBtn = $$(".js__replies");
repliesBtn.forEach((element) => {
    element.addEventListener("click", (event) => {
        var commentEle = element.parentElement.parentElement.querySelector(".card__comments");
        commentEle.style.display = commentEle.style.display == "none" ? "block" : "none";
    });
});

/**
 * Handle liked button
 */
var btnLikes = $$(".js__like");
btnLikes.forEach((element) => {
    element.addEventListener("click", (event) => {
        element.innerHTML = "<b>✓ Liked</b>";
    });
});

/**
 * Handle opening and closing modal
 */
var modal = $(".modal");

function subcribeForm() {
    modal.style.display = "flex";
}

modal.querySelector(".modal__close").addEventListener("click", (event) => {
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