const findNPrimes = function (n) {
    let arr = [1,2];
    let i = 3;
  
    // let visited = new Set(1)
    while (arr.length < n) {
        if (isPrime(i, arr)) {
            arr.push(i)
   
        }
        i++
    }
    return arr;
}

const isPrime = function (n, arr) {
    for (let i = n - 1; i > arr[arr.length - 1]; i--){
        if (n % i === 0) return false
    }
    return true;
}

console.log(findNPrimes(12))