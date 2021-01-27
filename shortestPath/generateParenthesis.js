
const generateParenthesis = (count) => {
  
  const findAllCombinationsFor = (string) => {
  
    if (!!string.length && string.length < 3 ) {
      return [string]
    }
  
    let combinationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
  
      let char = string[i]
  
      if (string.indexOf(char) != i) {
        continue
      }
  
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let combo of findAllCombinationsFor(remainder)) {
        combinationsArray.push(char + combo) 
      }
  
    }
  
    return combinationsArray
  }

  const canReduce = (str) => {

    if(str === '()') {
      return true
    }
  
    if(str.indexOf("()") > -1) {
      str = str.replace("()", "")
    }
    else {
      return false
    }
  
    return canReduce(str)
  }

  let stringToTest = ""

  //build a string of the same number of ( as )
  for (let i = 0; i < count; i++) {
    stringToTest = stringToTest + "()"
  }

  //get all the combinations of this string
  const candidates = findAllCombinationsFor(stringToTest)

  //run each one through canReduce, if valid, add it to theseReduce
  const theseReduce = []
  candidates.forEach((candidate) => {
    if(canReduce(candidate)) {
      theseReduce.push(candidate)
    }
  })

  return theseReduce
}

console.log(generateParenthesis(1)) 
console.log(generateParenthesis(2)) 
console.log(generateParenthesis(3)) 
console.log(generateParenthesis(4)) 
console.log(generateParenthesis(5)) 
console.log(generateParenthesis(6)) 
console.log(generateParenthesis(7)) 
console.log(generateParenthesis(8))
