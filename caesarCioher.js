#!/usr/bin/env node
'use strict';

function caesarCipherEncryptor(string, key) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let newArr = [];
    for (let i = 0; i < string.length; i++){
        let idx = alph.indexOf(string[i])
        console.log(idx)
        if (idx === -1) {
            newArr.push(string[i])
        } else {
            let newIdx = (idx + key) % 26//-1
            if (newIdx < 0) newIdx = 26 + newIdx 
            let newChar = alph[newIdx]
            newArr.push(newChar)
        }
    }
    return newArr.join("")
}

console.log(caesarCipherEncryptor('bcd', -2), `should be zab`)
console.log(caesarCipherEncryptor('abc', 3), `should be def`)


  