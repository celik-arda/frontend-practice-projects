const allAnimationElements  = document.querySelectorAll(".animation");
const imageArea = document.querySelector("#loadingHeaderImage");
const profileArea = document.querySelector("#loadingProfilePic");
const allTexts = document.querySelectorAll(".text");


const headerUrl = `url("https://media.gettyimages.com/id/475967981/photo/female-coworkers-laughing.jpg?s=612x612&w=gi&k=20&c=Z0L6DEkfTPbolkDA3xjvPmUwSxfZckCIwoOm9AET9NQ=")`;
const profileUrl = `url("https://thumbs.dreamstime.com/b/african-office-worker-portrait-handsome-male-talking-phone-44341693.jpg")`;
const exampleText = `Lorem, ipsum dolor sit amet consectetur adipisi`;


const loadPageContents = () => {
    
    imageArea.style.backgroundImage = headerUrl;
    profileArea.style.backgroundImage = profileUrl;
    allTexts.forEach(textEl => {
        textEl.innerText = exampleText;
    });
} 

const openningPage = () => {
    
    setTimeout(() => {
        allAnimationElements.forEach((spanEl) => {
            spanEl.classList.remove("active");
            spanEl.classList.add("passive");
        });

        loadPageContents();
    }, 3000);

}
openningPage();