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
    clientsLoggedIn = []
    chatEvents = []
  
    for activity in activities:

      if(activity[1] == "@login"):
        haLoggedIn = True

      if(activity[1] == "@logout"):
        haLoggedIn = False

      if (activity[1] == "@startVideo"):
        clientsLoggedIn.append(activity[2])

      if (activity[1] == "@stopVideo"):
        print("stopVideo")
        # clientsLoggedIn = clientsLoggedIn.filter((client) => {
        #   return client != activity[2];
        # });

      dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
    

buildChatEvents()

# const buildChatEvents = () => {
#   let haLoggedIn = false;
#   let clientsLoggedIn = [];
#   const chatEvents = [];
#   //build the array of chatEvents with this loop.
#   activities.forEach((activity) => {
#     if (activity[1] === "@login") {
#       haLoggedIn = true;
#     }

#     if (activity[1] === "@logout") {
#       haLoggedIn = false;
#     }

#     if (activity[1] === "@startVideo") {
#       clientsLoggedIn.push(activity[2]);
#     }

#     if (activity[1] === "@stopVideo") {
#       clientsLoggedIn = clientsLoggedIn.filter((client) => {
#         return client != activity[2];
#       });
#     }

#     let chatEvent = {
#       timestamp: activity[0],
#       haLoggedIn: haLoggedIn,
#       event: activity[1],
#       clientsLoggedIn: clientsLoggedIn.slice(0)
#     };

#     chatEvents.push(chatEvent);
#   });

#   return chatEvents;
# };