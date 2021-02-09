# pramp

  

  
  // console.log(bfs(beginWord, endWord, wordList))


  // console.log(validNextWords(beginWord, wordList))



//     function shortestCellPath(grid, sr, sc, tr, tc) {
  
//       /**
//       @param grid: integer[][]
//       @param sr: integer
//       @param sc: integer
//       @param tr: integer
//       @param tc: integer
//       @return: integer
//       */

//       // const validNextWords = (currentWord, wordArray) => {

//       //   let connectedCells = [
//       //     [startSquareArray[0] - 1, startSquareArray[1]],
//       //     [startSquareArray[0], startSquareArray[1] - 1],
//       //     [startSquareArray[0] + 1, startSquareArray[1]],
//       //     [startSquareArray[0], startSquareArray[1] + 1]
//       //   ]

//       //   return connectedCells.filter((cell) => {
//       //     return cell[0] >= 0 && cell[0] < grid.length && cell[1] >= 0 && cell[1] < grid[0].length //filter out cells outside the grid
//       //   }).filter((cell) => {
//       //     return (grid[cell[0]][cell[1]] !== 0)//and filter out where the cell value is 0, can't move there.
//       //   })
//       // }

       
//       const buildPath = (traversalTree, to) => {

//         // console.log('traversalTree', traversalTree)
//         // console.log('to', to)

//         let path = [to]
//         // console.log('path', path)

//         let parent = traversalTree[to]
//         // console.log('parent', parent)

//         while (parent) {
//           path.push(parent)
//           parent = traversalTree[parent]
//         }
        
//         return path.reverse()
//       }

//       const bfs = (from, to) => {

//         let traversalTree = {}
//         let visited = new Set
//         let queue = []
//         queue.push(from)

//         while (queue.length) {

//           let squareToTest = queue.shift()//take the first one off of queue array
          
//           visited.add(squareToTest.toString())//add this square to visited array, this keeps track of squares visited
//           //console.log('visited', visited)
//           //visited {"0,0"}
//           //visited Set(2) {"0,0", "1,0"}
//           //visited Set(3) {"0,0", "1,0", "0,1"}
          
//           if (squareToTest.toString() === to.toString()) return buildPath(traversalTree, to)//if the squareToTest === to square, return the build path

//           for (child of validRoutes(squareToTest, grid)) {
//             if (!visited.has(child.toString())){
//               traversalTree[child] = squareToTest
              
//               // console.log('typeof(traversalTree])', typeof(traversalTree))
//               // console.log('typeof(queue])', typeof(queue))
//               // console.log('traversalTree', traversalTree)

//               queue.push(child)
//             }
//           }
//         }
//       }

      
//       let path = bfs([sr, sc], [tr, tc])

//       return path ? path.length - 1 : -1
      
//     }










// function ladderLength2(start, end, dict) {
//     if (dict.length == 0)
//         return 0;
 
//     dict.push(end);
 
//     var wordQueue = [];
//     var distanceQueue = [];
 
//     wordQueue.push(start);
//     distanceQueue.push(1);
 
//     //track the shortest path
//     var result = 9007199254740992;
//     while (wordQueue.length != 0) {
//         var currWord = wordQueue.pop();
//         var currDistance = distanceQueue.pop();
 
//         if (currWord == end) {
//             result = Math.min(result, currDistance);
//         }
 
//         for (var i = 0; i < currWord.length; i++) {
//             var currCharArr = currWord.split('');
//             for (var c = 'a'; c <= 'z'; c = nextChar(c)) {
//                 currCharArr[i] = c;
//                 var newWord = currCharArr.join('');
//                 if (dict.indexOf(newWord) != -1) {
//                     wordQueue.push(newWord);
//                     distanceQueue.push(currDistance + 1);
//                     var index = dict.indexOf(newWord);
//                     if (index > -1) {
//                         dict.splice(index, 1);
//                     }
//                 }
//             }
//         }
//     }
 
//     if (result < 9007199254740992)
//         return result;
//     else
//         return 0;
// }

// function nextChar(c) {
//     return String.fromCharCode(c.charCodeAt(0) + 1);
// }

// let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]

// console.log(ladderLength2(beginWord, endWord, wordList))


// const validRoutes = (startSquareArray, grid) => {

//   let connectedCells = [
//     [startSquareArray[0] - 1, startSquareArray[1]],
//     [startSquareArray[0], startSquareArray[1] - 1],
//     [startSquareArray[0] + 1, startSquareArray[1]],
//     [startSquareArray[0], startSquareArray[1] + 1]
//   ]

//   return connectedCells.filter((cell) => {
//     return cell[0] >= 0 && cell[0] < grid.length && cell[1] >= 0 && cell[1] < grid[0].length //filter out cells outside the grid
//   }).filter((cell) => {
//     return (grid[cell[0]][cell[1]] !== 0)//and filter out where the cell value is 0, can't move there.
//   })
// }


//   // const isNextWordValid = (word, nextWord) => {
    
//   //   if(!word) return false
//   //   if(!nextWord) return false
    
//   //   let matches = []
//   //   let wordArray = word.split('')
    
//   //   nextWord.split('').forEach((element, i) => {
//   //     if(element === wordArray[i]) {
//   //       matches.push(element)
//   //     }
//   //   })
    
//   //   if(matches.length === wordArray.length - 1)
//   //     return true
//   //   else
//   //     return false

//   // }

//   // var ladderLength = function(beginWord, endWord, wordList) {

//   //   let words = []
//   //   words.push(beginWord)
    
//   //   let wordsChecked = []

//   //   while(words.length) {

//   //     let word = words.shift()
      
//   //     wordsChecked.push(word)

//   //     if(word === endWord) {

//   //       let filtered = wordsChecked.filter((word, i) => {
//   //         if(isNextWordValid(wordsChecked[i-1], word))
//   //           return word
//   //       })
        
//   //       console.log('filtered', filtered)

//   //       return filtered.length
//   //     }

//   //     for (let i = 0; i < wordList.length; i++) {
//   //       if(isNextWordValid(word, wordList[i]) && wordsChecked.indexOf(wordList[i]) == -1) {
//   //         words.push(wordList[i])
//   //       }
//   //     }

//   //   }

//   //   return -1

//   // }

