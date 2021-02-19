def classroomIntervals(*intervals):# https://treyhunner.com/2018/10/asterisks-in-python-what-they-are-and-how-to-use-them/
  
  roomsNeeded = 0

  i = 0
  for outerInterval in intervals:
    
    outerInterval = intervals[i]
    conflictCount = 0 #find the number of conflicts to the interval with [starttime, endtime]

    j=0
    for innerInterval in intervals:
      innerInterval = intervals[j]

      if(i != j):
        if(
            #if the start time of outerInterval is between the start and end of any other interval, it's a conflict, count it
            (outerInterval[0] >= innerInterval[0] and outerInterval[0] <= innerInterval[1])
            or
            #if the end time of of outerInterval is between the start and end of any other interval, it's a conflict, count it
            (outerInterval[1] >= innerInterval[0] and outerInterval[1] <= innerInterval[1])
         ):
         conflictCount+=1

      j+=1

      if(conflictCount > roomsNeeded):
        roomsNeeded = conflictCount
  
    i+=1

  return roomsNeeded

answer1 = classroomIntervals([30, 75], [0, 50], [60, 150])
print(answer1)