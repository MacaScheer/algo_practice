// Write a method that takes a string as input.It should return true
// if the input is a valid IPv4 address
// (ie.anything between 0.0.0.0 and 255.255.255.255 is valid).

const isValidIp = function (address) {
    let numsArr = address.split(".")
    if (numsArr.length !== 4) return false;
    for (let i = 0; i < numsArr.length; i++){
        let num = numsArr[i];
        if (num < 0 || num > 255) return false;
    }
    return true
};
