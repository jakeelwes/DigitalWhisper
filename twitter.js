// run with shjs for terminal cmds, not node
// to escape erors run with forever forever -c shjs twitter.js 2> /dev/null (rpi forever twitter.js 2> /dev/null)


var Twitter = require('ntwitter');
var shell = require('shelljs');

var slade = '-0.208037, 51.368398, -0.058011, 51.644031'; //51.524950, -0.134487
var bern = '7.031798, 46.042613, 8.241403, 47.248413'; //
var baltic = ' -1.616787, 54.964929, -1.594278, 54.980554'; //54.968975, -1.598771

var place = bern;


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

    var rand = Math.random();
    if(rand<0.7){
	     var voice = 'whisper';
    }else{
	     var voice = 'whisperf';
    }
    var pitch = Math.random() * (70);
    var speed = Math.random() * (180-130) + 130;
    var emphisis = Math.random() * (20-10) + 10;

    var rand2 = Math.random();
    if(place == bern){
      if(rand2<0.3){
         var lang = 'de';
      }else if(rand2>0.3){
         var lang = 'fr';
      }
    } else {
      var lang = 'en';
    }

    if (shell.exec('espeak -v'+lang+'+'+voice+' -k'+emphisis+' -s'+speed+' -p'+pitch+' -m \"' + tweet.text + '\" --stdout | aplay -r 22050 -D \'reverb\'', {async: true}).code !== 0) {
      // console.error('Error: say command failed');
      // exit(1);
    }

// low pass 1000-6000
// less wet
// set amount of says then wait for next batch (wait on async) close down stream

}

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
//setInterval(stream1(), 50000);


//if jack server is not running or cannot be started
//pulseaudio --kill
//jack_control start
//jack_control exit
//pulseaudio --start
