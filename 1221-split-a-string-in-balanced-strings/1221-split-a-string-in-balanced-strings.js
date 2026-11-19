/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let balance = 0
    let count = 0
    str = s.split("")
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "R") {
            balance++
        }
        if (str[i] === "L") {
            balance--
        }
        if (balance === 0) {
            count++
        }
    }
    return count
};