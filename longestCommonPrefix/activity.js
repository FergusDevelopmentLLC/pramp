let activity = [
[1, '@login', null],
[5, '@startVideo', 'Bob'],
[20, '@startVideo', 'Thomas'],
[66, '@stopVideo', 'Thomas'],
[70, '@startVideo', 'Lily'],
[75, '@stopVideo', 'Bob'],
[78, '@stopVideo', 'Lily'],
[100, '@logout', null],
[150, '@login', null],
[160, '@startVideo', 'Thomas'],
[205, '@stopVideo', 'Thomas'],
[210, '@logout', null] ]

let starts = []
let ends = []
let spans = []


for (let i=0; i < activity.length; i++){
  const admin = {}
  
}

for (let i=0; i < activity.length; i++){

  if(activity[i][1] == '@login' && activity[i][2] == 'None') {
    starts.push(activity[i][0])
  }

  if(activity[i][1] == '@logout' && activity[i][2] == 'None') {
    ends.push(activity[i][0])
  }
}

for (let i=0; i < starts.length; i++) {
  let span = ends[i] - starts[i]
  spans.push(span)
}

totalTime = spans.reduce((acc, item) => {
  acc = acc + item
  return acc
},0)

console.log('totalTime', totalTime)

let simStarts = []
let sessionEnds = []

let numberOfStreamers = 0
for (let i=0; i < activity.length; i++){

  if(activity[i][1] == '@startVideo') {
    numberOfStreamers++
  }

  if(activity[i][1] == '@stopVideo') {
    numberOfStreamers--
  }

  if(numberOfStreamers > 1) {
    simStarts.push(activity[i][0])
  }
  else {
    sessionEnds.push(activity[i][0])
  }
}

let simEnds = []

for (let i=0; i < simStarts.length; i++){
  
  for (let j=0; j < sessionEnds.length; j++){
    if(sessionEnds[j] > simStarts[i]) {
      simEnds.push(sessionEnds[j])
      break
    }
  }
  
}

console.log('simStarts', simStarts)
console.log('simEnds', simEnds)




