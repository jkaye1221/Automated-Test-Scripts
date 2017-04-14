var say = require('say');
var HueApi = require("node-hue-api").HueApi;

var displayResults = function(result){
	console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.1.3",
	username = "p9z-1woRSjjzGaskrv1aKUKewCGTrbGinU0hMcJy";
	api = new HueApi(host, username);


var TurnOn = function(){
	say.speak('Alexa, Turn On Office room', (err) => {
		if (err) {
		return console.error(err);
		}	
});
};
say.stop();

//Obtain the status of light '4'
// ---------------------
var displayGroup = function (){
api.getGroup(4, function(err, result){
	console.log("Name:" + result.name + result.lights);
	console.log("ERR:" + err);
	if (err) throw err;
	displayResults(result);
	if (result.lastAction.on == true) {
	console.log("Passed");
	} else {
    console.log("Failed");
	}
});
};

TurnOn();

//setTimeout
setTimeout(displayGroup, 6000)
