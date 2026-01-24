//Binary Search to find X in sorted array

class Solution {
    search(nums, target) {
       let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}
}

//Implement Lower Bound

class Solution {
    lowerBound(nums, x) {
      let left = 0;
      let right = nums.length - 1;
      let ans = nums.length

      while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] >= x) {
          ans = mid;
          right = mid - 1
        }
        else{
        left = mid + 1;
        }
      }
      return ans
    }
}

//Implement Upper Bound

class Solution {
    upperBound(nums, x) {
      let left = 0;
    let right = nums.length - 1;
    let ans = nums.length; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > x) {
            ans = mid;         
            right = mid - 1;   
        } else {
            left = mid + 1;
        }
    }

    return ans;

    }
}

//Search Insert Position


class Solution {
    searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return left;
}
}
    
//Floor/Ceil in Sorted Array



class Solution{
    getFloorAndCeil(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    
    let floor = -1;
    let ceil = -1;  

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === x) {
            return `${nums[mid]} ${nums[mid]}`;
        }

        if (nums[mid] < x) {
            floor = nums[mid];
            low = mid + 1;
        } else {
            ceil = nums[mid];
            high = mid - 1;
        }
    }

    return `${floor} ${ceil}`;
}

}

 //Find the first or last occurrence of a given number in a sorted array


 class Solution {
    searchRange(nums, target) {
    const findBound = (isFirst) => {
        let low = 0;
        let high = nums.length - 1;
        let bound = -1;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    high = mid - 1;
                } 
                else {
                    low = mid + 1;
                }
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return bound;
    };

    const first = findBound(true);
    if (first === -1) return [-1, -1];
    
    const last = findBound(false);
    return [first, last];
}


     }
    
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); 



//Count occurrences of a number in a sorted array with duplicates


class Solution {
    countOccurrences(arr, target) {
        // Your code goes here
    const findBound = (isFirst) => {
        let low = 0;
        let high = arr.length - 1;
        let bound = -1;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            if (arr[mid] === target) {
                bound = mid;
                if (isFirst) high = mid - 1;
                else low = mid + 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return bound;
    };

    const firstIndex = findBound(true);
    
    if (firstIndex === -1) return 0;
    
    const lastIndex = findBound(false);
    return (lastIndex - firstIndex) + 1;
}
}

//Search in Rotated Sorted Array I


class Solution {
    search(nums, k) {
        let left = 0;
        let right = nums.length - 1;
         
         while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === k) return mid;

            if (nums[left] <= nums[mid]) {

                if (k >= nums[left] && k < nums[mid]) {
                    right = mid - 1;
                }
                else{
                    left = mid + 1;
                }
            }
            else {
                if (k > nums[mid] && k <= nums[right]) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
         }
         return - 1
    }
}



//Search in Rotated Sorted Array II



function search (nums, k) {
  let left = 0;
  let right = nums.lenght - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === k) return true;

    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    }
      
      if (nums[left] <= nums[mid]){

      if (k >= nums[left] && k < nums[mid]) {
        right = mid - 1;
      }
      else{
        left = mid + 1
      }
    
      }
    else {
      if (k > nums[mid] && k <= nums[right]) {
        left = mid + 1
      }
      else {
        right = mid - 1
      }
    }    
  }
  return false;
}

const numbers = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];

console.log(search(numbers, 3));
console.log(search(numbers, 10))


