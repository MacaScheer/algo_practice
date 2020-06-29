// Knuth-Morris-Pratt Algorithm
// keeping track of repeated patterns
// optimal for doing gene mapping, or identifying genetic details

function knuthMorrisPratt(string, subString) {
    let pattern = buildPattern(subString)
    return doesMatch(string, sunString, pattern)
}

function buildPattern(string) {
    let pattern = []
    for (let i = 0; i < string.length; i++){
        pattern.push(-1)
    }
    let i = 1;
    let j = 0;
    while (i < string.length) {
        if (string[i] === string[j]) {
            pattern[i] = j
            i++;
            j++
        } else if (j > 0) {
            j = pattern[j - 1] + 1
        } else {
            i++
        }
    }
    return pattern
}

function doesMatch(string, subString, pattern) {
    let i = 0; j = 0;
    while (i + subString.length - j <= string.length) {
        if (string[i] === subString[j]) {
            if (j === subString.length - 1) {
                return true
            } 
                j++;
                i++;
        } else if (j > 0) {
            j = pattern[j - 1] + 1
        }
    }
}
console.log(knuthMorrisPratt("aefaefaefaedaefaedaefaefa", "aefaedaefaefa"), "should be true")
