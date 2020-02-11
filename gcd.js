function generalizedGCD(num, arr)
{
    let gcd = 1;
    let curr = 1
    // let pass = true;
    console.log(Math.min(arr))
    while(curr <= Math.min(arr)){
        if (passAllNums(arr, curr) === true){
            gcd = curr
        }
            curr += 1
        // } else {
        //     pass = false
        // }
    }
    return gcd
}

function passAllNums(arr, div){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % div !== 0) return false
    }
    return true
}

console.log(generalizedGCD(5, [2,4,6,8,10]))