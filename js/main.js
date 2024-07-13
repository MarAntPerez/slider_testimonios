const slider = document.querySelector(".slider");

const slide = document.querySelectorAll(".slide");

const flechaIzquierda = document.querySelector(".controls i:nth-child(1)");

const flechaDerecha = document.querySelector(".controls i:nth-child(2)");

const puntosWrapper = document.querySelector(".puntos");

const puntos = document.querySelectorAll(".puntos span");

let slideIndex = 0;

puntos.forEach((punto, indice) => {
  punto.addEventListener("click", () => {
    slideIndex = indice;
    document.querySelector(".puntos .active").classList.remove("active");
    slider.style.transform = `translateX(${slideIndex * -20}%)`;
    punto.classList.add("active");
  });
});

flechaIzquierda.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  document.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});

flechaDerecha.addEventListener("click", () => {
  slideIndex =
    slideIndex < slide.length - 1 ? slideIndex + 1 : slide.length - 1;
  document.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});
