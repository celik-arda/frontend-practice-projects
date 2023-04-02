const allGlasses = document.querySelectorAll(".bottle.glass");
const remainingPart = document.querySelector(".remaining-liter");
const filledPart = document.querySelector("#filledPartOfBottle");
const remainingText = document.querySelector(".remaining-text");
const filledText = document.querySelector(".filled-text");

let lastActiveIdx = 0;

const adjustRemainingBottle = (haveDrunkIdx) => {
    const haveDrunkPercent = (haveDrunkIdx + 1) * 100 / 8;
    const remainingPercent = 100 - haveDrunkPercent;
    
    filledPart.style.height = `${haveDrunkPercent}%`;
    remainingPart.style.height = `${remainingPercent}%`;
    
    const remainingLiter = (8 - (haveDrunkIdx + 1)) * 2 / 8;
    filledText.textContent = `${haveDrunkPercent}%`;
    remainingText.textContent = `${remainingLiter}L`;
}

const fillLittleBottles = (e) => {
    allGlasses.forEach((glass,index) => {
        const clickPoint = e.target;
        if (clickPoint === glass){
            lastActiveIdx = index;
        }
    });

    for (let i = 0; i < allGlasses.length; i++) {
        if (i <= lastActiveIdx){
            allGlasses[i].classList.add("active");
        }
    }
    adjustRemainingBottle(lastActiveIdx);
}

for (let i = 0; i < allGlasses.length; i++) {
    allGlasses[i].addEventListener("click", fillLittleBottles);
}