
const { convertToRoman } = require('./js/scripts');

describe('Roman numeral conversion', () => {
    test('Convert 1 to "I"', () => {
        expect(convertToRoman(1)).toBe('I');
    });

    test('Convert 10 to "X"', () => {
        expect(convertToRoman(10)).toBe('X');
    });

});
