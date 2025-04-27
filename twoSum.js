let sums = [4, 2, 5, 55, 33];
let target = 6;
let len = sums.length;

function twoSum(sums, target) {
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (sums[i] + sums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(sums, target));
