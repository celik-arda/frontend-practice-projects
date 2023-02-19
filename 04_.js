const searchArea = document.querySelector("#searchArea");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {

    searchArea.classList.toggle("active");

    // if (checkClasses){
    //     input.style.display = "block";
    // }
    // else {
    //     input.style.display = "none";
    // }
});
