#!/usr/bin/env node
'use strict';



const balancedBrackets = function(string){
    let charArray = string.split("");
    let charStack = [];
    let openings = ["(", "{", "["];
    let closings = [")", "}", "]"]
    let opposites = {"}":"{","]":"[",")":"(" }
    for (let i = 0; i < charArray.length; i++){
        let char = charArray[i];
        if (openings.includes(char)) {
            charStack.push(char);
        } else if (closings.includes(char)) {
            if (charStack[charStack.length - 1] === opposites[char]) {
                charStack.pop()
            } else {
                charStack.push(char)
            }
        }
    }
    return charStack.length === 0

}
console.log("PAIRBOARDING SESSION 04/08 WITH PAUL AND MAC")
console.log(balancedBrackets("([])(){}(())()()"), "should be true")