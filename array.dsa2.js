//Find missing numbers in an array

class Solution {
    missingNumber(nums) {
    const n = nums.length;
    
    const expectedSum = (n * (n + 1)) / 2;
    
    const actualSum = nums.reduce((acc, current) => acc + current, 0);
    
    return expectedSum - actualSum;
    }
}

//Maximum Consecutive Ones

class Solution {
    findMaxConsecutiveOnes(nums) {
      let maxCount = 0;
    let currentCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }
    
    return maxCount;
    }
}

//Find the number that appears once, and other numbers twice.

class Solution {
    singleNumber(nums) {
        const frequencyMap = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    for (const [key, count] of frequencyMap) {
        if (count === 1) {
            return key;
        }
    }
}

}


//Longest subarray with sum K


function longestSubarrayWithSumK(nums, k) {
  const sumIndexMap = new Map();
  let runningSum = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];

    if (runningSum === k) {
      maxLength = i + 1;
    }
    const remaining = runningSum - k;
    if (sumIndexMap.has(remaining)) {
      maxLength = Math.max(maxLength, i - sumIndexMap.get(remaining));
    }

    if (!sumIndexMap.has(runningSum)) {
      sumIndexMap.set(runningSum, i);
    }
  }

  return maxLength;
}


console.log(longestSubarrayWithSumK([10, 5, 2, 7, 1, 9], 15)); 
console.log(longestSubarrayWithSumK([-3, 2, 1], 6));          
