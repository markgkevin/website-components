const navIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".menu-links");
const closeBtn = document.querySelector(".close-btn");


navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("trigger");
    navMenu.classList.toggle("trigger");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("trigger");
});

document.querySelectorAll(".nav-link")
    .forEach(n => n.addEventListener("click", () => {
        navMenu.classList.remove("trigger");
    }));



// Refactored codes by ChatGPT for future reference

// const toggleTrigger = () => {
//     navIcon.classList.toggle("trigger");
//     navMenu.classList.toggle("trigger");
// };

// const closeMenu = () => {
//     navMenu.classList.remove("trigger");
// };

// const navIcon = document.querySelector(".menu-icon");
// const navMenu = document.querySelector(".menu-links");
// const closeBtn = document.querySelector(".close-btn");
// const navLinks = document.querySelectorAll(".nav-link");

// navIcon.addEventListener("click", toggleTrigger);
// closeBtn.addEventListener("click", closeMenu);
// navLinks.forEach(link => link.addEventListener("click", closeMenu));
