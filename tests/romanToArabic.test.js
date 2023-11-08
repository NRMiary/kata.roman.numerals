const { romanToArabic } = require('./js/scripts');

describe('Roman to Arabic Conversion', () => {
    test('Convert "I" to 1', () => {
        expect(romanToArabic('I')).toBe(1);
    });

    test('Convert "IV" to 4', () => {
        expect(romanToArabic('IV')).toBe(4);
    });

    test('Convert "IX" to 9', () => {
        expect(romanToArabic('IX')).toBe(9);
    });

    test('Convert "X" to 10', () => {
        expect(romanToArabic('X')).toBe(10);
    });

    test('Convert "XL" to 40', () => {
        expect(romanToArabic('XL')).toBe(40);
    });

    test('Convert "XC" to 90', () => {
        expect(romanToArabic('XC')).toBe(90);
    });

    test('Convert "C" to 100', () => {
        expect(romanToArabic('C')).toBe(100);
    });

    test('Convert "CD" to 400', () => {
        expect(romanToArabic('CD')).toBe(400);
    });

    test('Convert "CM" to 900', () => {
        expect(romanToArabic('CM')).toBe(900);
    });

    test('Convert "MMXXII" to 2022', () => {
        expect(romanToArabic('MMXXII')).toBe(2022);
    });
});
