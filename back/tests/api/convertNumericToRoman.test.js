const convertArabicToRoman = require('../../controllers/convertNumericToRoman.js');


describe('Conversion Functions', () => {

    describe('convertArabicToRoman', () => {
        it('Convertir correctement les nombres arabes en chiffres romains', () => {
            expect(convertArabicToRoman(3)).toBe('III');
            expect(convertArabicToRoman(4)).toBe('IV');
            expect(convertArabicToRoman(9)).toBe('IX');
            expect(convertArabicToRoman(58)).toBe('LVIII');
            expect(convertArabicToRoman(1994)).toBe('MCMXCIV');
        });
    });
});
