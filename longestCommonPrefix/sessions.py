activity = [(1, '@login', None),
(5, '@startVideo', 'Bob'),
(20, '@startVideo', 'Thomas'),
(66, '@stopVideo', 'Thomas'),
(70, '@startVideo', 'Lily'),
(75, '@stopVideo', 'Bob'),
(78, '@stopVideo', 'Lily'),
(100, '@logout', None),
(150, '@login', None),
(160, '@startVideo', 'Thomas'),
(205, '@stopVideo', 'Thomas'),
(210, '@logout', None) ]

starts = []
ends = []
spans = []

i = 0

while i < len(activity):

  # print(activity[i][1])
  # print(activity[i][2])

  if activity[i][1] == "@login" and activity[i][2] == None:
    starts.append(activity[i][0])
  
  if activity[i][1] == "@logout" and activity[i][2] == None:
    ends.append(activity[i][0])

  i += 1



i = 0
while i < len(starts):
  span = ends[i] - starts[i]
  spans.append(span) 
  i += 1

# print starts
# print ends
# print spans

totalTime = 0
i = 0
while i < len(spans):
  totalTime = totalTime + spans[i]
  i += 1

print totalTime


simStarts = []
sessionEnds = []
numberOfStreamers = 0

i = 0
while i < len(spans):

  if(activity[i][1] == '@startVideo'):
    numberOfStreamers = numberOfStreamers + 1
  
  if(activity[i][1] == '@stopVideo'):
    numberOfStreamers = numberOfStreamers - 1

  if(numberOfStreamers > 1):
    simStarts.append(activity[i][0])
  else:
    sessionEnds.append(activity[i][0])
  
  i += 1

print simStarts
print sessionEnds

