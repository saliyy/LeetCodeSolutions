/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x + ''
    return x.split("").reverse().join("") === x
};
