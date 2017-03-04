// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle 
// incoming survey results. This route will also be used to 
// handle the compatibility logic.

var friendsData = require('../data/friends');

// console.log(friendsData);
// console.log(Array.isArray(friendsData));

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		// console.log("in post" , req.body);
		friendsData.push(req.body);
		// console.log("changed data", friendsData);

		var differenceArray = [];

		var currentUserData = req.body;
		var currentUserScores = req.body.scores;
		// console.log(currentUserScores.length);

		for(var i=0; i < friendsData.length-1; i++){
			var friendsScores = friendsData[i].scores;
			// console.log(friendsScores);
			for(var j=0; j < 10; j++){
				if(parseInt(currentUserScores[j]) === friendsScores[j]){
					//ignore that score
				}else{
					console.log(i, "comparing[", currentUserScores[j], friendsScores[j], "]");
					 differenceArray.push(Math.abs(parseInt(currentUserScores[j]) - friendsScores[j]));
				}

			}
		}

		console.log("differenceArray", differenceArray);
		res.json(friendsData);		
	});
}