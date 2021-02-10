const activities = [
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
  [210, '@logout', null] 
]

let chatEvents = []

// we want an array of objects like this for chatEvents, each object records necessary information at each time stamp.
// see full array of chatEvents at the bottom

//[
//   {
//     timestamp: 1,
//     haLoggedIn: true,
//     event: '@login',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 5,
//     haLoggedIn: true,
//     event: '@startVideo',
//     clientsLoggedIn: ['Bob']
//   },
// ...
// ]


let haLoggedIn = false
let clientsLoggedIn = []

//build the array of chatEvents with this loop.
activities.forEach((activity) => {
  
  if(activity[1] === "@login") {
    haLoggedIn = true
  }

  if(activity[1] === "@logout") {
    haLoggedIn = false
  }

  if(activity[1] === "@startVideo") {
    clientsLoggedIn.push(activity[2])
  }
  
  if(activity[1] === "@stopVideo") {
    clientsLoggedIn = clientsLoggedIn.filter((client) => {
      return client != activity[2]
    })
  }

  let chatEvent = {
    timestamp: activity[0],
    haLoggedIn: haLoggedIn,
    event: activity[1],
    clientsLoggedIn: clientsLoggedIn.slice(0)
  }

  chatEvents.push(chatEvent)
})
console.log('chatEvents', chatEvents)

//part A
const logins = []
const logouts = []

//loop through the chatEvents made earlier
chatEvents.forEach((chatEvent) => {
  
  //keep track of logins
  if(chatEvent.event === "@login") {
    logins.push(chatEvent)
  }

  //keep track of logouts
  else if(chatEvent.event === "@logout") {
    logouts.push(chatEvent)
  }
})

//get the spans of time that the ha was logged in
const spans = []
logins.forEach((login, i) => {
  const logout = logouts[i]
  const span = logout.timestamp - login.timestamp
  spans.push(span)
})

//reduce the spans down to a total duration
const loggedInTime = spans.reduce((acc, span) => {
  acc = acc + span
  return acc
},0)
console.log('Part A: loggedInTime', loggedInTime)


//part B
const multiSessionStarts = []
const multiSessionEnds = []
const multiSpans = []

chatEvents.forEach((chatEvent) => {
  if(chatEvent.haLoggedIn === true && chatEvent.clientsLoggedIn.length > 1) {
    multiSessionStarts.push(chatEvent)
  }
  else if(chatEvent.haLoggedIn === true && chatEvent.event === '@stopVideo' && chatEvent.clientsLoggedIn.length === 1) {
    multiSessionEnds.push(chatEvent)
  }
})

// console.log('multiSessionStarts', multiSessionStarts)
// console.log('multiSessionEnds', multiSessionEnds)

multiSessionStarts.forEach((startMultSession, i) => {
  const stopMultSession = multiSessionEnds[i]
  const span = stopMultSession.timestamp - startMultSession.timestamp
  multiSpans.push(span)
})

const multiDuration = multiSpans.reduce((acc, span) => {
  acc = acc + span
  return acc
},0)
console.log('Part B: multiSpansDuration', multiDuration)

// let chatEvents = [
//   {
//     timestamp: 1,
//     haLoggedIn: true,
//     event: '@login',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 5,
//     haLoggedIn: true,
//     event: '@startVideo',
//     clientsLoggedIn: ['Bob']
//   },
//   {
//     timestamp: 20,
//     haLoggedIn: true,
//     event: '@startVideo',
//     clientsLoggedIn: ['Bob', 'Thomas']
//   },
//   {
//     timestamp: 66,
//     haLoggedIn: true,
//     event: '@stopVideo',
//     clientsLoggedIn: ['Bob']
//   },
//   {
//     timestamp: 70,
//     haLoggedIn: true,
//     event: '@startVideo',
//     clientsLoggedIn: ['Bob','Lily']
//   },
//   {
//     timestamp: 75,
//     haLoggedIn: true,
//     event: '@stopVideo',
//     clientsLoggedIn: ['Lily']
//   },
//   {
//     timestamp: 78,
//     haLoggedIn: true,
//     event: '@stopVideo',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 100,
//     haLoggedIn: false,
//     event: '@logout',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 150,
//     haLoggedIn: true,
//     event: '@login',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 160,
//     haLoggedIn: true,
//     event: '@startVideo',
//     clientsLoggedIn: ['Thomas']
//   },
//   {
//     timestamp: 205,
//     haLoggedIn: true,
//     event: '@stopVideo',
//     clientsLoggedIn: []
//   },
//   {
//     timestamp: 210,
//     haLoggedIn: false,
//     event: '@logout',
//     clientsLoggedIn: []
//   }

// ]