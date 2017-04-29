// run with shjs for terminal cmds, not node
// to escape erors run with forever forever -c shjs twitter.js 2> /dev/null (rpi forever twitter.js 2> /dev/null)


var Twitter = require('ntwitter');
var shell = require('shelljs');

shell.exec('clear')

var client = new Twitter({
  consumer_key: 'SBsY65eF5vdzA8GKIt4ftxIok',
  consumer_secret: 'xrFLGWAGDzX49z3HabUsyFzPP1gJD6g5XJA6DDRqRNced5Rx46',
  access_token_key: '4152823155-8G5ZGL5xQahsdsRDiJs5l8j5MdIHOpVDKED0QTt',
  access_token_secret: '4BDLpkQCkVFX6KD3bJnuVeExhhxCmjLaNtJCQwS6NYc8F'
});

shell.exec('rm sounds/*')

var params = {screen_name: 'jakeelwes'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  try {
    tweets.map(printTweet);
  } catch(error) {
    console.error(error);
  }
});

var num = 0

// what to print
function printTweet(tweet){
    num++
    console.log(tweet.text);
    // console.log(tweet.coordinates);
    if (shell.exec('espeak -ven+whisper -k1 -s150 \'' + tweet.text + '\'', {async: true}).code !== 0) {
      console.error('Error: say command failed');
      // exit(1);
    }

}

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


//if jack server is not running or cannot be started
//pulseaudio --kill
//jack_control start
//jack_control exit
//pulseaudio --start
