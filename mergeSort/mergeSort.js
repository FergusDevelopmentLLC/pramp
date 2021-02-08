const mergeSort = (left, right) => {
  
  const sortedArray = []
  
  while (left.length && right.length) {//this only happens while there are elements in both arrays

    //at each array index, push the smaller number to sortedArray
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())  
    } else {
      sortedArray.push(right.shift()) 
    }
  }
  
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...sortedArray, ...left, ...right ]
}

let left = [1, 2, 3, 4, 7, 6]
let right = [0, 2, 2, 3]
console.log(mergeSort(left, right))