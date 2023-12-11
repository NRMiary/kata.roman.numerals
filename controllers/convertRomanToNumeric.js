function convertRomanToNumeric(roman) {
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
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanNumerals[currentSymbol];
        if (i < roman.length - 1 && currentValue < romanNumerals[roman[i + 1]]) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
}

module.exports = convertRomanToNumeric;
