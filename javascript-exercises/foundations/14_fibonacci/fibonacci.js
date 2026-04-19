const fibonacci = function(num) {
    if (num < 0) return 'OOPS'

    if (num == 0) return 0;
    if (num == 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= num; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
