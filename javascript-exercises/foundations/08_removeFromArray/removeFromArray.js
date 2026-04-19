const removeFromArray = function(array, ...vals) {
    // vals = [1, 2, 3]
    let newArray = [];

    array.forEach((item) => {
        if (!vals.includes(item)) newArray.push(item);
    })
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

