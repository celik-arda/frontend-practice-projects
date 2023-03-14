const textElement = document.getElementById("sliding-text");
const input = document.getElementById("speedInput");

const defaultText = "We love programming";
let speed = 400 / input.value;

let speedIndex = 1;

const slideTheText = () => {
    textElement.innerText = defaultText.slice(0,speedIndex);
    speedIndex ++;

    if (speedIndex > defaultText.length){
        speedIndex = 1;
    }

    setTimeout(slideTheText, speed);
}
slideTheText();

input.addEventListener("input", (e) => {
    speed = 400 / e.target.value;
});
