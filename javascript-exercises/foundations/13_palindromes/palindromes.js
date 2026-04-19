const palindromes = function (word) {
    const formattedWord = word.replaceAll(' ', '').toLowerCase().replace(/[\W]/g, '');
    const reversedWord = formattedWord.split('').reverse().join('');
    if (reversedWord === formattedWord) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
