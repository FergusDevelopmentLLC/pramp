// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).
// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

const productExceptSelf = (nums) =>  {
  
  let left = new Array(nums.length)
  let right = new Array(nums.length)

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  //console.log('left', left)
  
  right[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    console.log(nums[i + 1])
    right[i] = nums[i + 1] * right[i + 1];
  }
  //console.log('right', right)

  const answer = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i]
  }
  //console.log('answer', answer)
  
  return answer

}

const productExceptSelfWithDivision = (nums) =>  {
  
  const answer = new Array(nums.length)

  const sum = nums.reduce((acc, num) => {
    acc = (acc * num)
    return acc
  },1)
  
  nums.forEach((num, i) => {
    answer[i] = sum / num
  })

  return answer 
}


//let arr = [1,2,3,4]
arr = [4, 5, 1, 8, 2, 10, 6]
console.log(productExceptSelf(arr))
console.log(productExceptSelfWithDivision(arr))