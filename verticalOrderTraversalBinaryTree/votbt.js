getCoordinatesFor = (row) => {

  if(row === 0 ) {
    return [[0,0]]
  }

  let index = 0
  if(row % 2 > 0) {
    index = 1
  }

  let buildArray = []
  while(index <= row) {
    buildArray.push(index)
    if(index < row && index > 0) {
      buildArray.push(index)
    }
    index = index + 2
  }

  let prefix = []
  for(let i = buildArray.length - 1; i >= 0; i--) {
    let valueToPush = buildArray[i]
    if(buildArray[i] > 0) {
      valueToPush = buildArray[i] * -1
    }
    prefix.push(valueToPush)
  }

  let combined = [...prefix, ...buildArray]

  let final = combined.map((item) => {
    return [row, item]
  })

  return final

}

const getCoordsForTreeWithDepth = (depth) => {
  
  //return getCoordinatesFor(depth)

  returnArray = []
  for (let i = 0; i <= depth; i++) {
    returnArray = [...returnArray, ...getCoordinatesFor(i)]
  }
  return returnArray

}

console.log('getCoordsForTreeWithDepth', getCoordsForTreeWithDepth(2))

root = [1,2,3,4,5,6,7]

let treeNodeLength = 0
let rows = 0
let slots = []
while(treeNodeLength < root.length) {
  let coords = getCoordsForTreeWithDepth(rows)
  treeNodeLength =+ coords.length
  slots = [...slots, ...coords]
  rows++
}
console.log('treeNodeLength', treeNodeLength)
console.log('slots', slots)

// [
//   [1, [ 0, 0 ]],
//   [2, [ 1, -1 ]],
//   [3, [ 1, 1 ]],
//   [4, [ 0, 0 ]],
//   [5, [ 0, 0 ]],
//   [6, [ 0, 0 ]],
//   [7, [ 0, 0 ]],
// ]

// [
//   ,  [ 0, 0 ],
//   [ 1, -1 ], [ 1, 1 ],
//   [ 0, 0 ],  [ 1, -1 ],
//   [ 1, 1 ],  [ 2, -2 ],
//   [ 2, 0 ],  [ 2, 0 ],
//   [ 2, 2 ]
// ]


// deepEnoughTree = [...deepEnoughTree, ...coords]
//let deepEnoughTree = []
// console.log('deepEnoughTree', deepEnoughTree)

//let input = [3,9,20,null,null,15,7]
//[[4],[2],[1,5,6],[3],[7]]

