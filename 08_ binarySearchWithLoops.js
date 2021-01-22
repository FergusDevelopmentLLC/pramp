/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    array.forEach((elementToCheck, i) => {
      
      console.log('elementToCheck', elementToCheck)
      console.log('element', element)
      console.log('i', i)
      console.log(compare(elementToCheck, element) === 0)

      if(compare(elementToCheck, element) === 0) {
        return i
      }
        
        // if(elementToCheck === element) {
        //     return i
        // }
    })
    return -1;
};

//export default binarySearchWithLoops;

//console.log((binarySearchWithLoops([], 2)))
console.log(binarySearchWithLoops([1], 1))