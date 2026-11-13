let firstName = "Antonia";
let lastName = "Francesca";

const fullName = function (first, last) {
    return `${first} ${last}`;
};

console.log(fullName(firstName, lastName));

document.querySelector("#fullName").textContent = fullName(firstName, lastName);