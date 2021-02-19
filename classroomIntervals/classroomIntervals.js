const classroomIntervals = (...intervals) => {

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

let answer = classroomIntervals([30, 75], [0, 50], [60, 150])
console.log(answer)