let countingSort = (arr, min, max) => {
  let i = min,
      j = 0,
      len = arr.length,
      count = [];
  for (i; i <= max; i++) {
      count[i] = 0;
  }
  for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
      while (count[i] > 0) {
          arr[j] = i;
          j++;
          count[i]--;
      }
  }
  return arr;
};

let array = [7, 0, 3, 2, 1, 9, 2]
console.log(countingSort(array, 0, 9))