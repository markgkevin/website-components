const navIcon = document.querySelector(".menu-icon");
// const navMenu = document.querySelector("menu-links");

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("trigger");
    // navMenu.classList.toggle("trigger");
    console.log("working");

});
