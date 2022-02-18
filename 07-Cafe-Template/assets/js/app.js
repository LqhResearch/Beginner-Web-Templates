const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Handling tab switching
 */
var tab = $(".tab");
var tabItems = tab.querySelectorAll(".tab__item");
var tabPanels = $$(".tab__content .tab__panel");

tabItems.forEach((element, index) => {
    element.onclick = function() {
        // Remove active class of tab items
        tabItems.forEach((element) => {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            }
        });
        tabPanels.forEach((element) => {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            }
        });

        // Add active class to clicked element
        element.classList.add("active");
        tabPanels[index].classList.add("active");
    };
});