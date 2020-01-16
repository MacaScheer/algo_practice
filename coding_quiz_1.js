// given a block of memory with block ids 0 - n, where each block has 64Kb of memory,
// create a function that will read from a specific portion memory and return an array of bytes.


// -------------------------------------------------------------------------
// |        |        |        |        |        |        |        |        |
//     -------------------------------------------------------------------------
//         0        1        2                                            n

// BLOCKSIZE = 64KB

// func readBlock(int blockId);
// func writeBlock(int blockId, data);

// ===========================================================================

// // start = 22
// // end = 129000
// byte[]




function readFile(start, end) {


    let startN = Math.floor(start / 64000)
    let endN = Math.floor(end / 64000)
    let byteArr = []
    for (let i = startN; i <= endN; i++) {
        byteArr.push(readBlock(i))
    }
    let actualEnd = actualStart + (end - start)
    let actualStart = start - (startN * 64000)
    return byteArr.slice(actualStart)
    // return byteArr.slice(startN * 64000, endN)
}

