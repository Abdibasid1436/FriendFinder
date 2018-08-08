var friendMatch = require("../data/friends.js");

// Two Routes with express parameters
module.exports = function(app) {
   // A GET json route to display all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendMatch);
  });
}
app.post("/api/friends", function(req, res) {
  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
  };

  console.log(req.body);
  //Here we take the result of the user's survey POST and parse it.
  var userData = req.body;
  var userScores = userData.scores;

  console.log(userScores); 

  var totalDifference = 0;

  //Loop through all friend possibilities in the database.
  for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    totalDifference = 0;

    // We then loop through all the scores of each friend
    for(var j = 0; j < friends[j]; j++) {
      totalDifference =+ math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

      if (totalDifference <=bestMatch.friendDifference) {
        
      }
    }
  }
})
