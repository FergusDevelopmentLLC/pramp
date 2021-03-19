const quickSort = (targetArray, lowIndex, highIndex) => {

  const swap = (targetArray, leftIndex, rightIndex) => {
    let temp = targetArray[leftIndex]
    targetArray[leftIndex] = targetArray[rightIndex]
    targetArray[rightIndex] = temp
  }

  let pivot = targetArray[Math.floor((highIndex + lowIndex) / 2)]//middle element
  let leftPointer = lowIndex
  let rightPointer = highIndex

  while (leftPointer <= rightPointer) {
    
    while (targetArray[leftPointer] < pivot) {
      leftPointer++
    }
    
    while (targetArray[rightPointer] > pivot) {
      rightPointer--
    }

    if (leftPointer <= rightPointer) {
      swap(targetArray, leftPointer, rightPointer) //swap two elements
      leftPointer++
      rightPointer--
    }
  
  }

  //more elements on the left side of the pivot
  if (lowIndex < leftPointer - 1) { 
    quickSort(targetArray, lowIndex, leftPointer - 1)
  }
    
  if (leftPointer < highIndex) { //more elements on the right side of the pivot
    quickSort(targetArray, leftPointer, highIndex)
  }

  return targetArray
}

//the array to sort
const unsortedArray = [7, 0, 2, 1, 9, 2]
//const unsortedArray = [0, 3, 1, 2, 4, 5]
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