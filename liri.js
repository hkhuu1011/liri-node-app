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
function cSpotify() {

	// Default Ace of Base
	if (!searchData) {
		console.log();
	};

	// Require Spotify
	var spotify = require('spotify');
	var searchData = process.argv[3];

	// Grabbing Spotify search
	spotify.search({ type: 'track', query: searchData}, function(error, data) {
	    if (!error) {
	    	console.log('Artist: ' + data.tracks.items[0].artists[0].name);
	    	console.log('Title: ' + data.tracks.items[0].name);
	        console.log('Preview Link: ', JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify));
	        console.log('Album: ' + data.tracks.items[0].album.name);
	        };

	}); // End .search for Spotify
}; // End cSpotify function


// Function for OMDB
function cOmdb() {

	// Default Mr.Nobody
	if (!movieName) {
		console.log();
	};

	// Require OMDB
	var request = require('request');

	// Grab the movie name
	var movieName = process.argv[3];

	var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';
	// console.log(queryUrl);


	request(queryUrl, function(error, response, body) {

		var movieInfo = JSON.parse(body);

		if (!error) {
			console.log("Title: " + movieInfo.Title);
			console.log("Release Year: " + movieInfo.Year);
			console.log("imdb Rating: " + movieInfo.imdbRating);
			console.log("Country: " + movieInfo.Country);
			console.log("Language: " + movieInfo.Language);
			console.log("Plot: " + movieInfo.Plot);
			console.log("Actors: " + movieInfo.Actors);
			console.log("Rotten Tomatoes Rating: " + movieInfo.tomatoRating);
			console.log("Rotten Tomatoes URL: " + movieInfo.tomatoURL);
		}
	});
}; // End cOmdb function


// Function for do-what-it-says
function doIt() {
	// Require fs
	var fs = require("fs");

		// Read file random.txt function
		fs.readFile("random.txt", "utf8", function(error, data) {
			if (error) {
				throw error;
			}
			console.log(data);
		}); // End .readFile
};

// Switch statment for all functions
switch(command) {
	case 'my-tweets':
		cTweets();
		break;
	case 'spotify-this-song':
		cSpotify();
		break;
	case 'movie-this':
		cOmdb();
		break;
	case 'do-what-it-says':
		doIt();
		break;
		default: ;
};


