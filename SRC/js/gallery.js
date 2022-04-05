const slider = document.querySelector('.items');
let isDown;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    slider.classList.add('active');
    isDown = true;
    startX = e.pageX - slider.offsetLeft; // gives starting positon of click - padding 
    scrollLeft = slider.scrollLeft; // number of pixels scrolled from the left
});

slider.addEventListener('mouseup', () => {
    slider.classList.remove('active');
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    slider.classList.remove('active');
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // distance from starting x value
    slider.scrollLeft = scrollLeft - walk; // sets the value for scrollLeft
});
