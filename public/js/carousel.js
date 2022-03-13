
let slideIndex = 1;
showSlides(slideIndex);

// Para "prev" y "next".
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Para los "dots"
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // El space antes de la class "active" es importantisimo para el conteo de los "dots"!!!.
  dots[slideIndex-1].className += " active";
}