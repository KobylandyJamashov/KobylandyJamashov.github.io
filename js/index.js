//Импорт функций
import { fallingModal } from './scripts/fallingModal.js';
import { handleScroll } from './scripts/scrollTyping.js';
import { nextSlide, prevSlide } from './scripts/slider.js';
// import { slideAnimation } from './scripts/animateFillLevel.js';
import { slideScroll } from './scripts/progressBarScroll.js';


//Выпадающая менюшка
const btn = document.getElementById("main_btn");
const modal = document.getElementById("fallingModal");
btn.onclick = () => fallingModal(btn, modal);


//Анимация набора текста
window.addEventListener('scroll', handleScroll);


//Анимация при появлении слайда
window.addEventListener('scroll', slideScroll);


//Слайдер
let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.onclick = nextSlide;
prev.onclick = prevSlide;

//Анимация progress-bar
// slideAnimation();
