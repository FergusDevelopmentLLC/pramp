let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
      }
  }
  return arr;
}

let array = [7, 0, 3, 2, 1, 9, 2]
console.log(selectionSort(array))