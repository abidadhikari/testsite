const header = document.getElementById("header");
const mobileNav = document.querySelector(".mobile-nav");
const bars = document.querySelector("#barsbtn");
const closeBars = document.querySelector("#cross");



window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > header.clientHeight) header.style.backgroundColor = "#fff";
  else {
    header.style.backgroundColor = "transparent";
  }
});

//cloning nav elements to reuse for monile nav sidebar
const nav = document.querySelector("nav");
const navClone = nav.cloneNode(true);
mobileNav.appendChild(navClone);

//toggle mobilenav
bars.addEventListener("click", () => {
  mobileNav.classList.toggle("activeNav");
});
closeBars.addEventListener("click", () => {
  mobileNav.classList.remove("activeNav");
});
