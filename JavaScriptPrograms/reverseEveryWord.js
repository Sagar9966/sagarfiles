const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWord(word) {
    return word.split('').reverse().join('');
}

function reverseSentenceWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(' ');
}

rl.question("Enter a sentence: ", function(input) {
    if (input.trim() !== "") {
        var reversedSentence = reverseSentenceWords(input);
        console.log("Reversed sentence: " + reversedSentence);
    } else {
        console.log("Invalid input. Please enter a sentence.");
    }
    rl.close();
});