// run with shjs for terminal cmds, not node

var Twitter = require('ntwitter');
var play = require('play');
var player = require('play-sound')(opts = {})
var shell = require('shelljs');


var client = new Twitter({
  consumer_key: 'SBsY65eF5vdzA8GKIt4ftxIok',
  consumer_secret: 'xrFLGWAGDzX49z3HabUsyFzPP1gJD6g5XJA6DDRqRNced5Rx46',
  access_token_key: '4152823155-8G5ZGL5xQahsdsRDiJs5l8j5MdIHOpVDKED0QTt',
  access_token_secret: '4BDLpkQCkVFX6KD3bJnuVeExhhxCmjLaNtJCQwS6NYc8F'
});

// shell.exec('rm sounds/*')

var params = {screen_name: 'jakeelwes'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  try {
    tweets.map(printTweet);
  } catch(error) {
    echo(error);
  }
});

// var names = ["Albert", "Bad News", "Bahh", "Bells", "Boing", "Bubbles", "Cellos", "Deranged", "Good News", "Hysterical", "Pipe Organ", "Trinoids", "Whisper", "Zarvox"]
var names = [ "Whisper", "Whisper", "Whisper", "Whisper"] //"Albert", "Deranged", "Hysterical",
var num = 0
 // or just whisper?

// what to print
function printTweet(tweet){
    num++
    echo(tweet.text);
    // console.log(tweet.coordinates);
    var randName = names[Math.floor(Math.random() * names.length)];
    if (shell.exec('say -v \'' + randName + '\' \'' + tweet.text + '\' -o sounds/' + (num)%50 + '.aiff').code !== 0) {
      echo('Error: say command failed');
      // exit(1);
    }

    // play.sound('sounds/'+num+'.aiff');
    try {
      player.play('sounds/'+(num)%20 +'.aiff')
    }
    catch(err) {
      echo("player error");
    }

}

//keyword

// client.stream('statuses/filter', {track: 'london'}, function(stream) {
//   stream.on('data', printTweet);
//
//   stream.on('error', function(error) {
//     throw error;
//   });
// });


//geo-location (kentish/camden) - SW then NE and flipped coordinates -0.148336, 51.536591, -0.130221, 51.552646 - chic -0.2, 51.5, -0.1, 51.6

// var myStream = client.stream('statuses/filter', {locations: '-0.208037, 51.368398, -0.058011, 51.644031'});
// myStream.on('data', printTweet);
//
// myStream.on('error', function(error) {
//   throw error;
// });


function stream1(){
  client.stream('statuses/filter', {locations: '-0.208037, 51.368398, -0.058011, 51.644031'}, function(stream) { //, track: 'London'
    stream.on('data', function (data) {
      printTweet(data);
     });
      stream.on('end', function (response) {
        echo('end \n');
        stream1();
      });

      stream.on('destroy', function (response) {
        // Handle a 'silent' disconnection from Twitter, no end/error event fired
        echo('destory \n')
        stream1();
      });

    });
  }


stream1();
