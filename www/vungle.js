
module.exports = {
	tag: '',
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
    checkAvailable: function(tag) {
		var self = this;
		cordova.exec(
            function (result) {
				self.tag = tag;			
				if (self.onAvailable)
					self.onAvailable();
			},
            function (error) {
				self.tag = tag;			
				if (self.onUnavailable)
					self.onUnavailable();
			},
            'Vungle',
            'checkAvailable',
            []
        ); 
    },	
    showFullScreenAd: function(tag) {
		var self = this;
		cordova.exec(
            function (result) {
				self.tag = tag;			
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
