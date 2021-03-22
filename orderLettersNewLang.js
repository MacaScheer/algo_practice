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
    // let orderArr = [];
    let tree = buildLetterTree(wordArray);
    return compareLettersOfTree(tree);
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





function buildLetterTree(wordArr) {
    let letterObject = {};
    let i = 0;
    wordArr.forEach(word => {
        letterObject = buildOutTreeOneWordAtATime(letterObject, word, i);
        i++;
    })
    return letterObject;
}

function buildOutTreeOneWordAtATime(letterObject, word, j) {
    let i = 0;
    let currentRef = letterObject;
    while (i < word.length) {
        let letter = word[i];
        if (i === word.length - 1) {
            currentRef[letter] = j;
        } else if (!currentRef[letter]) {
            currentRef[letter] = {};
        }
        currentRef = currentRef[letter]
        i++;
    }
    return letterObject
}

/* Design a tree like this:
letterObject = {
    'y': {
        'w': {
            'z': 1,
            'x': 0
        }
    },
    'w': {
        'x':{
            'y':{
                'z': 0,
                'w': 1
            }
        }
    },
    'x': {
        'w': {
            'w': 0
        }
    }
};
FLAWS OF TREE:
objects don't persist any order, 
so for subtrees that have multiple keys in them,
in order to compare those keys, 
we need to know their order!! DUH FOO!
SO to do this: when the tree building algo 
reaches the end of each word, the value it assigns 
in the object, should be the order in which that end
of the word appeared in the algo.

SAY we had a scenario like this:
...
'w': {
        'x':{
            'y':{
                'z': 0,
                'w': 1
            }
        },
        'l': {
            'z': 0,
            'w': 1
        }
    },
...
HOW do we know whether 'x' or 'l' comes first 
in the original array??????
It's easy to record the order of the last letters
of the words, but not words that are in the middle...

Maybe then nested arrays???
[
    [
        'w',
        ['x',
            ['y',
                ['z','w']
            ]
        ],
        'l',
        ['z','w']
    ]
]

letterArrays = [
    'y', [
        'w', [
            'z',
            'x'
            ]
        ],
    'w', [
       'x',[
            'y',[
                'z',
                'w'
            ]
        ]
    ],
    'x',[
        'w',[
            'w'
        ]
    ]
];
But traversing is going to be completely different...
and building is completely different

*/

function buildOutLetterArrays(wordArr) {
    let letterArray = [];
    for (let i = 0; i < wordArr.length; i++) {
        letterArray = buildOutLetterArrayPerWord(wordArr[i], letterArray);
    }
    return letterArray;
}
function buildOutLetterArrayPerWord(word, array) {
    let currArr = array;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let idx = currArr.indexOf(letter);
        if (idx === -1) {
            array.push(letter);
            array.push(new Array());
            currArr = array[array.length - 1];
        } else {
            currArr = array[idx];
        }
    }
    return array;
}

function compareLettersOfTree(tree) {
    let orderArr = [];
    for (let subtree of tree) {
        let subOrder = findSubTreeOrder(subtree);
    }
}

function orderOfSubTree(subArr, orderArr = []) {
    /*
     ['y', [
         'w', [
             'z',
             'x'
         ]
     ],]
     we can see that 'z' comes before 'x'
     Do we start from outer array first?
 
     */
    for (let i = 0; i < subArr.length; i++) {
        let el = subArr[i];
        if (typeof el === Array) {

        } else {
            // find where it came in the order before
            let idx = orderArr.indexOf(el);

            orderArr.push(el);
        }
    }
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
console.log(buildOutLetterArrays(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']))
// console.log(buildLetterTree(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']))
// console.log(orderLetters(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], 1));
// console.log(orderLettersNewLang(['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']), " should return ['x','z','w','y']")