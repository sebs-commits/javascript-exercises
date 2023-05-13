const repeatString = function (word, number){
    if (number < 0){
        return "ERROR"
    }
    else {
        let newWord = word.repeat(number);
        return newWord;
    }
    
}
// Do not edit below this line
module.exports = repeatString;