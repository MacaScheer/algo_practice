#!/usr/bin/env node
'use strict'

/*
MEDIUM Q from GOOGLE
You are given a set of synonyms, 
such as (big, large) and (eat, consume). 
Using this set, determine if two sentences 
with the same number of words are equivalent.

For example, the following two sentences are equivalent:

"He wants to eat food."
"He wants to consume food."
Note that the synonyms (a, b) and (a, c) 
do not necessarily imply (b, c): 
    consider the case of (coach, bus) and (coach, teacher).

Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?
*/
/*
iterate through the sentences, if the sentences contain words from the same synonym array ,
i.e. the words they have, have the same outer idx...
when coming upon a word that is in one of the synonym arrays, remove it from the sentence
that way when reaching the end the sentences should be the same length,
and keep track of the words that were removed and if they were from the same synonym array
*/
function equivalentSentence(synonyms, sentence1, sentence2) {
    let arr1 = whichSynArr(sentence1, synonyms);
    let arr2 = whichSynArr(sentence2, synonyms);
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true;
}
function whichSynArr(sentence, synonyms) {
    let idxs = [];
    let sentArr = sentence.split(" ");
    for (let i = 0; i < sentArr.length; i++) {
        let word = sentArr[i];
        synonyms.forEach((syn, i) => {
            if (syn.includes(word)) {
                idxs.push(i)
            }
        })
    }
    return idxs;
}
// function findSynonyms(sentence, synonyms) {
//     let sentenceArr = sentence.split(" ");
//     let outputArr = [];
//     for (let i = 0; i < sentenceArr.length; i++) {
//         let word = sentenceArr[i];
//         if (!synonyms.includes(word)) {
//             outputArr.push(word)
//         }
//     }
//     return outputArr;
// }
// console.log(findSynonyms("He wants to consume food.", ["eat", "consume"]));
console.log(equivalentSentence([["big, large"], ["eat", "consume"]], "He wants to eat food.", "He wants to consume food."));