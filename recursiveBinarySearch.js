let highIndex = 0
let lowIndex = 0

const recursiveBinarySearch = (arr, n, lowIndex, highIndex) => {
  
  console.log('arr', arr)
  console.log('n', n)

  let mid = Math.floor(lowIndex + highIndex / 2)

  console.log('mid', mid)

  // base case
  if (arr.length === 0 || (arr.length === 1 && arr[0] != n)) return -1 //it's not in there

  if (n === arr[mid]) {
    return mid //match
  } else if (n < arr[mid]) {
    arr = arr.splice(0, mid - 1)
    highIndex =
  } else if (n > arr[mid]) {
    arr = arr.splice(mid + 1, arr.length - mid)
  }
  
}
//console.log(recursiveBinarySearch([1,2,3,6,7,7,7,7,7,9],9))
let arrayToCheck = [1,2,3,6,7,7,9]
console.log(arrayToCheck.indexOf(9))
console.log(recursiveBinarySearch(arrayToCheck,9))
