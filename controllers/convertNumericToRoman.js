function convertArabicToRoman(arabic) {
    const romanNumerals = {
        1: "I", 4: "IV", 5: "V", 9: "IX",
        10: "X", 40: "XL", 50: "L", 90: "XC",
        100: "C", 400: "CD", 500: "D", 900: "CM",
        1000: "M"
    };

    let roman = "";
    arabic = arabic.toString().replace(/o/gi, '0'); 
    const sortedValues = Object.keys(romanNumerals)
        .map(Number)
        .sort((a, b) => b - a);

    for (const value of sortedValues) {
        while (arabic >= value) {
            roman += romanNumerals[value];
            arabic -= value;
        }
    }

    return roman;
}

module.exports = convertArabicToRoman;
