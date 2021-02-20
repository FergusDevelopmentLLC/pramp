//Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.
//It is one of the more intuitive sorting methods as its algorithm mirrors how our brain generally thinks about sorting - by comparing.

const bubbleSort = (sortMe) => {
  sortMe.forEach((item, pass) => {
    console.log('pass:', pass)
    sortMe.forEach((item, j) => {
      console.log('sortMe', sortMe)
      if(item > sortMe[j + 1]) {
        const temp = sortMe[j]
        sortMe[j] = sortMe[j + 1]
        sortMe[j + 1] = temp
      }
    })
    console.log('------')
  })
  return sortMe
}
console.log(bubbleSort([7, 3, 4, 2, 1]))

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
// https://visualgo.net/en/sorting