const { arabicToRoman } = require('./js/scripts');

describe('Roman numeral conversion', () => {
    test('Convert 1 to "I"', () => {
        expect(arabicToRoman(1)).toBe('I');
    });

    test('Convert 4 to "IV"', () => {
        expect(arabicToRoman(4)).toBe('IV');
    });

    test('Convert 9 to "IX"', () => {
        expect(arabicToRoman(9)).toBe('IX');
    });

    test('Convert 50 to "L"', () => {
        expect(arabicToRoman(50)).toBe('L');
    });

    test('Convert 90 to "XC"', () => {
        expect(arabicToRoman(90)).toBe('XC');
    });

    test('Convert 399 to "CCCXCIX"', () => {
        expect(arabicToRoman(399)).toBe('CCCXCIX');
    });

    test('Convert 874 to "DCCCLXXIV"', () => {
        expect(arabicToRoman(874)).toBe('DCCCLXXIV');
    });

    test('Convert 2022 to "MMXXII"', () => {
        expect(arabicToRoman(2022)).toBe('MMXXII');
    });
});