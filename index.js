

const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".contenedoritems");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("contenedoritems_visible");

  if (navMenu.classList.contains("contenedoritems_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});