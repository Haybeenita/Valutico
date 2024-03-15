// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");

// }

// const navlink = document.querySelectorAll(".nav-link");
// navlink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

// const navEl = document.getElementById("header__navigation")

// console.log({navEl});
// console.log("hello");

const hamburgerEL = document.getElementById("hamburger");
const navMenuEL = document.getElementById("nav-menu");
const closeEL = document.getElementById("close_hamburger");
const openEL = document.getElementById('open_hamburger')

hamburgerEL.addEventListener("click", () => {
    navMenuEL.classList.toggle('showing')
    openEL.classList.toggle('not-showing')
    closeEL.classList.toggle('popping')

});
