
module.exports = {
	init: function (vungleid, config, successcb, errorcb) {
		window.cordova.exec(function () {
			if (successcb)
				successcb();
		}, function (err) {
			if (errorcb)
				errorcb(err);
		}, "CordovaVungle", "init", [vungleid, config]);
	},
	playAd: function (config, successcb, errorcb) {
		window.cordova.exec(function (completed) {
			if (successcb)
				successcb(completed);
		}, function (err) {
			if (errorcb)
				errorcb(err);
		}, "CordovaVungle", "playAd", [config]);
	},
	isVideoAvailable: function (successcb, errorcb) {
		window.cordova.exec(function (s) {
			successcb(s == 1 ? true : false);
		}, function (err) {
			if (errorcb)
				errorcb(err);
		}, "CordovaVungle", "isVideoAvailable", []);
	}
};
