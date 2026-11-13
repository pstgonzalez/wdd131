const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChillElement = document.querySelector("#windchill");

// Footer information
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Weather information
const temperature = 8;
const windSpeed = 10;

// Calculate wind chill in Celsius
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Display wind chill only when conditions are valid
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}