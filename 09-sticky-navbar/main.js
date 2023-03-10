//      09-sticky-navbar    //



const navbar = document.getElementsByClassName("nav-area")[0];

// console.log(navbar);
const makeNavbarFixed = () => {

    if (scrollY > navbar.offsetHeight + 150){
        navbar.classList.add("active");
    }
    else {
        navbar.classList.remove("active");
    }
    console.log(scrollY);
}

window.addEventListener("scroll", makeNavbarFixed);