/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let num = x.toString();
    let last_index = num.length - 1;
    for(i = 0; i < num.length - 1; i++) {
        if(num[i] != num[last_index]) {
            return false
        }
        else last_index--;
    }
    return true;
}
