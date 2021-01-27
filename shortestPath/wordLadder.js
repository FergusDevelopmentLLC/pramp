const ladderLength = (beginWord, endWordWord, wordArray) => {
    
  const validNextWords = (currentWord, wordArray) => {
  
    if(!currentWord) return null
    if(wordArray.length === 0) return null

    let currentWordArray = currentWord.split('')
    let returnWords = []
    
    wordArray.forEach((word, i) => {
      
      let matchedLetters = []
      currentWordArray.forEach((letter, i) => {
        if(word.indexOf(letter) > -1) {
          matchedLetters.push(letter)
        }
      })
      
      if(matchedLetters.length === currentWord.split('').length - 1)
        returnWords.push(word)
      
    })
    
    return returnWords
  }

  const buildPath = (traversalTree, endWordWord) => {

    let path = [endWordWord]
    let parent = traversalTree[endWordWord]
    
    while (parent) {
      path.push(parent)
      parent = traversalTree[parent]
    }
  
    return path.reverse()
  }

  const bfs = (beginWord, endWordWord, wordList) => {

    let traversalTree = {}
    let visited = new Set
    let queue = []
    queue.push(beginWord)
    wordList.push(endWordWord)

    while (queue.length) {

      let wordToTest = queue.shift()//take the first one off of queue array
      
      visited.add(wordToTest)//add this square to visited array, this keeps track of squares visited
      
      if (wordToTest === endWordWord) {
        return buildPath(traversalTree, endWordWord)//if the wordToTest === endWordWord, return the build path
      }

      for (child of validNextWords(wordToTest, wordList)) {
        if (!visited.has(child)){
          traversalTree[child] = wordToTest
          queue.push(child)
        }
      }
    }
  }

  let path = bfs(beginWord, endWordWord, wordArray)
  return path ? path.length - 1 : 0

}

let beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
console.log(ladderLength(beginWord, endWord, wordList))