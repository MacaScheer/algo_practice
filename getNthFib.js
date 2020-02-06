//Nth Fibonacci

//NthFib(1) //=> 0
//NthFib(2) //=> 1
//NthFib(3) //=> 2
//NthFib(4) //=> 2

const getNthFib = function (n, memo = {1:0,2:1}) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (memo[n]) return memo[n]
// console.log(memo)
    return getNthFib(n - 1, memo[n-1]) + getNthFib(n - 2, memo[n - 2])

}

console.log(getNthFib(6))


console.log(getNthFib(21))