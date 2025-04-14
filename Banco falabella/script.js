document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let counter = 0;
    const slideWidth = slider.clientWidth;
 
    nextBtn.addEventListener('click', function () {
    if (counter >= slider.children.length - 1) return;
    counter++;
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    });
 
    prevBtn.addEventListener('click', function () {
    if (counter <= 0) return;
    counter--;
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    });
    });