// script.js

const slides = document.querySelectorAll('.sns');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

nextBtn.addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});
