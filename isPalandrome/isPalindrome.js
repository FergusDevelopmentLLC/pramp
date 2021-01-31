// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false
 
// Constraints:
// -2^31 <= x <= 2^31 - 1

var isPalindrome = (x) => {
  
  const forward = x.toString().split('')
  const backward = forward.slice(0).reverse()
  
  return forward.reduce((acc, item, i) => {
    if(backward[i] !== item) {
      acc = false
    }
    return acc
  }, true)

}

let x = 121
x = 123
x = 10
x = -101
x = 101
console.log(isPalindrome(x))