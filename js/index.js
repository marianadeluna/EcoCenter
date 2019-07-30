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

//function that moves slides left and right
const moveSlide = (target, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

//function that updates color on navigation buttons
const moveNav = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

//function that hides the left and right buttons when appropriate
const hideArrowButtons = (slides, prevButton, nextButton, targetIndex) => {
  if(targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

//click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  moveSlide(track, currentSlide, prevSlide);
  const currentDot = dotNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  moveNav(currentDot, prevDot);
  const prevIndex = slides.findIndex(slides => slides === prevSlide)
  hideArrowButtons(slides, prevButton, nextButton, prevIndex);
});

//click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  moveSlide(track, currentSlide, nextSlide);
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  moveNav(currentDot, nextDot);
  const nextIndex = slides.findIndex(slides => slides === nextSlide)
  hideArrowButtons(slides, prevButton, nextButton, nextIndex);
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
  moveNav(currentDot, targetDot);
  hideArrowButtons(slides, prevButton, nextButton, targetIndex);
});
