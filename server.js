const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const convertRomanToNumeric = require('./controllers/convertRomanToNumeric.js');
const convertArabicToRoman = require('./controllers/convertNumericToRoman.js');

// Configure CORS to allow all origins 
app.use(cors({
  origin: 'https://roman-numerals-conversion.netlify.app', 
  methods: 'GET,PUT,POST',
  credentials: true,
}));

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
    if (/^[0-9]+$/.test(arabicNumber)) {
        const romanValue = convertArabicToRoman(arabicNumber);
        res.json({ result: romanValue });
    } else {
        res.status(400).json({ error: "Invalid Arabic number" });
    }
});


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;
