console.log("SNES Soundtracks booting up");

const twitterUsername = 'mallow_bright';

//making sure npm run develop works
if (process.env.NODE_ENV === "develop") {
  require("dotenv").config();
};

//rules for node-schedule
var schedule = require("node-schedule");
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 1,
rule.hour = 10;
rule.minute = 0;
rule.tz = "Etc/GMT+4";

//array to pull soundtracks from
var soundtrackArray = [
    "https://www.youtube.com/watch?v=85u34SUh05Y", // Legend of Zelda
    "https://www.youtube.com/watch?v=85u34SUh05Y", // Chrono Trigger
    "https://www.youtube.com/watch?v=UyNufyV3VCo", // Super Metroid
    "https://www.youtube.com/watch?v=Y2VJeZDejtc", // Final Fantasy VI
    "https://www.youtube.com/watch?v=wgUmFPnkoHU", // Super Mario World
    "https://www.youtube.com/watch?v=-QsysJwzod4", // Super Street Fighter II
    "https://www.youtube.com/watch?v=oRxgYC5zrV4", // Super Mario World 2: Yoshi's Island
    "https://www.youtube.com/watch?v=rJJk9Zk2h_U", // Super Mario Kart
    "https://www.youtube.com/watch?v=byIjMomjWkA", // Star Fox
    "https://www.youtube.com/watch?v=wpchBo75N68", // Super Mario RPG: Legend of the Seven Stars
  ];
var soundtrackArrayLength = soundtrackArray.length;


// ... append to bottom of file:

// Create a Twitter client object to connect to the Twitter API
var Twit = require('twit');

// Pulling keys from another file
var config = require('./config.js');
// Making a Twit object for connection to the API
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('statuses/filter', { track: twitterUsername });

// Now looking for Tweet events
// See: https://dev.Twitter.com/streaming/userstreams
stream.on('tweet', pressStart);
