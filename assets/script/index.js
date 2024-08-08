const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

window.onscroll = function (e) {
    nav.classList.remove("active")
}

window.onclick = function (e) {
    if (e.target !== nav && e.target !== hamburgerMenu) {
        nav.classList.remove("active")
    }
}
