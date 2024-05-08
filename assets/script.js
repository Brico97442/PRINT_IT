const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")
const imageActuel = document.getElementById("slide")
const interval = 4000;
const dotSelected = document.querySelectorAll(".dot");
const pBalise = document.getElementById("tag_line")
let i = 0

function nextSlide(direction) {
  i = i + direction;

  if (i > slides.length - 1) i = 0;

  if (i < 0) i = slides.length - 1;
  imageActuel.src ="./assets/images/slideshow/" + slides[i].image;
  
  dotSelected.forEach((removeDotselected) => {
    removeDotselected.classList.remove("dot_selected");
  });

  dotSelected[i].classList.add("dot_selected");
  
  pBalise.innerHTML = slides[i].tagLine;
  
}
setInterval(() => nextSlide(1), interval);



















