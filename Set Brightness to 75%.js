//var step = require('step');
var say = require('say');
var HueApi = require("node-hue-api").HueApi;

var displayStatus = function(status){
	console.log(JSON.stringify(status, null, 2));
};

var displayResult = function(result) {
	console.log(result);
};

var displayError = function(err) {
	console.error(err);
};



var host = "192.168.1.3",
	username = "p9z-1woRSjjzGaskrv1aKUKewCGTrbGinU0hMcJy";
	api = new HueApi(host, username);


var TurnOn = function(){
	say.speak('Alexa, Set Hue Color lamp 1 to 75%', (err) => {
		if (err) {
		return console.error(err);
		}	
});
};
say.stop();

api.setLightState(22, {"bri": 127}) // provides a value, true = on false = off
	.then()
	.fail()
	.done();


var setLightPercent = function (){
api.getLightStatus(22, function(err, result){
	console.log("BRI:" + result.state.bri);
	console.log("ERR:" + err);
	if (err) throw err;
	displayStatus(result);
	if (result.state.bri == 191) {
	console.log("Passed");	
	} else {
	console.log("Failed");
	}
});
};

TurnOn();

//setTimeout
setTimeout(setLightPercent, 6000)