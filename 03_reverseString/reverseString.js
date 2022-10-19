let reversed_char = Array()
const reverseString = function(word) {
    let chars = word.split("")
    let reversed_char = chars.reverse()
    let new_word = reversed_char.join('')
    return new_word
};

// Do not edit below this line
module.exports = reverseString;
