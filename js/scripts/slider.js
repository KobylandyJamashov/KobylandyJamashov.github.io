import { slideAnimation } from "./animateFillLevel.js";

let slides = document.getElementsByClassName("slide");

const isSlideActive = (element) => {
    return element.classList.contains("slide-active");
}

export const nextSlide = () => {
    for (let i = 0; i < slides.length; i++) {
        if (isSlideActive(slides[i])) {
            slides[i].classList.remove("slide-active");
            if (i === slides.length - 1) {
                slides[0].classList.add("slide-active");
                slideAnimation();
            } else {
                slides[i + 1].classList.add("slide-active");
                slideAnimation();
            }
            break;
        }
    }
}

export const prevSlide = () => {
    for (let i = 0; i < slides.length; i++) {
        if (isSlideActive(slides[i])) {
            slides[i].classList.remove("slide-active");
            if (i === 0) {
                slides[slides.length - 1].classList.add("slide-active");
                slideAnimation();
            } else {
                slides[i - 1].classList.add("slide-active");
                slideAnimation();
            }
            break;
        }
    }
}