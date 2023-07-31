const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export const slideScroll = () => {
    const slide1 = document.querySelector('.slide__progress__level1-react');
    if (isElementInViewport(slide1)) {
        const progressLevels = document.querySelectorAll('.slide__progress__level1');
        const widths = [75, 75, 70, 65, 85];
        for (let i = 0; i < progressLevels.length; i++) {
            progressLevels[i].style.setProperty('--progress-width', `${widths[i]}%`);
        }
        window.removeEventListener('scroll', slideScroll);
    }
};