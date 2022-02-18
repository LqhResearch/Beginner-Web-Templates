const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var sidebar = $('.sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('sidebar--show');
}