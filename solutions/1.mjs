import getInput from "../utils/getInput.mjs";

const replaceWordsWithDigits = (input) => {
    const numberWords = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };
    const regex = new RegExp(Object.keys(numberWords).join('|'), 'g');
    let match;
    let result = '';
    let lastIndex = 0;

    while ((match = regex.exec(input)) !== null) {
        result += input.substring(lastIndex, match.index) + numberWords[match[0]];
        lastIndex = match.index + match[0].length;
        regex.lastIndex = match.index + 1;
    }
    result += input.substring(lastIndex);

    return result;
}

// 1
let input = await getInput(1);

// 2 -- comment for solution 1
input = replaceWordsWithDigits(input);


const sum = input.split('\n').map(line => {
    const numbers = line.match(/\d/g)?.map(Number) || [];
    return numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
}).filter(pair => pair.length > 0).map(e => `${e[0]}${e[1]}`).reduce((p, c) => parseInt(p) + parseInt(c), 0);

// Sum all pairs.
console.log(sum);
