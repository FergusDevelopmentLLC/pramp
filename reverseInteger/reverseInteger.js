//Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

var reverse = function(x) {
  
  let isNegative = x < 0
  
  let abs = Math.abs(x)
  let array = abs.toString().split('')
  
  let newArray = []
  for (let i = array.length -1; i >= 0; i--) {
    newArray.push(array[i])
  }

  let returnValue = 0
  
  if(isNegative) {
    returnValue = parseInt(newArray.join('')) * -1
  }
  else {
    returnValue = parseInt(newArray.join(''))
  }

  let min = Math.pow(-2, 31)
  let max = Math.pow(2, 31) -1 
  
  if(returnValue >= min && returnValue <= max) {
    return returnValue
  }
  else {
    return 0
  }

  return returnValue
  
}

let input = -123
// input = 123
// input = 120
// input = 0
console.log(reverse(input))