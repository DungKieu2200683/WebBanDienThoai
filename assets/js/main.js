let currentSlide = 0;
const slides = document.querySelectorAll('.main-slider__item');
const dots = document.querySelectorAll('.main-slider__dot');
const total = slides.length;

let autoSlideTimeout;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;

  // Reset lại bộ đếm auto
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(() => {
    let next = (currentSlide + 1) % total;
    showSlide(next);
  }, 5000);
}

document.querySelector('.main-slider__arrow-right').addEventListener('click', () => {
  let next = (currentSlide + 1) % total;
  showSlide(next);
});

document.querySelector('.main-slider__arrow-left').addEventListener('click', () => {
  let prev = (currentSlide - 1 + total) % total;
  showSlide(prev);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    let index = parseInt(dot.dataset.index);
    showSlide(index);
  });
});

// Khởi động slide
showSlide(currentSlide);

let startX = 0;
let isDragging = false;

const slider = document.querySelector('.main-slider');

// Desktop: Kéo bằng chuột
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let diff = e.clientX - startX;
  if (Math.abs(diff) > 50) { // chỉ khi kéo đủ xa
    isDragging = false;
    if (diff < 0) {
      showSlide((currentSlide + 1) % total); // kéo trái → ảnh tiếp theo
    } else {
      showSlide((currentSlide - 1 + total) % total); // kéo phải → ảnh trước
    }
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Mobile: Vuốt cảm ứng
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  let diff = e.touches[0].clientX - startX;
  if (Math.abs(diff) > 50) {
    if (diff < 0) {
      showSlide((currentSlide + 1) % total);
    } else {
      showSlide((currentSlide - 1 + total) % total);
    }
    startX = e.touches[0].clientX; // reset để không chuyển liên tục
  }
});
slides.forEach(img => {
  img.addEventListener('dragstart', (e) => e.preventDefault());
});
