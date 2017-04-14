var say = require('say');
var HueApi = require("node-hue-api").HueApi;

var displayResults = function(status){
	console.log(JSON.stringify(status, null, 2));
};

var host = "192.168.1.3",
	username = "p9z-1woRSjjzGaskrv1aKUKewCGTrbGinU0hMcJy";
	api = new HueApi(host, username);


var TurnOn = function(){
	say.speak('Alexa, Turn off Office room', (err) => {
		if (err) {
		return console.error(err);
		}	
});
};
say.stop();

//Obtain the status of light '4'
// ---------------------
var GetGroup = function () {
api.getGroup(4, function(err, result){
	if (err) throw err;
	displayResults(result);
	var re = /"on"\s*:\s*false\s*,/;
	if (re.test(result)) {
	console.log("Passed");
	} else {
    console.log("Failed");
	}
});
};

TurnOn();

//setTimeout
setTimeout(GetGroup, 8000)
