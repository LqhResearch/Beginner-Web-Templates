const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var slider = $('.slider');
var sliderShowImg = slider.querySelector('.slider__show img');
var sliderShowName = slider.querySelector('.slider__show .slider__name');

console.log(sliderShowName)

slider.querySelectorAll('.slider__list img').forEach(element => {
    element.onclick = () => {
        sliderShowImg.src = element.src;
        sliderShowName.textContent = element.alt;
    }
});

var sidebar = $('.sidebar');

function toggleSlidebar() {
    sidebar.classList.toggle('active');
}