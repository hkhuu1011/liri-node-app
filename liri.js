// Global variables
var command = process.argv[2];
var keys = require('./keys.js');

// function for Twitter
function cTweets() {

	// Require Twitter
	var twitter = require('twitter');

	// Keys for Twitter
	var client = new twitter(keys.twitterKeys); 
	var params = {screen_name: 'thatsKhuu'};

	// Grabbing tweets
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (var i = 0; i < 20; i++) {
	  		console.log((tweets)[i].text);
	  	}
	  } else
	  	throw error;

	}); //End .get for Twitter

}; // End cTweets function


// Function for Spotify
// function cSpotify() {
	// Require Spotify
	var spotify = require('spotify');
	// var clientSpotify = (keys.spotifyKeys);
	var searchData = process.argv[3];

	// Grabbing Spotify search
	spotify.search({ type: 'track', query: "Hello"}, function(err, data) {
	    if ( err ) {
	        	console.log('Error occurred: ' + err);
	        }
	        return;

	    // for (var i = 0; i < 2; i++) {
	    // 		console.log(data[i]);

	    // }
	    // Do something with 'data' 
	    console.log('data', JSON.stringify(data, null, 4));
	    console.log('Artist: ', + data.tracks.items[0].artist[0].name);
	    // console.log('Address', data.results[0].)

	}); // End .search for Spotify
// }; // End cSpotify function

// Require OMDB
// var request = require('request');

// // Store all of the arguments in an array
// var nodeArgs = process.argv;

// // Grab the movie name
// var movieName = "";

// // Loop through all words in the node argument and add "+"
// for (var i = 2; i < nodeArgs.length; i++) {
// 	if (i > 2 && i < nodeArgs.length) {
// 		movieName = movieName + "+" + nodeArgs[i];
// 	} else {
// 		movieName += nodeArgs[i];
// 	}
// }

// Run a request to the OMDB API with the movie
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
// console.log(queryUrl);

// var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

// 	if (!error && response.statusCode === 200) {
// 		console.log("Title: " + JSON.parse(body).Title);
		// console.log("Release Year: " + JSON.parse(body).Year);
		// console.log("imdb Rating: " + JSON.parse(body).imdbRating);
		// console.log("Country: " + JSON.parse(body).Country);
		// console.log("Language: " + JSON.parse(body).Language);
		// console.log("Plot: " + JSON.parse(body).Plot);
		// console.log("Actors: " + JSON.parse(body).Actors);
		// console.log("Rotten Tomatoes Rating: " + );
		// console.log("Rotten Tomatoes URL: " + );
// 	}
// });


// Switch statment for all functions
switch(command) {
	case 'my-tweets':
		cTweets();
		break;
	// case 'spotify-this-song':
	// 	cSpotify();
	// default: 
	// 	("The Sign");
	// 	break;
	// case 'movie-this':
	// 	console.log('movie this ', request);
	// 	break;
	// case 'do-what-it-says':
	// 	console.log('do what it says ', );
};


