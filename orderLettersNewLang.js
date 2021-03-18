#!/usr/bin/env node
'use strict';

/*
You come across a dictionary of sorted words in a language
you've never seen before. Write a program that returns the
correct order of letters in this language.

For example, given['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'],
you should return ['x', 'z', 'w', 'y'].


Approach:
iterate over the word array, record the order of letters in 
the nth place of each word (from 0 => (longest word's length -1)).
This approach is used for the first letter's place, but after the 
first word's place, can only compare the order of a following letter's place
of two words if the letters that they follow are the same.
EX. 'xww' and 'wxyz' the order of 'w' in the second letter's place
cannot be compared to 'x' in the other word's second letter's place
if the first letter's place letter's are the same.

STEP THROUGH:

0th place:
'x' comes before 'w',
'w' comes before 'y'

1st place:
can only compare'wxyz' with 'wxyw' and 'ywx' with 'ywz'
but the letters in 1st place are the same in both:
'x' and 'x', 'w' and 'w'
so nothing is discovered

2nd place:
can only compare 'wxyz' to 'wxyw' and 'ywx' to 'ywz'
from this we get:
'z' comes before 'w'
'x' comes before 'z'


to be able to compare the letters after the first place, 
we need to know that the letters preceding that place are the same
between the words being compared. The words that can be compared would separate 
into groups and from those, smaller groups. This lends itself to a DFS approach,
so that the comparing goes down into smaller and smaller groups originating from the 
first separation. Would NOT neet to iterate over these preceding letters over and over again.


*/
// console.log(`You come across a dictionary of sorted words in a language
// you've never seen before. Write a program that returns 
// the correct order of letters in this language.\n`);

function orderLettersNewLang(wordArray) {
    let tree = buildLetterTree(wordArray);
    let letterArr = compareLettersOfTree(tree);
}



// function findLongestWord(arr) {
//     let longWord = "";
//     arr.forEach(word => {
//         if (word.length > longWord.length) {
//             longWord = word;
//         }
//     })
//     return longWord;
// }



/*

Could design a tree like this:
orderObject = {
    'y': {
        'w': {
            'z': 0,
            'x': 0
        }
    },
    'w': {
        'x':{
            'y':{
                'z': 0,
                'w': 0
            }
        }
    },
    'x': {
        'w': {
            'w': 0
        }
    }
};
*/

function buildLetterTree(wordArr) {
    let letterObject = {};
    // wordArr.forEach(word => {
    //     if (letterObject[word[0]]) continue;
    //     letterObject[word[0]] = {}
    // });
    wordArr.forEach(word => {
        letterObject = buildOutTreeOneWordAtATime(letterObject, word)
    })
    return letterObject;
}

function buildOutTreeOneWordAtATime(letterObject, word) {
    let i = 0;
    let currentRef = letterObject;
    while (i < word.length) {
        let letter = word[i];
        if (i === word.length - 1) {
            currentRef[letter] = 0;
        } else if (!currentRef[letter]) {
            currentRef[letter] = {};
        }
        currentRef = currentRef[letter]
        i++;
    }
    return letterObject
}
// console.log(buildOutTreeOneWordAtATime({}, 'wxyz'));
// console.log(buildOutTreeOneWordAtATime({}, 'wxyw'));

// while (letterIdx < length - 1) {
//     wordArr.forEach(word => {
//         let letter = word[letterIdx];
//     })
// }

// wordArr.forEach(word => {
//     word.forEach(letter => {
//         letterObject[letter] = {}
//     })
// })

// function lengthOfLongestWord(wordArr) {
//     let longest = "";
//     wordArr.forEach(word => {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     })
//     return longest.length;
// }


/*

To traverse the tree DFS would allow the letters 
at each level in a subtree to be compared.

So the first sub tree: can compare 'y', 'w', 'x'
next subtree ('y') can compare 'w' with nothing
and next subtree of 'y' ('w'), can compare 'z' with 'x'.

Next subtree of 'w', ('x') can compare with nothing.
Next subtree of 'x' ('y') can compare 'z' with 'w'.

Next subtree of 'x' ('w'), can compare with nothing.
subtree of 'w' ('w') can compare with nothing.


*/
function compareLettersOfTree(tree) {

}
console.log(buildLetterTree(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']))
// console.log(orderLetters(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], 1));
// console.log(orderLettersNewLang(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']), " should return ['x','z','w','y']")