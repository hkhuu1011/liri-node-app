// Global variables
var command = process.argv[2];
// Require Twitter
var twitter = require('twitter');
var keys = require('./keys.js');

// Require Spotify

// Require OMDB


//Switch statment for all functions



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

