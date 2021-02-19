const classroomIntervals = (...intervals) => {
  let roomsNeeded = 0

  for (let i = 0; i < intervals.length; i++) {
    const outerInterval = intervals[i]
    let conflictCount = 0//find the number of conflicts to the interval with [starttime, endtime]
    for (let j = 0; j < intervals.length; j++) {
      const innerInterval = intervals[j]
      //don't compare outerInteral to itself
      if(i !== j) {
        if(
          //if the start time of outerInterval is between the start and end of any other interval, it's a conflict, count it
          (outerInterval[0] >= innerInterval[0] && outerInterval[0] <= innerInterval[1])
          ||//or
          //if the end time of of outerInterval is between the start and end of any other interval, it's a conflict, count it
          (outerInterval[1] >= innerInterval[0] && outerInterval[1] <= innerInterval[1])
        )
        conflictCount++
      }
    }
    if(conflictCount > roomsNeeded)
      roomsNeeded = conflictCount//return the maximum conflict count  
  }

  return roomsNeeded
}

const classroomIntervalsUsingReduce = (...intervals) => {

  return intervals.reduce((acc, outerInterval, i) => {
    
    //find the number of conflicts to the interval with [starttime, endtime]
    const conflictCount = intervals.reduce((acc, innerInterval, j) => {
      
      //don't compare outerInteral to itself
      if(i !== j) {
        if(
            //if the start time of outerInterval is between the start and end of any other interval, it's a conflict, count it
            (outerInterval[0] >= innerInterval[0] && outerInterval[0] <= innerInterval[1])
            ||//or
            //if the end time of of outerInterval is between the start and end of any other interval, it's a conflict, count it
            (outerInterval[1] >= innerInterval[0] && outerInterval[1] <= innerInterval[1])
          )
          acc ++
        } 
      return acc
    }, 0)

    if(conflictCount > acc)
      acc = conflictCount//return the maximum conflict count

    return acc

  }, 0)
}

let answer1 = classroomIntervals([30, 75], [0, 50], [60, 150])
console.log(answer1)

let answer2 = classroomIntervalsUsingReduce([30, 75], [0, 50], [60, 150])
console.log(answer2)