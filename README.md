### Sudoku Checker

```js
const sudokuTest = function (array) {
    // object keeping track of num occurences
    let numsObj = resetObj({});
    // row test
    for (let i = 0; i < array.length; i++){
        let row = array[i];
        for (let i = 0; i < row.length; i++){
            numsObj[row[i]]++
        }
        if(!checkObj(numsObj)) return false
        numsObj = resetObj(numsObj)
    }
    // column test
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            numsObj[array[j][i]]++
        }
        if (!checkObj(numsObj)) return false;
        numsObj = resetObj(numsObj)
    }
    // grid test
    const ys = [[0,1,2],[3,4,5],[6,7,8]]
    for (let i = 0; i < 3; i++){  
        for (let x = (3 * i); x < ((3 * i) + 3); x++){ 
            for (let j = 0; j < 3; j++){   
                let subsub = ys[i];                       
                let y = subsub[j];
                numsObj[array[x][y]]++;
            }
        }
        if (!checkObj(numsObj)) return false
        numsObj = resetObj(numsObj)
    }
    return true
}

const checkObj = function (obj) {
    for (let i = 1; i < 10; i++){
        if (!obj[i] || obj[i] !== 1) {
            return false;
        }
    }
    return true;
}

const resetObj = function (object) {
     for (let i = 1; i < 10; i++){
        object[i] = 0;
     }
    return object
}
```