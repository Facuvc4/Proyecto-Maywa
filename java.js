//Esta es la parte del carrusel

const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operacion = 0;
  } else {
    counter++;
    operacion = operacion + widthImg;
  }
  slider.style.transition = "all ease .6s";
  slider.style.transform = `translate(-${operacion}%)`;
}

function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
  } else {
    operacion = operacion - widthImg;
  }
  slider.style.transition = "all ease .6s";
  slider.style.transform = `translate(-${operacion}%)`;
}

//Esto es la parte de la ventana modal de los vinos malbec y blanco

const imageMalbec = document.querySelector("#image-malbec"),
      imageBlanco = document.querySelector("#image-blanco"),
      descriptionWine = document.querySelector(".description-wine"),
      closeMalbec = document.querySelector("#closeMalbec"),
      closeBlanco = document.querySelector("#closeBlanco"),
      Malbec = document.querySelector(".description-wine-malbec"),
      Blanco = document.querySelector(".description-wine-blanco");

imageMalbec.addEventListener("click",()=> {
  descriptionWine.style.transform = "scale(1)";
  Malbec.style.transform = "scale(1)";
  Malbec.style.display = "flex";
  Blanco.style.display = "none";
})

imageBlanco.addEventListener("click",()=> {
  descriptionWine.style.transform = "scale(1)";
  Blanco.style.transform = "scale(1)";
  Blanco.style.display = "flex";
  Malbec.style.display = "none";
})

closeBlanco.addEventListener("click",()=> {
  descriptionWine.style.transform = "scale(0)";
  Blanco.style.transform = "scale(0)";
})

closeMalbec.addEventListener("click",()=> {
  descriptionWine.style.transform = "scale(0)";
  Malbec.style.transform = "scale(0)";
})