// Object to store conversion results
const conversionCache = {};

// Function to replace "O" or "o" with "0" in the input
function replaceOWithZero(input) {
    return input.replace(/o/gi, '0');
}

// Function to check if the input is a valid Arabic number
function isArabicNumber(input) {
    // First call the replacement function
    const cleanedInput = replaceOWithZero(input);

    // Check if the input is a valid Arabic number
    return /^[0-9]+$/.test(cleanedInput);
}

// Function to check if the input is a valid Roman numeral
function isRomanNumber(input) {
    // Check if the input is a valid Roman numeral
    const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    return romanPattern.test(input);
}

let apiUrl;
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // In local development mode
    apiUrl = 'http://localhost:3000'; // Replace with the URL of your local API
} else {
    // In production mode
    apiUrl = 'https://ws-roman-numerals-c84c6a63b965.herokuapp.com'; // Use the environment variable for the production URL
}

// Function to perform the conversion by calling the REST API
function performConversion(input, conversionType) {
    // Generate a unique key for this conversion
    const cacheKey = `${conversionType}_${input}`;

    // Check if the result exists in the cache
    if (conversionCache[cacheKey] !== undefined) {
        // The result exists in the cache, return the result from the cache
        return Promise.resolve(conversionCache[cacheKey]);
    }

    // Build the API URL based on the conversion type
    if (conversionType === "arabicToRoman") {
        // Replace the letter "O" with "0" in the Arabic input
        input           = input.replace(/o/gi, '0');
        apiUrlWithParam = `${apiUrl}/api/convert-arabic?arabic=${input}`; // Use the appropriate URL for Arabic to Roman conversion
    } else {
        apiUrlWithParam = `${apiUrl}/api/convert-roman?roman=${input}`; // Your API URL for Roman to Arabic conversion
    }

    // Build the request object
    let requestOptions = {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Send a GET request to the API
    return fetch(apiUrlWithParam, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid API response');
            }
            return response.json();
        })
        .then((data) => {
            // The conversion result will be in data.result
            let result = data.result;

            // Store the result in the cache
            conversionCache[cacheKey] = result;
            console.log("Result retrieved from API: ", result);

            // Call the function to update the HTML element
            updateResultOnUI(result);

            return result;
        })
        .catch((error) => {
            console.error('Error in API request:', error);
            throw error; // Propagate the error to handle it later if needed
        });
}

// Function to update the HTML element with the result
function updateResultOnUI(result) {
    // Select the result element
    let resultElement = document.getElementById('resultContainer');

    // Update the content of the element with the result
    resultElement.textContent = `Résultat: ${result}`;
}

// Function to handle the conversion when the button is clicked
function handleConversion() {
    let inputNumber = document.getElementById('inputNumber').value;
    let conversionType = document.getElementById('conversionType').value;

    if (conversionType === "romanToArabic" || conversionType === "arabicToRoman") {
        if ((conversionType === "romanToArabic" && isRomanNumber(inputNumber)) ||
            (conversionType === "arabicToRoman" && isArabicNumber(inputNumber))) {
            performConversion(inputNumber, conversionType);
        } else {
            alert("Entrez un nombre valide");
        }
    } 
}

// Attach the event handler to the button when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    let convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', handleConversion);
});

module.exports = {
    replaceOWithZero,
    conversionCache,
    isArabicNumber
};
