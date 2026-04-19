const nums = [14, 3, 87, 22, 56, 91, 10];

const result = nums.reduce((max, num) => num > max ? num : max);