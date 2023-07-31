export const slideAnimation = () => {
    const Webdev = document.getElementById("WebDev");
    const MetTech = document.getElementById("Met-Tech");
    const Other = document.getElementById("other")
    if(Webdev.classList.contains("slide-active")) {
        animateFillLevel(0)
    } else {
        resetSlideProgress()
    }
    if (MetTech.classList.contains("slide-active")) {
        animateFillLevel(1)
    } else {
        resetSlideProgress()
    }
    if (Other.classList.contains("slide-active")) {
        animateFillLevel(2)
    } else {
        resetSlideProgress()
    }
}

const resetSlideProgress = () => {
    const progressLevels = document.querySelectorAll('.slide__progress__level');
    for (let level of progressLevels) {
        level.style.width = '0';
    }
}

const animateFillLevel = (slideIndex) => {
    if (slideIndex === 0) {
        const progressLevels1 = document.querySelectorAll('.slide__progress__level1');
        const widths1 = [75, 75, 60, 50, 85];
        for (let i = 0; i < progressLevels1.length; i++) {
            progressLevels1[i].style.setProperty('--progress-width', `${widths1[i]}%`);
        }
    } 
    if (slideIndex === 1) {
        const progressLevels2 = document.querySelectorAll('.slide__progress__level2');
        const widths2 = [75, 80, 95, 70];
        for (let i = 0; i < progressLevels2.length; i++) {
            progressLevels2[i].style.setProperty('--progress-width', `${widths2[i]}%`);
        }
    }
    if (slideIndex === 2) {
        const progressLevels3 = document.querySelectorAll('.slide__progress__level3');
        const widths3 = [70, 70, 85, 95, 80];
        for (let i = 0; i < progressLevels3.length; i++) {
            progressLevels3[i].style.setProperty('--progress-width', `${widths3[i]}%`);
        }
    }
}