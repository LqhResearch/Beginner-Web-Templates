const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handle opening and closing sidebar
 */
$(".header__mobile .btn").addEventListener("click", (event) => {
    var sidebar = $(".sidebar");
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});