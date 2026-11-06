const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    hamButton.setAttribute(
        "aria-expanded",
        hamButton.classList.contains("open")
    );

    hamButton.textContent = hamButton.classList.contains("open") ? "✕" : "☰";
});

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;