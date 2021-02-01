// 14. Longest Common Prefix
// Easy
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  let first = strs[0]
  let firstArray = first.split('')
  
  const possibleSequences = firstArray.reduce((acc, item, i) => {
    acc.push(firstArray.slice(0, i + 1))
    return acc
  },[])
  
  let seqencesThatWork = possibleSequences.reduce((acc, sequence, i) => {
    let itemMatches = true
    
    strs.forEach((word, i) => {
      let wordArray = word.split('')
      sequence.forEach((letter, j) => {
        if(wordArray[j] !== letter) {
          itemMatches = false
        }
      })
    })

    if(itemMatches) {
      acc.push(sequence)
    }

    return acc
  },[])

  if(seqencesThatWork.length > 0) {
    
    return seqencesThatWork.reduce((acc, sequence) => {
    
      if(sequence.length > acc.length) {
        acc = sequence
      }
      return acc

    }, seqencesThatWork[0]).join('')
  }
  else {

    return ""
  }
}

strs = ["fanatic","fandom","fantastic"]
console.log(longestCommonPrefix(strs))
