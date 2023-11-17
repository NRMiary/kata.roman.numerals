const request = require('supertest');
const app = require('../server.js'); 

describe('GET /api/convert-roman', () => {
    test('Répondre avec une valeur numérique pour un chiffre romain valide', async () => {
        const response = await request(app)
            .get('/api/convert-roman')
            .query({ roman: 'XIV' }); 

        expect(response.status).toBe(200);
        expect(response.body.result).toBe(14); 
    });

    test('Répondre avec une erreur pour un chiffre romain invalide', async () => {
        const response = await request(app)
        .get('/api/convert-roman', (req, res) => {
            const romanNumeral = req.query.roman;
            if (typeof romanNumeral === 'string' && romanNumeral.length > 0 && isValidRomanNumeral(romanNumeral)) {
                const numericValue = convertRomanToNumeric(romanNumeral);
                res.json({ result: numericValue });
            } else {
                res.status(400).json({ error: "Invalid Roman numeral" });
            }
        }); 
    });
});
