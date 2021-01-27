function shortestCellPath(grid, sr, sc, tr, tc) {
  
  /**
  @param grid: integer[][]
  @param sr: integer
  @param sc: integer
  @param tr: integer
  @param tc: integer
  @return: integer
  */

  const validRoutes = (startSquareArray, grid) => {

    let connectedCells = [
      [startSquareArray[0] - 1, startSquareArray[1]],
      [startSquareArray[0], startSquareArray[1] - 1],
      [startSquareArray[0] + 1, startSquareArray[1]],
      [startSquareArray[0], startSquareArray[1] + 1]
    ]

    return connectedCells.filter((cell) => {
      return cell[0] >= 0 && cell[0] < grid.length && cell[1] >= 0 && cell[1] < grid[0].length //filter out cells outside the grid
    }).filter((cell) => {
      return (grid[cell[0]][cell[1]] !== 0)//and filter out where the cell value is 0, can't move there.
    })
  }

  const buildPath = (traversalTree, to) => {

    // console.log('traversalTree', traversalTree)
    // console.log('to', to)

    let path = [to]
    // console.log('path', path)

    let parent = traversalTree[to]
    // console.log('parent', parent)

    while (parent) {
      path.push(parent)
      parent = traversalTree[parent]
    }
    
    return path.reverse()
  }

  const bfs = (from, to) => {

    let traversalTree = {}
    let visited = new Set
    let queue = []
    queue.push(from)

    while (queue.length) {

      let squareToTest = queue.shift()//take the first one off of queue array
      
      visited.add(squareToTest.toString())//add this square to visited array, this keeps track of squares visited
      //console.log('visited', visited)
      //visited {"0,0"}
      //visited Set(2) {"0,0", "1,0"}
      //visited Set(3) {"0,0", "1,0", "0,1"}
      
      if (squareToTest.toString() === to.toString()) return buildPath(traversalTree, to)//if the squareToTest === to square, return the build path

      for (child of validRoutes(squareToTest, grid)) {
        if (!visited.has(child.toString())){
          traversalTree[child] = squareToTest
          
          // console.log('typeof(traversalTree])', typeof(traversalTree))
          // console.log('typeof(queue])', typeof(queue))
          // console.log('traversalTree', traversalTree)

          queue.push(child)
        }
      }
    }
  }

  let path = bfs([sr, sc], [tr, tc])

  return path ? path.length - 1 : -1
  
}

let grid = [
  [1, 1, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1]
]

console.log(shortestCellPath(grid, 0, 0, 2, 0))

// https://www.pramp.com/challenge/Y56aZmaj9Ptmd9wV9xvL
// https://stackoverflow.com/questions/55239386/finding-shortest-path-in-two-dimensional-array-javascript
// https://tutorialspoint.dev/data-structure/matrix-archives/shortest-distance-two-cells-matrix-grid
// https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/
// https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/