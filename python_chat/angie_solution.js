// # A healthcare tech company has a number of activity records for each Health
// # Advocate (each 'HA'). Each activity record is represented by a list of
// # 3-element tuples as follows:

// activity = [(1, '@login', None),
// (5, '@startVideo', 'Bob'),
// (20, '@startVideo', 'Thomas'),
// (66, '@stopVideo', 'Thomas'),
// (70, '@startVideo', 'Lily'),
// (75, '@stopVideo', 'Bob'),
// (78, '@stopVideo', 'Lily'),
// (100, '@logout', None),
// (150, '@login', None),
// (160, '@startVideo', 'Thomas'),
// (205, '@stopVideo', 'Thomas'),
// (210, '@logout', None) ]

// # For each tuple, the first element is timestamp, the second is an action (e.g.,
// # '@login', '@startVideo', '@stopVideo', '@logout'), and the last element is
// # the client. In detail, for example, (1, '@login', None) means this HA logged
// # in to our system at time 1, (100, '@logout', None) means this HA logged out of
// # our system at time 100, (5, '@startVideo', 'Bob') means that this HA started
// # a video stream with the client Bob at time 5, and (75, '@stopVideo', 'Bob')
// # means that this HA ended the video stream with Bob at time 75.

// # Although each HA is free to video stream with zero, one, or two clients at any
// # moment in time, the company encourages HAs to simultaneously video stream
// # with two clients as much as possible. Note that every HA can stream with a
// # maximum of two clients at any moment.

// # So, your challenge is to calculate both (A) the duration of this example HA's
// # logged in time, e.g. the sum of all periods between '@login' and '@logout', and
// # (B) the duration of this example HA's time spent simultaneously streaming video
// # with two clients.

// # For the above example, the correct result for (A) is 159 (1 to 100, 150 to 210),
// # and the correct result for (B) is 51 (20 to 66, 70 to 75).

// # Note that the activity list is sorted by timestamp, and you can assume all test data
// # are valid. Please be sure that your solution code outputs BOTH (A) and (B).

// Solution code here

const timeHALoggedIn = (activities) => {
  let stack = []
  let totalTime = 0;
  let totalTimeWithTwoPeople = 0;

  activities.forEach(activity => {
    // find the total time HA is logged on. --> if the 3rd value is null...
    if (activity[2] === null) {
      if (activity[1] === '@login') {
        stack.push(activity)
      } else if (activity[1] === '@logout') {
        totalTime += (activity[0] - stack[stack.length - 1][0])
        stack.pop()
      }
    } else {
    // consider add people to the stack when they start video
      if (activity[1] === '@startVideo') {
        stack.push(activity)
      } else if (activity[1] === '@stopVideo') {
        // if there are 2 people streaming add the overlapping time to the count
        if (stack.length === 3) {
          totalTimeWithTwoPeople += activity[0] - stack[2][0];
        }
        // find the corresponding name in the stack 
        // remove that element from stack
        for (var i = stack.length - 1; i >=0; i--) {
          if (stack[i][2] === activity[2]) {
            stack.splice(i, 1);
            break;
          }
        }
      }
    }
  })
  let result = `total time: ${totalTime}, time streaming with 2 people: ${totalTimeWithTwoPeople}`
  return result;
}

const activity = [[1, '@login', null],
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
  [210, '@logout', null]]

console.log(timeHALoggedIn(activity));