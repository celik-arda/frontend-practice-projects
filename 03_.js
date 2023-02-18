const bgSection = document.querySelector("#bgSection");
const loadText = document.querySelector("#loadText");



let load = 0;

const blurring = () => {
    load ++;
    if (load > 99){
        clearInterval(blurInterval);
    }
    console.log(bgSection);
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bgSection.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (loadNumber, in_min, in_max, out_min, out_max) => {
    const calculatedValue = (loadNumber - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

    return calculatedValue;
};
const blurInterval = setInterval(blurring, 30);
