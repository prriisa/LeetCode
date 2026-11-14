/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let wealth = []
    for (account of accounts) {
        let total = 0
        for (money of account) {
            total += money
        }
        wealth.push(total)
    }
    let sortedWealth = wealth.sort((a, b) => a - b)

    return sortedWealth[sortedWealth.length - 1]
};