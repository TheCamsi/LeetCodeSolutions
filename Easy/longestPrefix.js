/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the array is empty, return an empty string
    
    let prefix = strs[0]; // Initialize prefix with the first string
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Check if the prefix is a prefix of the current string
            prefix = prefix.substring(0, prefix.length - 1); // Remove the last character from the prefix
            if (prefix === "") return ""; // If the prefix becomes empty, there is no common prefix
        }
    }
    
    return prefix; // Return the longest common prefix
};