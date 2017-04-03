// Global variables
var command = process.argv[2];
var keys = require('./keys.js');

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
});

// Take in the command line arguments
// client.get(command, function(error, tweets) {
// 	console.log('tweets', JSON.stringify(tweets, null, 4));
// });

// Require Spotify
var spotify = require('spotify');
var clientSpotify = (keys.spotifyKeys);
var artist= "";
var songName = "";
var link = "";
var album = "";

// Grabbing Spotify search
spotify.search({ type: 'track', query: 'I Feel it Coming'}, function(err, data) {
    if ( err ) {
    	for (var i = 0; i < 2; i++) {
    		console.log(data[i]);
        	console.log('Error occurred: ' + err);
        }
        return;
    }
    // Do something with 'data' 
    console.log('data', JSON.stringify(data, null, 4));
    console.log('Artist: ', + data.tracks.items[0].artist[3]);
    // console.log('Address', data.results[0].)

});

// Keys for Spotify


// // Require OMDB
// var request = require('request');

// request("http://www.omdbapi.com/?", function(error, response, body) {

// 	if (!error && response.statusCode === 200) {
// 		console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
// 	}
// });


// Switch statment for all functions
switch(command) {
	case 'my-tweets':
		console.log('my tweets ', twitter);
		break;
	case 'spotify-this-song':
		console.log('spotify this song ', spotify);
	// default: 
	// 	("The Sign");
	// 	break;
	// case 'movie-this':
	// 	console.log('movie this ', );
	// 	break;
	// case 'do-what-it-says':
	// 	console.log('do what it says ', );
}


