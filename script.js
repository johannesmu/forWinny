window.onload = () => {
  // slideshow
  const slides = document.querySelector(".carousel");
  const slideShow = new Flickity(slides, {
    cellAlign: "center",
    contain: true,
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,

  });
  // navbutton
  const navButton = document.querySelector('.navbutton')
  const nav = document.querySelector('.navigation')
  navButton.addEventListener('click', () => {
    if( navButton.classList.contains('open') ) {
      navButton.classList.remove('open')
      nav.classList.remove('open')
    }
    else {
      navButton.classList.add('open')
      nav.classList.add('open')
    }
  })
};

