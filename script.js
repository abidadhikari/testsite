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
console.log(mobileNav);




//toggle mobilenav
bars.addEventListener("click", () => {
  mobileNav.classList.toggle("activeNav");
});
closeBars.addEventListener("click", () => {
  mobileNav.classList.remove("activeNav");
});

//toggle faq
const lists = document.querySelectorAll(".lists");
const contentOfLists = document.querySelectorAll(".lists p");
const listBtn = document.querySelectorAll(".lists b i");
console.log(listBtn);
lists.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (contentOfLists[i].style.display == "block") {
      contentOfLists[i].style.display = "none";
      listBtn[i].classList.add("fa-plus");
      listBtn[i].classList.remove("fa-minus");
    } else {
      contentOfLists[i].style.display = "block";
      listBtn[i].classList.remove("fa-plus");
      listBtn[i].classList.add("fa-minus");
    }
  });
});
