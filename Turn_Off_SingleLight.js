//var step = require('step');
var say = require('say');
var HueApi = require("node-hue-api").HueApi;

var displayStatus = function(status){
	console.log(JSON.stringify(status, null, 2));
};

var host = "192.168.1.3",
	username = "p9z-1woRSjjzGaskrv1aKUKewCGTrbGinU0hMcJy";
	api = new HueApi(host, username);


var TurnOn = function(){
	say.speak('Alexa, Turn off Hue Color lamp 1', (err) => {
		if (err) {
		return console.error(err);
		}	
});
};
say.stop();

//Obtain the status of light '22'
// ---------------------
var LightStatus = function () {
api.getLightStatus(22, function(err, result){
	console.log("ON: " + result.state.on);
	console.log("ERR:" + err);
	if (err) throw err;
	displayStatus(result);
	if (result.state.on == false) {
	console.log("Passed");
	} else {
    console.log("Failed");
	}
});
};

TurnOn();

//setTimeout
setTimeout(LightStatus, 6000)