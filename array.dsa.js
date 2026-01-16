
//Largest element in an array

class Solution {
    largestElement(nums) {
   let max = nums[0]
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
       max = nums[i];
    }
}
return max

    }
}

//Second Largest Element in an Array without sorting

class Solution {
    secondLargestElement(nums) {
   let max = nums[0]
   let sec = -Infinity
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
       max = nums[i];
    }
    else if( nums[i] > sec && nums[i] < max) {
     sec = nums[i] 
    }

}
return sec === -Infinity ? -1 : sec
    }
}

//Check if the array is sorted

class Solution {
    isSorted(nums) {

        for(let i = 1; i < nums.length;i++) {
            if(nums[i] >= nums[i-1]) {
                continue;
            } else {
                return false;
            }
        }

        return true;
    }
}

//
var check = function(nums) {
    let cnt = 0
    for (let i = 0 ; i < nums.length; i++) {
     if (nums[i] > nums[(i + 1) % nums.length]){
       cnt++
        }
     }

     return cnt <= 1
};

//Remove duplicates from Sorted array

class Solution {
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

    let k = 0;

    for (let i = 1; i < nums.length; i++) {
       
        if (nums[i] !== nums[k]) {
            k++;              
            nums[k] = nums[i]; 
        }
    }
    return k + 1;
  }
} 

//Left Rotate an array by one place


k = k % nums.length;
     
    // for(let j=0;j<k;j++) {
    // let temp = nums[nums.length-1];
    //     for(let i=nums.length-2;i>=0;i--) {
    //     nums[i+1] = nums[i];
    // }
    // nums[0] = temp;
    // }


var rotate = function(nums, k) {

    k = k % nums.length;

    const reverse = (arr, start, end) => {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++
            end--
        }
        return arr
    }

    nums = reverse(nums, 0, nums.length-1)
    
    nums = reverse(nums, 0, k-1);

    nums = reverse(nums, k, nums.length-1);

    return nums;
};

//Left Rotate an array by one place

    class Solution {
    rotateArrayByOne(nums) {

    k = k % nums.length;
    
    for (let j = 0; j < k; j++) {
        
        let one = nums[0]; 
        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1];
        }
        nums[nums.length - 1] = one;
    }
    
   }
        
}

 //Move Zeros to end
 
 var moveZeroes = function(nums) {
     let currInd = 0;


  for(let i = 0; i < nums.length; i++){
    
    if (nums[i] !== 0) {
      [nums[currInd], nums[i]] = [nums[i], nums[currInd]];
      currInd++;
     }
   }
};

//Linear Search

class Solution {
    linearSearch(nums, target) {
        
        for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i; 
        }
    }
    return -1;
    }
}

//

