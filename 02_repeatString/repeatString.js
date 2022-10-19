const word = ''
const times = '10'
let final_string = ''
const repeatString = function(repeated_word = word, repeat_times = times) {
    if (repeat_times < 0) {
        return 'ERROR'
    }
    for (i = 0; i < repeat_times; i++)
        final_string += repeated_word
    return final_string
};

// Do not edit below this line
module.exports = repeatString;
