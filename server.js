const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utilisez le port spécifié dans l'environnement ou le port 3000 par défaut

app.use(express.json());

app.get('/api/convert-roman', (req, res) => {
    const romanNumeral = req.query.roman;
    const numericValue = convertRomanToNumeric(romanNumeral); // Utilisez votre propre fonction de conversion ici
    res.json({ result: numericValue });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function convertRomanToNumeric(roman) {
    // Définir un objet pour mapper les symboles romains à leurs valeurs numériques
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

    // Parcourir le chiffre romain de droite à gauche
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];

        // Si la valeur du symbole courant est inférieure à la valeur du symbole suivant, soustrayez-la
        if (i < roman.length - 1 && currentValue < romanNumerals[roman[i + 1]]) {
            result -= currentValue;
        } else {
            // Sinon, ajoutez-la à la valeur totale
            result += currentValue;
        }
    }

    return result;
}

