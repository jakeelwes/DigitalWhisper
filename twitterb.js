// run with shjs for terminal cmds, not node
// to escape erors run with forever forever -c shjs twitter.js 2> /dev/null


var Twitter = require('ntwitter');
var play = require('play');
var player = require('play-sound')(opts = {})
var shell = require('shelljs');

var slade = '-0.208037, 51.368398, -0.058011, 51.644031'; //51.524950, -0.134487
var bern = '7.031798, 45.542613, 8.641403, 47.848413'; //46.945493, 7.437472
var baltic = ' -1.616787, 54.964929, -1.594278, 54.980554'; //54.968975, -1.598771

var place = bern;


shell.exec('clear')

var client = new Twitter({
  consumer_key: 'SBsY65eF5vdzA8GKIt4ftxIok',
  consumer_secret: 'xrFLGWAGDzX49z3HabUsyFzPP1gJD6g5XJA6DDRqRNced5Rx46',
  access_token_key: '4152823155-8G5ZGL5xQahsdsRDiJs5l8j5MdIHOpVDKED0QTt',
  access_token_secret: '4BDLpkQCkVFX6KD3bJnuVeExhhxCmjLaNtJCQwS6NYc8F'
});


// Bern acoount
//
// var client = new Twitter({
//   consumer_key: 'fUbmq4RjffZvZCopDofxQaLTo',
//   consumer_secret: '6lpvtwDyKus0a2kEpY9SJMMJtFH9kTuDqZotzKp4QNpzl51TWi',
//   access_token_key: '4152823155-905038222551547904-BgDwpiqTG595M8nPvZSgXBWsAJtoOO8',
//   access_token_secret: 'RVSOTt19olalZd1jw4GuQuFtLc55f8MavlNI1QqoyuRxO'
// });

// shell.exec('rm sounds/*')

var params = {locations: place};
client.get('statuses/filter', params, function(error, tweets, response){
  try {
    tweets.map(printTweet);
  } catch(error) {
    console.error(error);
  }
});

// var names = ["Albert", "Bad News", "Bahh", "Bells", "Boing", "Bubbles", "Cellos", "Deranged", "Good News", "Hysterical", "Pipe Organ", "Trinoids", "Whisper", "Zarvox"]
var names = [ "Whisper", "Whisper", "Whisper", "Whisper"] //"Albert", "Deranged", "Hysterical",
var num = 0
 // or just whisper?

// what to print
function printTweet(tweet){
    num++
    console.log(tweet.text);
    // console.log(tweet.coordinates);
    var randName = names[Math.floor(Math.random() * names.length)];
    if (shell.exec('say -v \'' + randName + '\' \'' + tweet.text + '\' -o sounds/' + (num)%20 + '.aiff').code !== 0) {
      console.error('Error: say command failed');
      // exit(1);
    }

    // play.sound('sounds/'+num+'.aiff');
    try {
      player.play('sounds/'+(num)%20 +'.aiff')
    }
    catch(err) {
      console.error("player error");
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

  client.stream('statuses/filter', {locations: place}, function(stream) { //, track: 'London'

    stream.on('data', function (data) {
      printTweet(data);
     });
      stream.on('end', function (response) {
        console.error('end \n');
        stream1();
      });

      stream.on('destroy', function (response) {
        // Handle a 'silent' disconnection from Twitter, no end/error event fired
        console.error('destory \n')
        stream1();
      });

      //setTimeout(stream.destroy, 5000);

    });
  }

stream1();
