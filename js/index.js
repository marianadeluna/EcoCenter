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

//click left, move slides to the left


//click right, move slides to the right
//listener not working


nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  console.log(currentSlide);
  console.log('nextButton');

  //move slide

})

//click navigation indicators, move to that slide
