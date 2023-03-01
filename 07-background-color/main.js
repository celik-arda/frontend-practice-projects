const all_slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const body = document.querySelector("body");


let activeSlide = 0;


const setBackground = () => {
    all_slides.forEach(each_slide => {
        each_slide.classList.remove("active");
        all_slides[activeSlide].classList.add("active");
        body.style.backgroundImage = all_slides[activeSlide].style.backgroundImage;
    });
}
setBackground();

previousButton.addEventListener("click", () => {
    activeSlide --;
    if(activeSlide  < 0){
        activeSlide = all_slides.length - 1;
    }
    setBackground();
});

nextButton.addEventListener("click", () => {
    activeSlide ++;
    if(activeSlide > all_slides.length - 1){
        activeSlide = 0;
    }
    setBackground();
});
