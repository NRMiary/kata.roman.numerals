const  convertRomanToNumeric = require('../../controllers/convertRomanToNumeric.js');

describe('Conversion Functions', () => {
    describe('convertRomanToNumeric', () => {
        it('Correctement convertir les chiffres romains en nombres', () => {
            expect(convertRomanToNumeric('III')).toBe(3);
            expect(convertRomanToNumeric('IV')).toBe(4);
            expect(convertRomanToNumeric('IX')).toBe(9);
            expect(convertRomanToNumeric('LVIII')).toBe(58);
            expect(convertRomanToNumeric('MCMXCIV')).toBe(1994);
        });
    });
});
