let swapAtIndexes = (targetArray, i, j) => {
  let temp = targetArray[i]
  targetArray[i] = targetArray[j]
  targetArray[j] = temp
}

let partition = (arr, low, high) => {
  let q = low, i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swapAtIndexes(arr, i, q);
      q++;
    }
  }
  swapAtIndexes(arr, i, q)
  return q
}

let quickSort = (arr, low, high) => {
  if (low < high) {
    let pivot = partition(arr, low, high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
  return arr
}
  
const unsortedArray = [7, 0, 3, 2, 1, 9, 2]
const lowIndex = 0
const highIndex = unsortedArray.length - 1

const sorted = quickSort(unsortedArray, lowIndex, highIndex)
console.log('sorted', sorted)