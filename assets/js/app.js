// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const url = document.querySelector("nav url");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// close hamburger menu when link is clicked

// select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link)=> 
link.addEventListener("click", ()=> {
  ul.classList.remove("show");
})
);
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});