// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle

// Input: 5
// Output:
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]


// create a new array using the last array in the nested array => helper function 

// helper function => sum together each neighbor of array as new element of return array

//if number is 1 return nested array of 1

//else return nested array using helper function n - 1 times

function pascalsTriangle(num) {
    let rows = [[1]];
    // if (num === 1) return rows
    let i = 0;
    let currentRow;
    while (i < num) {
        currentRow = rows[i]
        console.log(currentRow)
        rows.push(helperSum(currentRow))
        i += 1
    }
    return rows
    

}

function helperSum(array) {
    let returnArray = [1];
    if (array.length === 1) return [1,1]
    for (let i = 0; i < array.length - 1; i++){
        returnArray.push(array[i] + array[i + 1])
    }
    
    returnArray.push(1);
    return returnArray;
}

console.log(pascalsTriangle(5))

// console.log(helperSum([1, 1]))
// console.log(helperSum([1, 2, 1]))
// console.log(helperSum([1,3,3,1]))
