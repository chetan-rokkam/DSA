function peakElement(nums) {

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    }
    else {
      right = mid;
    }
  }
  return left;
}
const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(peakElement(arr));