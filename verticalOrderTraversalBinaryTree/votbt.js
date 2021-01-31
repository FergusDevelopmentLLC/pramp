const getCoordinatesFor = (row) => {
  
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
  
    
  returnArray = []
  for (let i = 0; i <= depth; i++) {
    returnArray = [...returnArray, ...getCoordinatesFor(i)]
  }
  return returnArray

}

const verticalTraversal = (root) => {
  
  let treeNodeLength = 0
  let rows = 0
  let slots = []
  
  while(treeNodeLength < root.length) {
    let coords = getCoordsForTreeWithDepth(rows)
    treeNodeLength =+ coords.length
    slots = coords
    rows++
  }
    
  let finalArray = root.map((item, i) => {
    return  [root[i], slots[i]]
  })

  let maxColumn = 0
  let minColumn = 0

  for (let i = 0; i < finalArray.length; i++) {
    if((finalArray[i][1])[1] > maxColumn) {
      maxColumn = finalArray[i][1][1]
    }

    if((finalArray[i][1])[1] < minColumn) {
      minColumn = finalArray[i][1][1]
    }
  }
  
  let final = []
  for (let i = minColumn; i <= maxColumn; i++) {
    let columnArray = []
    for (let j = 0; j < finalArray.length; j++) {
      if(finalArray[j][1][1] === i) {
        columnArray.push(finalArray[j][0])
      }
    }
    final.push(columnArray)
  }
  
  let finalFinal = []
  for (let i = 0; i < final.length; i++) {
    let filtered = final[i].filter((item) => {
      return item != null
    })
    if(filtered.length > 0) {
      finalFinal.push(filtered)
    }
  }
  
  //return [[9],[3,15],[20],[7]]
  console.log(finalFinal)
    
  return finalFinal
}


console.log(verticalTraversal([1,2,3,4,5,6,7]))