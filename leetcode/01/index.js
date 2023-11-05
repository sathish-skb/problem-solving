function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }    
        numMap.set(num, i);
    }
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 21;
const result = twoSum(nums, target);
console.log(result);



