// Given a list of positive integers nums and an int target, return indices of the two numbers such that they add up to a target - 30.

// Conditions:

// You will pick exactly 2 numbers.
// You cannot pick the same element twice.
// If you have muliple pairs, select the pair with the largest number.
// Example 1:

// Input: nums = [1, 10, 25, 35, 60], target = 90
// Output: [2, 3]
// Explanation:
// nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
// Example 2:

// Input: nums = [20, 50, 40, 25, 30, 10], target = 90
// Output: [1, 5]
// Explanation:
// nums[0] + nums[2] = 20 + 40 = 60 = 90 - 30
// nums[1] + nums[5] = 50 + 10 = 60 = 90 - 30
// You should return the pair with the largest number.

// function pairwise(arr){
//   for(var i=0; i < arr.length - 1; i++){
//     //func(arr[i], arr[i + 1])
//     console.log(arr[i], arr[i + 1])
//   }
// }

// arr = [1, 2, 3, 4, 8, 9];
// pairwise(arr)
//https://leetcode.com/discuss/interview-question/356960


function twoSum(nums, target_num) {

  target_num = target_num - 30

  let myMap = {}
  
  for (let i=0; i<nums.length; i++){
    if (myMap[nums[i]]){
      myMap[nums[i]].push(i)
    } else {
      myMap[nums[i]] = [i]
    }
  }
  console.log('myMap', myMap)

  let target
  let max = 0
  let returnArrayByValue = new Array(2)

  for(let i=0; i<nums.length; i++){

    target = target_num - nums[i]//30-20=10
    
    if (myMap[target]) {

      const indexes = myMap[target].filter(j => {
        return j > i
      })

      if (indexes.length > 0){
        
        let maxOfSet = Math.max(nums[i], target)

        if (maxOfSet > max) {
          
          // console.log('maxOfSet', maxOfSet)
          // console.log('[nums[i]', nums[i])
          // console.log('target', target)

          returnArrayByValue[0] = nums[i]
          returnArrayByValue[1] = target
          max = maxOfSet
        }

      }
    }                           
  }

  returnArrayByValue[0] = nums.indexOf(returnArrayByValue[0])
  returnArrayByValue[1] = nums.indexOf(returnArrayByValue[1])

  console.log('returnArrayByValue', returnArrayByValue)
}

//console.log(twoSum([2,4,6,7,3,2,1,9,4,1,6,4],10))
twoSum([1, 10, 25, 35, 60], 90)

// twoSum([20, 28, 3, 50, 40, 25, 30, 10, 2, 5, 6, 1], 60)

