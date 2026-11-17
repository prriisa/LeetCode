/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let X = 0
    for (operation of operations) {
        (operation === "--X") ? --X : (operation === "X--") ? X-- : (operation === "X++") ? X++ : (operation === "++X") ? ++X : null
    }
    return X
};