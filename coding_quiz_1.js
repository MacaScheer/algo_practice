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



"""
A masonry layout arranges images into columns of fixed width and preserves image aspect ratio.

Design a function which takes in an array of images, a num_columns, and a screen_width and provides a masonry layout.
The function needs to return an array where each item(column) is an array of Images e.g. [[column0], [column1], ...]
https://makersplace.com/discover/
"""

class Image {
    constructor({ width, height }) {
        this.width = width;
        this.height = height;
    }

}
// images = [Image(1000, 1000), Image(800, 400), Image(400, 800)]
// images = [Image(400, 1000), Image(400, 100), Image(400, 1000), Image(400, 100), Image(400, 1000), Image(400, 100), Image(400, 1000)]                                                                                           
// num_columns = 2                                                                                           
// [{width: 909, height: 8989 }, {}]
function masonry_layout(images, num_columns = 2, screen_width = 800) {

    let retArr = [];
    let col_heights = []
    let colWidth = Math.floor(screen_width / num_columns)
    for (let i = 0; i < num_columns; i++) {
        retArr.push([])
        col_heights.push([])
    }
    for (let j = 0; j < images.length; j++) {
        let image = images[j]
        let ratio = image.width / colWidth // 400 / 300
        image.width /= ratio
        image.height /= ratio

        col_heights[j % num_columns] += image.height
        let ideal_Col;
        for ()
            // Math.min(col_heights)

            retArr[j % num_columns].push(image)

    }
    return retArr
}

