const header = document.getElementById("header");
const mobileNav = document.querySelector(".mobile-nav");
const bars = document.querySelector("#barsbtn");
const closeBars = document.querySelector("#cross");
const searchIcon = document.querySelector("#searchbtn");
const closeSearchIcon = document.querySelector("#searchclosebtn");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > header.clientHeight) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow= "0 1px 6px 0 rgba(0 ,0,0,0.2)";
  }
  else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow= "none";
  }
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (width > 1179) {
    mobileNav.classList.remove("activeNav");
  }
});

//toggle mobilenav
bars.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  console.log("working")
  mobileNav.classList.add("activeNav");
});
closeBars.addEventListener("click", () => {
  document.body.style.overflowY = "scroll";
  mobileNav.classList.remove("activeNav");
});


//cloning nav elements to reuse for monile nav sidebar
// const nav = document.querySelector("nav");
// const navClone = nav.cloneNode(true);
// mobileNav.appendChild(navClone);
// console.log(mobileNav);

//search box toggle
const searchContainer = document.querySelector(".searchcontainer");
searchIcon.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  searchContainer.classList.add("d-grid");
  searchContainer.classList.remove("d-none");
});

closeSearchIcon.addEventListener("click", () => {
  document.body.style.overflowY = "scroll";
  searchContainer.classList.add("d-none");
  searchContainer.classList.remove("d-grid");
});


//toggle faq
const lists = document.querySelectorAll(".lists");
const contentOfLists = document.querySelectorAll(".lists p");
const listBtn = document.querySelectorAll(".lists b i");
// console.log(listBtn);
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


//toggle mobile nav elements
const mobileLists=document.querySelectorAll(".mobile-nav .subul")
const mobileLinks=document.querySelectorAll(".dropdown");
const dropdownIcon=document.querySelectorAll(".dropdown .fas")
mobileLinks.forEach((e,i)=>{
  console.log(e)
  e.addEventListener("click",()=>{
    dropdownIcon[i].classList.toggle("fa-caret-up")
    if (mobileLists[i].classList.contains("d-flex")) {
      mobileLists[i].classList.remove("d-flex");
    }
    else{
      mobileLists[i].classList.add("d-flex")
      
    }
    
  })
})