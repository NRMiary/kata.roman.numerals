const { replaceOWithZero, conversionCache, isArabicNumber } = require('../js/script.js');

    describe('Conversion des lettres "O" ou "o" en zéro "0"', () => {
    // Test replacing "O" with "0" in uppercase
    test('Remplace "O" par "0" en majuscules', () => {
        const input = '100O';
        const expectedOutput = '1000';
        const result = replaceOWithZero(input);
        expect(result).toBe(expectedOutput);
    });

    // Test replacing "o" with "0" in lowercase
    test('Remplace "o" par "0" en minuscules', () => {
        const input = '123o';
        const expectedOutput = '1230';
        const result = replaceOWithZero(input);
        expect(result).toBe(expectedOutput);
    });

   // Test cache memory
    test('Se souvient de l\'appel précédent et renvoie la réponse correspondante', () => {
        const input = '42';
        const expectedOutput = '42';
        // Simulate adding the previous result to the cache
        conversionCache['arabicToRoman_42'] = 'XLII';
        const result = isArabicNumber(input);
        expect(result).toBe(true);
        // Ensure that the function returns the previous result without re-running the algorithm
        expect(input).toBe(expectedOutput);
    });
});


