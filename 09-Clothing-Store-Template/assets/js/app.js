const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing navbar
 */
$(".js__jeans").addEventListener("click", (event) => {
    var sidebarNav = $(".sidebar__subnav");
    sidebarNav.style.display = sidebarNav.style.display === "none" ? "block" : "none";
});

/**
 * Handle opening and closing modal
 */
var modal = $(".modal");

$(".js__newsletter").addEventListener("click", (event) => {
    modal.style.display = "flex";
});

$(".modal__close").addEventListener("click", (event) => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/**
 * Handle opening and closing sidebar
 */
var sidebar = $(".sidebar");

$(".header__mobile .btn").addEventListener("click", (event) => {
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});