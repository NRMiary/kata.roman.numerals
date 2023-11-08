window.addEventListener('DOMContentLoaded', event => {
    // ...

    // Function to convert Roman numerals to Arabic numbers
    function convertToArabic(roman) {
        const romanNumerals = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
        };

        let result = 0;
        let i = 0;

        while (i < roman.length) {
            if (i + 1 < roman.length && romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
                result += romanNumerals[roman[i + 1]] - romanNumerals[roman[i]];
                i += 2;
            } else {
                result += romanNumerals[roman[i]];
                i++;
            }
        }

        return result;
    }

    const romanConverterForm = document.getElementById('arabicConverter');
    const resultSpan = document.getElementById('result');

    romanConverterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const romanInput = document.getElementById('numberInput');
        const roman = romanInput.value;
        const arabic = convertToArabic(roman);

        if (!isNaN(arabic)) {
            resultSpan.textContent = `En chiffres arabes : ${arabic}`;
        } else {
            resultSpan.textContent = 'Entrez un chiffre romain valide.';
        }
    });
});
