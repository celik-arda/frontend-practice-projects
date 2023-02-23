const allFaqBoxes = document.querySelectorAll(".faq-question");
const allButtons = document.querySelectorAll(".faq-toggle");

const displayEntireBox = (e) => {
    const clickedFaqBox = e.target.parentElement.parentElement;
    clickedFaqBox.classList.toggle("active");
}

for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", displayEntireBox);
}

