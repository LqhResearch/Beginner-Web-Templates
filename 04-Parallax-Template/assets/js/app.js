const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Responsive navbar for mobile and scroll page
 */
const headerTop = $(".header--top");

window.addEventListener("scroll", (event) => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerTop.classList.add("header--float");
    } else {
        headerTop.classList.remove("header--float");
    }
});

const navMobile = $(".nav__mobile");

$(".js__mobile-btn").addEventListener("click", (event) => {
    navMobile.classList.toggle("js__mobile-nav");
});

// When the user clicks anywhere items of the mobile navigation bars, close it
navMobile.querySelectorAll(".btn").forEach((element) => {
    element.addEventListener("click", (event) => {
        navMobile.classList.remove("js__mobile-nav");
    });
});

/**
 * Click on the image, the modal of the image will be displayed
 */
var modal = $(".modal");

function zoomImage(hrefImage, desc) {
    modal.querySelector(".modal__img").src = hrefImage;
    modal.querySelector("p").innerHTML = desc;
    modal.style.display = "flex";

    // Close modal
    modal.querySelector(".modal__close").addEventListener("click", (event) => {
        modal.style.display = "none";
    });
}

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