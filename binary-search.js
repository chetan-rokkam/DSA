//Binary Search to find X in sorted array

function  search(nums, target) {
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

//Implement Lower Bound


 function lowerBound(nums, x) {
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


//Implement Upper Bound


function upperBound(nums, x) {
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


//Search Insert Position



function searchInsert(nums, target) {
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

    
//Floor/Ceil in Sorted Array



function getFloorAndCeil(nums, x) {
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


 //Find the first or last occurrence of a given number in a sorted array



  function searchRange(nums, target) {
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
    
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); 



//Count occurrences of a number in a sorted array with duplicates


function countOccurrences(arr, target) {
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


//Search in Rotated Sorted Array I



function search(nums, k) {
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


//Find minimum in Rotated Sorted Array


  function  findMin(arr) {
       let low = 0;
    let high = arr.length - 1;
    let ans = Infinity;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[low] <= arr[high]) {
            ans = Math.min(ans, arr[low]);
            break;
        }
        if (arr[low] <= arr[mid]) {
            ans = Math.min(ans, arr[low]);
            low = mid + 1;
        } else {
            ans = Math.min(ans, arr[mid]);
            high = mid - 1;
        }
    }

    return ans;
    }



//Find out how many times has an array been rotated


   function findKRotation(nums) {
      let left = 0;
      let right = nums.length - 1;

      if (nums[left] <= nums[right]) return 0;

      while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (mid > 0 && nums[mid] < nums[mid - 1]) {
        return mid;
      }
      if (mid < nums.length - 1 && nums[mid] > nums[mid + 1]) {
        return mid + 1;
      }
      if (nums[mid] >= nums[left]) {
        left = mid + 1
      }
      else {
        right = mid - 1
      }
    }
    return 0;
}



//Single element in a Sorted Array


  function  singleNonDuplicate(nums) {
    
     let left = 0;
    let right = nums.length - 1;

    if (nums.length === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[right] !== nums[right - 1]) return nums[right];

    left = 1;
    right = nums.length - 2;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }

        if ((mid % 2 === 0 && nums[mid] === nums[mid + 1]) || 
            (mid % 2 === 1 && nums[mid] === nums[mid - 1])) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1; 

    }
5

//Find peak element


   function findPeakElement(arr) {
     let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return left;
    }





