const removeDuplicatesNestedForLoop = (array) => {
  
  console.log('removeDuplicatesNestedForLoop executing')

  let returnArray = []
  
  for (let i = 0; i < array.length; i++){
    const itemToCheck = array[i]
    let duplicateFound = false
    
    for (let j = 0; j < returnArray.length; j++){
      if(itemToCheck === returnArray[j]) {
        duplicateFound = true
      }
    }

    if(!duplicateFound) {
      returnArray.push(itemToCheck)
    }
  }
  
  return returnArray
}

const removeDuplicatesNestedWithIncludes = (array) => {
  
  console.log('removeDuplicatesNestedWithIncludes executing')
  
  let returnArray = []
  
  for (let i = 0; i < array.length; i++){

    const itemToCheck = array[i]
    if(!returnArray.includes(itemToCheck)) {
      returnArray.push(itemToCheck)
    }
      
  }

  return returnArray
}

const removeDuplicatesFast = (array) => {
  
  console.log('removeDuplicatesFast executing')

  let arrayMap = {}

  for (let i = 0; i < array.length; i++){
    if (arrayMap[array[i]]){
      arrayMap[array[i]].push(i)
    } else {
      arrayMap[array[i]] = [i]
    }
  }
  
  // console.log('arrayMap', arrayMap)
  // console.log('arrayMap', Object.keys(arrayMap))
  // console.log(Object.keys(arrayMap).map(key => parseInt(key)))

  return Object.keys(arrayMap)
}

const starNameGenerator = () => {
  const random1 = Math.floor(10 + Math.random() * 90)
  const random2 = Math.floor(10 + Math.random() * 90)
  // console.log("*")
  return `PSRJ${random1}-${random2}`
}


let stars = []

// stars = [
//   'PSRJ31-79', 'PSRJ75-43', 'PSRJ75-34', 'PSRJ87-88', 'PSRJ53-92',
//   'PSRJ25-91', 'PSRJ55-43', 'PSRJ51-77', 'PSRJ40-21', 'PSRJ65-88',
//   'PSRJ31-31', 'PSRJ19-79', 'PSRJ59-18', 'PSRJ32-19', 'PSRJ16-74',
//   'PSRJ85-42', 'PSRJ81-82', 'PSRJ73-22', 'PSRJ75-43', 'PSRJ13-43',
//   'PSRJ23-30', 'PSRJ23-17', 'PSRJ70-62', 'PSRJ65-92', 'PSRJ12-28',
//   'PSRJ12-15', 'PSRJ98-94', 'PSRJ42-56', 'PSRJ60-40', 'PSRJ70-13',
//   'PSRJ15-27', 'PSRJ46-83', 'PSRJ96-37', 'PSRJ23-11', 'PSRJ82-26',
//   'PSRJ75-43', 'PSRJ74-97', 'PSRJ97-18', 'PSRJ98-56', 'PSRJ77-79',
//   'PSRJ10-82', 'PSRJ93-78', 'PSRJ48-29', 'PSRJ41-93', 'PSRJ34-92',
//   'PSRJ53-56', 'PSRJ93-18', 'PSRJ49-32', 'PSRJ27-43', 'PSRJ34-37',
//   'PSRJ35-55', 'PSRJ52-67', 'PSRJ59-47', 'PSRJ19-11', 'PSRJ29-46',
//   'PSRJ75-40', 'PSRJ78-60', 'PSRJ69-17', 'PSRJ28-45', 'PSRJ17-15',
//   'PSRJ78-21', 'PSRJ11-15', 'PSRJ25-61', 'PSRJ75-43', 'PSRJ46-54',
//   'PSRJ51-47', 'PSRJ32-60', 'PSRJ28-95', 'PSRJ45-14', 'PSRJ14-59',
//   'PSRJ80-12', 'PSRJ75-43', 'PSRJ45-84', 'PSRJ75-80', 'PSRJ98-30',
//   'PSRJ34-46', 'PSRJ59-69', 'PSRJ90-20', 'PSRJ48-10', 'PSRJ77-74',
//   'PSRJ84-43', 'PSRJ80-96', 'PSRJ73-59', 'PSRJ32-16', 'PSRJ20-36',
//   'PSRJ65-62', 'PSRJ63-62', 'PSRJ66-15', 'PSRJ61-67', 'PSRJ99-24',
//   'PSRJ68-14', 'PSRJ97-91', 'PSRJ58-32', 'PSRJ61-69', 'PSRJ49-46',
//   'PSRJ27-56', 'PSRJ90-31', 'PSRJ22-47', 'PSRJ94-70', 'PSRJ75-43'
// ]

for (let i = 0; i < 500000; i++) {
  let star = starNameGenerator()
  stars.push(star)
}

// console.log('stars', stars)
console.log('stars.count', stars.length)
let start, end

console.log('-----------')
console.log('start!')
start = Date.now()
deDupped = removeDuplicatesNestedForLoop(stars)
console.log('deduppedResultLength', deDupped.length)
end = Date.now()
console.log('end!')
console.log('elapsed time (ms):', end - start)

console.log('-----------')
console.log('start!')
start = Date.now()
deDupped = removeDuplicatesNestedWithIncludes(stars)
console.log('deduppedResultLength', deDupped.length)
end = Date.now()
console.log('end!')
console.log('elapsed time (ms):', end - start)

console.log('-----------')
console.log('start!')
start = Date.now()
deDupped = removeDuplicatesFast(stars)
console.log('deduppedResultLength', deDupped.length)
end = Date.now()
console.log('end!')
console.log('elapsed time (ms):', end - start)


// https://www.space.com/57-stars-formation-classification-and-constellations.html
// Since there are so many stars in the universe, the IAU uses a different system for newfound stars. 
// Most consist of an abbreviation that stands for either the type of star or a catalog that lists 
// information about the star, followed by a group of symbols. For instance, PSR J1302-6350 is a pulsar, 
// thus the PSR. The J reveals that a coordinate system known as J2000 is being used, while the 1302 and 
// 6350 are coordinates similar to the latitude and longitude codes used on Earth.
