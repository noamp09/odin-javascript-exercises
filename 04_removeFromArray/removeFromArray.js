const removeFromArray = function(input, ...args) {
    new_array = [];
    input.forEach(element => {
        if (!args.includes(element))
        {
            new_array.push(element);
        }
    });
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
