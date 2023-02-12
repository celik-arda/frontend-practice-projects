let allContentBoxes = document.querySelectorAll(".content-box");

const eventAdding = () => {
    allContentBoxes.forEach((e, index) => {
        e.addEventListener("click", triggerTheTransition);
        if(index === 0){
            e.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded",
eventAdding);
// Click Function  //


const triggerTheTransition = (e) => {
    const clickedElement = e.target;
    for (let i=0; i < allContentBoxes.length; i++){
        allContentBoxes[i].classList.remove("active");
    }
    clickedElement.classList.add("active");  
}

