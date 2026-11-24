/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let num = String(n).split("")
    let sum = 0
    let product = 1
    for (let n of num) {
        sum += Number(n)
        product *= Number(n)

    }
    return product - sum

};