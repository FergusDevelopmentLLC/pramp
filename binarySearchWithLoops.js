/* Typical comparison function */
// let defaultCompare = (a, b) =>
//   a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
// let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  
//   return array.reduce((acc, el, i) => {
//     if(compare(array[i],element) == 0) acc = i
//     return acc
//   },-1)
  
// }

// let binarySearchWithLoops = (array, element, compare = defaultCompare) => {

//   let arraysToCheck = []
//   arraysToCheck.push(array)

//   while(arraysToCheck.length > 0) {

//     const arr = arraysToCheck.shift()

//     if(arr.length === 1 && compare(arr[0], element) == 0) return (array.indexOf(element))

//     const middle = Math.floor(arr.length / 2)
//     console.log('middle', middle)
//     const halves = [arr.slice(0, middle), arr.slice(middle)]
    
//     if(halves[0].indexOf(element) > -1) arraysToCheck = [halves[0]]
//     if(halves[1].indexOf(element) > -1) arraysToCheck = [halves[1]]
//     // console.log('halves[0]', halves[0])
//     // console.log('halves[1]', halves[1])
//   }

//   return -1
// }

// export default binarySearchWithLoops;
// console.log(binarySearchWithLoops([], 2));
// console.log(binarySearchWithLoops([1], 1));
// console.log(binarySearchWithLoops([1], 2));
// console.log(binarySearchWithLoops([1,2,3], 2));
// console.log(binarySearchWithLoops([1,2,3], 3));
// console.log(binarySearchWithLoops([1,2,3], 4));
// console.log(binarySearchWithLoops([1,2,3,7], 3));
//console.log(binarySearchWithLoops([1,2,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 6));


// deepStrictEqual(binarySearch([], 2), -1);
// deepStrictEqual(binarySearch([1], 1), 0);
// deepStrictEqual(binarySearch([1], 2), -1);
// deepStrictEqual(binarySearch([1,2,3], 2), 1);
// deepStrictEqual(binarySearch([1,2,3], 3), 2);
// deepStrictEqual(binarySearch([1,2,3], 4), -1);
// deepStrictEqual(binarySearch([1,2,3,7], 3), 2);


// let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
//   if (left > right) { return -1; }
//   const middle = Math.floor((right + left) / 2);
//   const comparison = compare(element, array[middle]);
  
//   if (comparison === 0) { return middle; }
  
//   const newBounds = comparison === -1
//       ? [left, middle - 1]
//       : [middle + 1, right];
  
//   return binarySearchWithRecursion(array, element, compare, ...newBounds);
// };

// let binarySearchWithRecursion = (array, element, compare = defaultCompare) => {
  
//   const middle = Math.floor(array.length / 2);
//   const comparison = compare(element, array[middle]);
  
//   if (comparison === 0) { return middle; }
  
//   if(comparison === -1) {
//     array.splice(middle + 1, array.length - 1)
//   }
//   else {
//     array.splice(0, middle - 1)
//   }

//   console.log('array', array)

//   return binarySearchWithRecursion(array, element, compare);

// };

const recursiveBinarySearch = (arr, n) => {
  
  let mid = Math.floor(arr.length / 2)

  // base case
  if (arr.length === 0 || (arr.length === 1 && arr[0] != n)) return -1 //it's not in there

  if (n === arr[mid]) {
    return mid //match
  } else if (n < arr[mid]) {
    arr = arr.splice(0, mid - 1)
  } else if (n > arr[mid]) {
    arr = arr.splice(mid + 1, arr.length - mid)
  }
  return recursiveBinarySearch(n, arr)
}

console.log(recursiveBinarySearch([1,2,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],6))
//https://www.youtube.com/watch?v=tfq_T2cM_fc
//https://646634.medium.com/how-to-write-a-recursive-binary-search-algorithm-in-javascript-ecadb5e51022

//console.log(binarySearchWithRecursion([1,2,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 6));

//https://stackoverflow.com/questions/6872630/split-an-array-into-two-based-on-a-index-in-javascript