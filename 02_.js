// const completedLine = document.getElementById("completedLine");
// const progressBar = document.getElementById("progressLine");
// const forwardButton = document.querySelector("#buttonForward");
// const backButton = document.querySelector("#buttonBack");
// let maxStep = document.querySelectorAll(".circle").length;
// let minStep = 1;

// let currentStep = 1;

// const goToNextStep = () => {

//     if (currentStep + 1 === maxStep){
//         currentStep = maxStep;
//         completedLine.style.width = "100%";
//         forwardButton.disabled = true;
//         backButton.disabled = false;
//     }
//     else if (minStep < currentStep + 1  && currentStep + 1 < maxStep){
//         currentStep ++;
//         const progressPercent = ((currentStep - 1) * 100) / (maxStep - 1);
//         completedLine.style.width = `${progressPercent}%`;
//         forwardButton.disabled = false;
//     }
//     else {

//         console.log("else (go to next step");
//     }
// }

// const backToPrevious = () => {

//     if (currentStep - 1 > minStep){
//         currentStep --;
//         const progressPercent = ((currentStep - 1) * 100) / (maxStep - 1);
//         completedLine.style.width = `${progressPercent}%`;
//         console.log("back -1");
//     }
//     else if (currentStep - 1 === minStep){
//         currentStep --;
//         completedLine.style.width = `0px`;
//         console.log("back -2");
//     }
//     else {
//         // backButton.disabled = true;
//         console.log("back -3");
//     }
// }

// const allEventFunctions = () => {
//     forwardButton.addEventListener("click",goToNextStep);
//     backButton.addEventListener("click",backToPrevious);
// }
// allEventFunctions();


// -----------------------------------------//


const allSteps = document.querySelectorAll(".circle");
const progressLine = document.querySelector("#progressLine");
const buttonForward = document.querySelector("#buttonForward");
const buttonPrevious = document.querySelector("#buttonBack");


let currentActive = 1;

buttonForward.addEventListener("click", () => {
    currentActive ++;
    if (currentActive > allSteps.length){
        currentActive = allSteps.length;
    }

    update();
});

buttonPrevious.addEventListener("click", () => {
    currentActive --;
    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

const update = () => {
    allSteps.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });
    const activeCircles = document.querySelectorAll(".circle.active").length;
    console.log(activeCircles);
    progressLine.style.width = (activeCircles - 1) * 100 / (allSteps.length - 1) + "%";

    // buttons (active or inactive) //
    if (currentActive === 1){
        buttonPrevious.disabled = true;
    }
    else if (currentActive === allSteps.length){
        buttonForward.disabled = true;
    }
    else{
        buttonForward.disabled = false;
        buttonPrevious.disabled = false;
    }
}