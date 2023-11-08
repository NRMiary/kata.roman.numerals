function isArabicNumber(input) {
    // Vérifie si l'entrée est un nombre arabe valide
    return /^[0-9]+$/.test(input);
}

function isRomanNumber(input) {
    // Vérifie si l'entrée est un nombre romain valide
    return /^[IVXLCDM]+$/.test(input);
}

// Fonction pour convertir une chiffre roman en arabe
function romanToArabic(roman) {
    const romanNumerals = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };

    let arabic = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentRoman = roman[i];
        const currentValue = romanNumerals[currentRoman];

        if (currentValue >= prevValue) {
            arabic += currentValue;
        } else {
            arabic -= currentValue;
        }

        prevValue = currentValue;
    }

    return arabic;
}

// Fonction pour convertir une chiffre arabe en roman
function arabicToRoman(arabic) {
    const romanNumerals = {
        1: "I", 4: "IV", 5: "V", 9: "IX",
        10: "X", 40: "XL", 50: "L", 90: "XC",
        100: "C", 400: "CD", 500: "D", 900: "CM",
        1000: "M"
    };

    let roman = "";

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

// Fonction pour gérer la conversion lorsque le bouton est cliqué
function handleConversion() {
    const inputNumber = document.getElementById('inputNumber').value;
    const conversionType = document.getElementById('conversionType').value;
    let result = "";

    if (conversionType === "romanToArabic") {
        if (isRomanNumber(inputNumber)) {
            result = romanToArabic(inputNumber);
        } else {
            alert("Entrez un nombre romain valide.");
            return;
        }
    } else if (conversionType === "arabicToRoman") {
        if (isArabicNumber(inputNumber)) {
            result = arabicToRoman(inputNumber);
        } else {
            alert("Entrez un nombre arabe valide.");
            return;
        }
    }

    document.getElementById('result').textContent = `Résultat: ${result}`;
}

// Attacher le gestionnaire d'événements au bouton lors du chargement du document
document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', handleConversion);
});