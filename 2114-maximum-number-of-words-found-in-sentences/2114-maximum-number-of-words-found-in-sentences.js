/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let count = []
    for (sentence of sentences) {
        splitted = sentence.split(" ")
        let c = 0
        for (word of splitted) {
            c++
        }
        count.push(c)
    }
    count.sort((a, b) => a - b)

    return count[count.length - 1]
};