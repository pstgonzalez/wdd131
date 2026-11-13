const temples = ["Antofagasta", "Santiago", "Concepción"];

console.log(temples);
console.log(temples[0]);
console.log(temples[1]);
console.log(temples[2]);

temples.push("La Serena");

console.log(temples);
console.log(temples.length);

for (let i = 0; i < temples.length; i++) {
    console.log(temples[i]);
}

console.log("Temples using forEach:");

temples.forEach(function (temple) {
    console.log(temple);
});

const upperCaseTemples = temples.map(function (temple) {
    return temple.toUpperCase();
});

console.log("Temples in uppercase:");
console.log(upperCaseTemples);

const longNames = temples.filter(function (temple) {
    return temple.length > 9;
});

console.log("Temples with names longer than 9 characters:");
console.log(longNames);
const fruits = ["Apple", "Banana", "Orange"];

console.log("Original:", fruits);

fruits.push("Mango");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

fruits.unshift("Grape");
console.log("After unshift:", fruits);

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log("Original colors:", colors);

// slice() copies part of an array
const selectedColors = colors.slice(1, 3);
console.log("After slice:", selectedColors);

// splice() removes elements from an array
colors.splice(2, 1);
console.log("After splice:", colors);

// join() converts an array into a string
const colorText = colors.join(", ");
console.log("After join:", colorText);