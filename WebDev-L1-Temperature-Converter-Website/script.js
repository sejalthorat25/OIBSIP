
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


// Convert button
convertBtn.addEventListener("click", function () {
    const value = temperatureInput.value.trim();
    const unit = unitSelect.value;

    // Hide previous messages
    errorMessage.style.display = "none";
    results.style.display = "none";


    // Check empty input
    if (value === "") {
        showError("Please enter a temperature value.");
        return;
    }


    // Convert input to number
    const temperature = Number(value);


    // Check numeric value
    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid numeric temperature.");
        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert input to Celsius first
    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }


    // Check absolute zero
    if (celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        return;
    }


    // Convert Celsius to other units
    fahrenheit = (celsius * 9 / 5) + 32;

    kelvin = celsius + 273.15;


    // Display results
    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";


    // Show result box
    results.style.display = "block";
});


// Real-time input validation
temperatureInput.addEventListener("input", function () {

    const value = temperatureInput.value.trim();

    errorMessage.style.display = "none";


    if (
        value !== "" &&
        !Number.isFinite(Number(value))
    ) {
        showError("Please enter a valid numeric temperature.");
    }
});


// Display error message
function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";
}