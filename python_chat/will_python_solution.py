activities = [
  (1, '@login', None), 
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
  (210, '@logout', None)]

def buildChatEvents():

    haLoggedIn = False
    chatEvents = []
    clientsLoggedIn = []

    for activity in activities:

      if(activity[1] == "@login"):
        haLoggedIn = True

      if(activity[1] == "@logout"):
        haLoggedIn = False

      if (activity[1] == "@startVideo"):
        clientsLoggedIn.append(activity[2])

      
      if (activity[1] == "@stopVideo"):
        
        def filterFunction(client):
          if (client != activity[2]): 
            return True
          else: 
            return False

        clientsLoggedIn = filter(filterFunction, clientsLoggedIn)

      chatEvent = {
                    'timestamp': activity[0],
                    'haLoggedIn': haLoggedIn,
                    'event': activity[1],
                    'clientsLoggedIn': clientsLoggedIn[:]#make a copy here
                  }

      chatEvents.append(chatEvent)
    
    return chatEvents

def getHaLoggedInDuration(currentChatEvents):
  
  logins = []
  logouts = []

  for chatEvent in currentChatEvents:
    if(chatEvent['event'] == '@login'):
      logins.append(chatEvent)
    elif (chatEvent['event'] == '@logout'):
      logouts.append(chatEvent)

  spans = []
  i = 0
  for login in logins:
    logout = logouts[i]
    span = logout['timestamp'] - login['timestamp']
    spans.append(span)
    i+=1

  duration = 0
  for span in spans:
    duration += span

  return duration

def getMultiSessionDuration(currentChatEvents):

  multiSessionStarts = []
  multiSessionEnds = []
  
  for chatEvent in currentChatEvents:
    
    if(chatEvent['haLoggedIn'] == True and len(chatEvent['clientsLoggedIn']) > 1):
      multiSessionStarts.append(chatEvent)
    elif (chatEvent['haLoggedIn'] == True and chatEvent['event'] == "@stopVideo" and len(chatEvent['clientsLoggedIn']) == 1):
      multiSessionEnds.append(chatEvent)

  spans = []
  i = 0
  for multiSessionStart in multiSessionStarts:
    multiSessionEnd = multiSessionEnds[i]
    span = multiSessionEnd['timestamp'] - multiSessionStart['timestamp']
    spans.append(span)
    i+=1

  duration = 0
  for span in spans:
    duration += span

  return duration

currentChatEvents = buildChatEvents()

haDuration = getHaLoggedInDuration(currentChatEvents)
print("part A")
print(haDuration)

multiChatDuration = getMultiSessionDuration(currentChatEvents)
print("part B")
print(multiChatDuration)