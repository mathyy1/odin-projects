const sumAll = function(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return 'ERROR';
    if (n1 < 0 || n2 < 0) return 'ERROR';

    let sum = 0;
    const low = Math.min(n1, n2)
    const high = Math.max(n1, n2)

    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
