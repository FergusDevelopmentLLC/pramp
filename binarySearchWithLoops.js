/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
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

let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  
  const arraysToCheck = []
  arraysToCheck.push(array)

  while(arraysToCheck.length > 0) {

    const arr = arraysToCheck.shift()

    if(arr.length === 1 && compare(arr[0], element) == 0) return (array.indexOf(element))

    const middle = Math.floor(arr.length / 2)
    const halves = [arr.slice(0, middle), arr.slice(middle)]
    
    if(halves[0].indexOf(element) > -1) arraysToCheck = [halves[0]]
    if(halves[1].indexOf(element) > -1) arraysToCheck = [halves[1]]
    
  }

  return -1
}

//export default binarySearchWithLoops;
console.log(binarySearchWithLoops([], 2));
console.log(binarySearchWithLoops([1], 1));
console.log(binarySearchWithLoops([1], 2));
console.log(binarySearchWithLoops([1,2,3], 2));
console.log(binarySearchWithLoops([1,2,3], 3));
console.log(binarySearchWithLoops([1,2,3], 4));
console.log(binarySearchWithLoops([1,2,3,7], 3));
console.log(binarySearchWithLoops([1,2,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 6));


// deepStrictEqual(binarySearch([], 2), -1);
// deepStrictEqual(binarySearch([1], 1), 0);
// deepStrictEqual(binarySearch([1], 2), -1);
// deepStrictEqual(binarySearch([1,2,3], 2), 1);
// deepStrictEqual(binarySearch([1,2,3], 3), 2);
// deepStrictEqual(binarySearch([1,2,3], 4), -1);
// deepStrictEqual(binarySearch([1,2,3,7], 3), 2);