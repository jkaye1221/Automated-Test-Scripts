var say = require('say');
var HueApi = require("node-hue-api").HueApi;

var displayResults = function(result){
	console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.1.3",
	username = "p9z-1woRSjjzGaskrv1aKUKewCGTrbGinU0hMcJy";
	api = new HueApi(host, username);


var TurnOn = function(){
	say.speak('Alexa, Dim Office room to 50%', (err) => {
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
	if (result.lastAction.bri == 127) {
	console.log("Passed: Office room set to" + result.lastAction.bri);
	} else {
    console.log("Failed: Office room set to" + result.lastAction.bri + "not 171");
	}
});
};

TurnOn();

//setTimeout
setTimeout(displayGroup, 6000)