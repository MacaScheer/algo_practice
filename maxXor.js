// This problem was asked by Salesforce.

// Given an array of integers, find the maximum XOR of any two elements.

// { \displaystyle f(a, b) = a + b - 2 * a * b } is an analytical representation of XOR gate:


const arr = [25, 3454, 0, 44, 23, -9, 0, 0, 12, 78];

function xorMax(arr) {
    let maxObj = {}
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i; j < arr.length; j++){
            if (i != j) maxObj[`${i},${j}`] = xOrVal(arr[i],[j])
        }
    }
    let max = -Infinity;
    let maxI = null;
    let maxJ = null;
    for (let key in maxObj) {
        let maxVal = maxObj[key]
        if (maxVal > max) {
            maxI = key[0]
            maxJ = key[2]
            max = maxVal
        }
    }
    console.log(arr[maxI], arr[maxJ])
return [arr[maxI], arr[maxJ]]
}

function xOrVal(a, b) {
    let xorVal = a + b - (2 * a * b)
    return xorVal
}


console.log(xorMax(arr))