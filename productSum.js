//[5,2,[7,-1],3,[6,[-13,8],4]] => (5 + 2 + 2(7 -1) + 3 + 2(6 + 3(-13 + 8) + 4))

//[1,[2,3[4,5]],6] => (1*(1 + 6)) + (2*(2+3)) + (3*(4 + 5))
//if integer, add to sum
//if array, increment count, iterate through, adding the integers multiplied by the count
//
//
//
const productSum = function (array) {
    let count = 1;
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === Array) {
            count += 1
            sum += sumMer(array[i], count)
        } else {
            sum += array[i]
        }
    }

}

const reducer = (acc, currVal) => acc + currVal
const sumMer = function (arr, count) {
    return arr.reduce(reducer) * count
}

console.log(sumMer([1,1,1,1]))