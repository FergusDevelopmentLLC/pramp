// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// var productExceptSelf = function(nums) {
//   returnArr = []
  
//   nums.forEach((num, i) => {
//     console.log('num', num)
//   })

//   return returnArr
// };


// const productExceptSelf = function(nums) {
  
//   // The length of the input array
//   const length = nums.length

//   // The left and right arrays as described in the algorithm
//   const left = new Array(length)
//   const right = new Array(length)

//   // Final answer array to be returned
//   const answer = new Array(length)

//   // left[i] contains the product of all the elements to the left
//   // Note: for the element at index '0', there are no elements to the left,
//   // so left[0] would be 1
//   left[0] = 1
//   for (let i = 1; i < length; i++) {
//     // left[i - 1] already contains the product of elements to the left of 'i - 1'
//     // Simply multiplying it with nums[i - 1] would give the product of all
//     // elements to the left of index 'i'
//     left[i] = nums[i - 1] * left[i - 1];
//   }
//   console.log('left', left)

//   // right[i] contains the product of all the elements to the right
//   // Note: for the element at index 'length - 1', there are no elements to the right,
//   // so the R[length - 1] would be 1
//   right[length - 1] = 1;
//   for (let i = length - 2; i >= 0; i--) {

//     // R[i + 1] already contains the product of elements to the right of 'i + 1'
//     // Simply multiplying it with nums[i + 1] would give the product of all
//     // elements to the right of index 'i'
//     right[i] = nums[i + 1] * right[i + 1];
//   }
//   console.log('right', right)

//   for (let i = 0; i < length; i++) {
//     // For the first element, R[i] would be product except self
//     // For the last element of the array, product except self would be L[i]
//     // Else, multiple product of all elements to the left and to the right
//     answer[i] = left[i] * right[i];
//   }

//   return answer;
  
// };

// const productExceptSelf = (nums) =>  {
  
//   const answer = new Array(nums.length)

//   const sum = nums.reduce((acc, num) => {
//     acc = (acc * num)
//     return acc
//   },1)
  
//   nums.forEach((num, i) => {
//     answer[i] = sum / num
//   })

//   return answer 
// }

const productExceptSelf = (nums) =>  {
  
  //this is the array to return
  const answer = new Array(nums.length)
  let left = new Array(nums.length)
  let right = new Array(nums.length)

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  console.log('left', left)
  
  right[0] = 1
  for (let i = nums.length - 1; i > 0; i--) {
    right[i] = nums[i + 1] * left[i + 1];
  }
  console.log('right', right)

  // left[0] = 1
  // for (let i = 1; i < nums.length; i++) {
  //   // left[i - 1] already contains the product of elements to the left of 'i - 1'
  //   // Simply multiplying it with nums[i - 1] would give the product of all
  //   // elements to the left of index 'i'
  //   left[i] = nums[i - 1] * left[i - 1];
  // }
  // console.log('left', left)

  // let rightProduct = 1
  // for (let i = nums.length - 1; i > -1; i--) {
  //   console.log('nums[i]', nums[i])
  //   rightProduct = rightProduct * nums[i]
  // }

    // const sum = nums.reduce((acc, num) => {
    //   acc = (acc * num)
    //   return acc
    // },1)
    
    // nums.forEach((num, i) => {
    //   answer[i] = sum / num
    // })

    // return answer 
    return '-'
}


let arr = [4,5,1,8,2,10,6]
console.log(productExceptSelf(arr))