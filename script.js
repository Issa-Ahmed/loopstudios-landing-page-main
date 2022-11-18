const openMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");
const mobileNav = document.getElementById("mobileNav");

function toggleMenu() {
  hideMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileNav.classList.toggle("translate-x-37");
}

openMenu.addEventListener("click", toggleMenu);
hideMenu.addEventListener("click", toggleMenu);
