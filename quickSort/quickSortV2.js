const quickSort = (targetArray, low, high) => {

  const swap = (targetArray, i, pivot) => {
    let temp = targetArray[i]
    targetArray[i] = targetArray[pivot]
    targetArray[pivot] = temp
    console.log('targetArray', targetArray)
  }

  let pivot = low
  let i = low
  
  if (low < high) {
    
    for (i = low; i < high; i++) {
      if (targetArray[i] < targetArray[high]) {
        swap(targetArray, i, pivot)
        pivot++
      }
    }

    swap(targetArray, i, pivot)

    quickSort(targetArray, low, pivot - 1)
    quickSort(targetArray, pivot + 1, high)
  }
  
  return targetArray
}

//the array to sort
const unsortedArray = [7, 0, 2, 1, 9, 2]
console.log('unsortedArray', unsortedArray)

//set a lowIndex for the index of the first element
const lowIndex = 0

//set highIndex, for the index of the last element
const highIndex = unsortedArray.length - 1
//we have to set these as variables, because quicksort is a recursive function

//pass in the unsorted array, lowIndex and highIndex to quickSort function
const sorted = quickSort(unsortedArray, lowIndex, highIndex)

//display sorted array
console.log('sorted', sorted)