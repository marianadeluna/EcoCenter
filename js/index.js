console.log('Begin javascript functions for carousel ...');

// looks in the entire document for the quoted class name
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotNav = document.querySelector('.carousel-navigation');
const dots = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to eachother
const setSlidePosition = (slide,index) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//function that moves slides to left and right
const moveSlide = (target, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

//click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  moveSlide(track, currentSlide, prevSlide);
});

//click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  moveSlide(track, currentSlide, nextSlide);
});

//click navigation indicators, move to that slide
dotNav.addEventListener('click', e => {
  //need to find which dot was clicked
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);

});
//
//
//
//
//
//
//
//
//
//
//
//
