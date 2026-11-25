/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    str = s.split("")
    value = []
    for (let i = 0; i < indices.length; i++) {
        value[indices[i]] = str[i]
    }
    finalOutput = value.join("")
    return finalOutput
};