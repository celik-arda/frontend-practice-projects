
const allMemberElements =  document.querySelectorAll(".totalNumber");

console.log("selam 1");
allMemberElements.forEach(element => {
    element.innerText = "0";
    console.log("selam 2");
    console.log(element);
    const increaseTheNumbers = () => {
        console.log("selam 3");
        const targetNumber = +element.getAttribute("data-target");
        const displayingNumber = +element.innerText;
        
        const everyCounterStep = +targetNumber / 200;
        console.log("selam 4");
        console.log(targetNumber," - ",displayingNumber," - ",everyCounterStep);
        
        if(displayingNumber < targetNumber){
            element.innerText = `${Math.ceil(displayingNumber + everyCounterStep)}`;
            setTimeout(increaseTheNumbers, 1);
        }
        else{
            element.innerText = targetNumber;
        }
        console.log("selam 5");
        
    }
    increaseTheNumbers();
});
