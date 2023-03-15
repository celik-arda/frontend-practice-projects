const button = document.getElementById("button");
const notifArea = document.getElementById("toasts");

const allMessages = [
    "Notification One",
    "Notification Two",
    "Notification Three",
    "Notification Four"
];

const allTypes = [
    "info",
    "danger",
    "success"
];

const getRandomArrayElement = (arrayList) => {
    let randomIndex = Math.floor((Math.random() * arrayList.length));
    return arrayList[randomIndex];
}

const checkAndRemoveExcess = () => {
    const numberOfMessages = notifArea.children.length;
    if (numberOfMessages > 3) {
        notifArea.firstElementChild.remove();
    }
}

const createNotification = () => {
    const randomMessage = getRandomArrayElement(allMessages);
    const randomType = getRandomArrayElement(allTypes);
    const notifElement = document.createElement("div");
    notifElement.className = "notification";
    notifElement.innerText = `${randomMessage}`;
    notifElement.classList.add(`${randomType}`);
    notifArea.appendChild(notifElement);

    setTimeout(() => {
        notifElement.remove();
    }, 2500);

    checkAndRemoveExcess();
}

button.addEventListener("click", createNotification);