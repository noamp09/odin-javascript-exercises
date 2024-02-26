const palindromes = function (str) {
    const result = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return result.split("").reverse().join("") == result;
};

// Do not edit below this line
module.exports = palindromes;