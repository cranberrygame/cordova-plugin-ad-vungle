
module.exports = {

	setUp: function(appId) {
        cordova.exec(
            function (result) {
			}, 
			function (error) {
			},
            'Vungle',
            'setUp',			
            [appId]
        ); 
    },
    checkAvailable: function() {
		var self = this;
		cordova.exec(
            function (result) {
				if (self.onAvailable)
					self.onAvailable();
			},
            function (error) {
				if (self.onUnavailable)
					self.onUnavailable();
			},
            'Vungle',
            'checkAvailable',
            []
        ); 
    },	
    showFullScreenAd: function() {
		var self = this;
		cordova.exec(
            function (result) {
				if (result == "onFullScreenAdShown") {
					if (self.onFullScreenAdShown)
						self.onFullScreenAdShown();
				}
				else if (result == "onFullScreenAdHidden") {
					 if (self.onFullScreenAdHidden)
						self.onFullScreenAdHidden();
				}
				else if (result == "onFullScreenAdCompleted") {
					if (self.onFullScreenAdCompleted)
						self.onFullScreenAdCompleted();
				}
				else if (result == "onFullScreenAdNotCompleted") {
					if (self.onFullScreenAdNotCompleted)
						self.onFullScreenAdNotCompleted();
				}
			},
            function (error) {
			},
            'Vungle',
            'showFullScreenAd',
            []
        ); 
    },
	//
	onAvailable: null,
	onUnavailable: null,
	//
	onFullScreenAdShown: null,
	onFullScreenAdCompleted: null,
	onFullScreenAdNotCompleted: null,
	onFullScreenAdHidden: null
};
