//      09-sticky-navbar    //


const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
    if (window.scrollY > navbar.offsetHeight) {
        console.log(window.scrollY);
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }
})