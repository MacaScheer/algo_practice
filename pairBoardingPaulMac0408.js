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

// minMaxStack = [{ min: 6, max: 19 }, { min: 6, max: 21}]

class minMaxStack { 
  constructor() {
    stack = []
    stackStack = []
  }

  getMin() {
    return this.stackStack[this.stackStack.length - 1].min
  }

  getMax() {
return this.stackStack[this.stackStack.length - 1].max

  }

  peek() {
    return this.stack[this.stackStack.length - 1]
  }

  pop() { 
this.stackStack.pop()
    return this.stack.pop() 
  }

  push(value) {
      let valueObject = { min: value, max: value }
    if (this.stackStack.length > 0) {
      let lastValues = this.stackStack[this.stackStack.length - 1]
      valueObject.min = Math.min(lastValues.min, value)
      valueObject.max = Math.max(lastValues.max, value)

    }
    this.stackStack.push(valueObject)
    this.stack.push(value)
  }
}