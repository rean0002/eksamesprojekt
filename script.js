const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".navbar > ul");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
