const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    const chapterName = input.value.trim();

    if (chapterName !== "") {
        const newChapter = document.createElement("li");
        newChapter.textContent = chapterName;

        const newDeleteButton = document.createElement("button");
        newDeleteButton.textContent = "❌";

        newDeleteButton.addEventListener("click", function () {
            list.removeChild(newChapter);
        });

        newChapter.appendChild(newDeleteButton);
        list.appendChild(newChapter);

        input.value = "";
        input.focus();
    }
});