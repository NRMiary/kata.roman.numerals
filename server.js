const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); // Import the cors module

// Configure CORS to allow all origins (for demonstration purposes, for local development)
app.use(cors());

app.use(express.json());

// API endpoint to convert Roman numerals to numeric values
app.get('/api/convert-roman', (req, res) => {
    const romanNumeral = req.query.roman;
    if (typeof romanNumeral === 'string' && romanNumeral.length > 0) {
        const numericValue = convertRomanToNumeric(romanNumeral);
        res.json({ result: numericValue });
    } else {
        res.status(400).json({ error: "Invalid Roman numeral" });
    }
});

// API endpoint to convert Arabic numbers to Roman numerals
app.get('/api/convert-arabic', (req, res) => {
    const arabicNumber = req.query.arabic;
    if (isNumeric(arabicNumber)) {
        const romanValue = convertArabicToRoman(arabicNumber);
        res.json({ result: romanValue });
    } else {
        res.status(400).json({ error: "Invalid Arabic number" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Function to convert Roman numerals to numeric values
function convertRomanToNumeric(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    // Iterate through the Roman numeral from right to left
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];

        // If the value of the current symbol is less than the value of the next symbol, subtract it
        if (i < roman.length - 1 && currentValue < romanNumerals[roman[i + 1]]) {
            result -= currentValue;
        } else {
            // Otherwise, add it to the total value
            result += currentValue;
        }
    }

    return result;
}

// Function to check if a string is a valid Arabic number
function isNumeric(input) {
    return /^[0-9]+$/.test(input);
}

// Function to convert Arabic numbers to Roman numerals
function convertArabicToRoman(arabic) {
    const romanNumerals = {
        1: "I", 4: "IV", 5: "V", 9: "IX",
        10: "X", 40: "XL", 50: "L", 90: "XC",
        100: "C", 400: "CD", 500: "D", 900: "CM",
        1000: "M"
    };

    let roman = "";

    // Replace the letter "O" with "0" in the Arabic input
    arabic = arabic.replace(/o/gi, '0');

    const sortedValues = Object.keys(romanNumerals)
        .map(Number)
        .sort((a, b) => b - a);

    for (const value of sortedValues) {
        while (arabic >= value) {
            roman += romanNumerals[value];
            arabic -= value;
        }
    }

    return roman;
}
