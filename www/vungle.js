
module.exports = {
	_isShowingRewardedVideoAd: false,	
	tag: '',
	setLicenseKey: function (email, licenseKey) {
		var self = this;	
        cordova.exec(
            null,
            null,
            'Vungle',
            'setLicenseKey',			
            [email, licenseKey]
        ); 
    },
	setUp: function (appId) {
		var self = this;	
        cordova.exec(
			function (result) {
				console.log('setUp succeeded.');				
/*				
				if (typeof result == "string") {
					if (result == "onAvailable") {
						if (self.onAvailable)
							self.onAvailable();
					}
					else if (result == "onRewardedVideoAdShown") {
						self._isShowingRewardedVideoAd = true;
					
						if (self.onRewardedVideoAdShown)
							self.onRewardedVideoAdShown();
					}
					else if (result == "onRewardedVideoAdHidden") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdHidden)
							self.onRewardedVideoAdHidden();
					}
					//
					else if (result == "onRewardedVideoAdCompleted") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdCompleted)
							self.onRewardedVideoAdCompleted();
					}
					else if (result == "onRewardedVideoAdNotCompleted") {
						self._isShowingRewardedVideoAd = false;					
						
						if (self.onRewardedVideoAdNotCompleted)
							self.onRewardedVideoAdNotCompleted();
					}
				}
				else {
					//if (result["event"] == "onXXX") {
					//	//result["message"]
					//	if (self.onXXX)
					//		self.onXXX(result);
					//}
				}
*/				
			},
			function (error) {
				console.log('setUp failed.');
/*			
				if (typeof error == "string") {
					if (error == "onUnavailable") {
						if (self.onUnavailable)
							self.onUnavailable();
					}
				}
				else {
					//if (error["event"] == "onXXX") {
					//	//error["message"]
					//	if (self.onXXX)
					//		self.onXXX(error);
					//}
				}
*/				
			},
            'Vungle',
            'setUp',			
			[appId]
        ); 
    },
    checkAvailable: function (tag) {
		var self = this;
		cordova.exec(
			function (result) {
				console.log('checkAvailable succeeded.');
				
				self.tag = tag;				
				if (typeof result == "string") {
					if (result == "onAvailable") {
						if (self.onAvailable)
							self.onAvailable();
					}
				}
				else {
					//if (result["event"] == "onXXX") {
					//	//result["message"]
					//	if (self.onXXX)
					//		self.onXXX(result);
					//}
				}
			},
			function (error) {
				console.log('checkAvailable failed.');
				
				self.tag = tag;				
				if (typeof error == "string") {
					if (error == "onUnavailable") {
						if (self.onUnavailable)
							self.onUnavailable();
					}
				}
				else {
					//if (error["event"] == "onXXX") {
					//	//error["message"]
					//	if (self.onXXX)
					//		self.onXXX(error);
					//}
				}				
			},			
            'Vungle',
            'checkAvailable',
            []
        ); 
    },	
    showRewardedVideoAd: function (tag) {
		var self = this;
		cordova.exec(
			function (result) {
				console.log('showRewardedVideoAd succeeded.');
				
				self.tag = tag;				
				if (typeof result == "string") {
					if (result == "onRewardedVideoAdShown") {
						self._isShowingRewardedVideoAd = true;
					
						if (self.onRewardedVideoAdShown)
							self.onRewardedVideoAdShown();
					}
					else if (result == "onRewardedVideoAdHidden") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdHidden)
							self.onRewardedVideoAdHidden();
					}
					//
					else if (result == "onRewardedVideoAdCompleted") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdCompleted)
							self.onRewardedVideoAdCompleted();
					}
					else if (result == "onRewardedVideoAdNotCompleted") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdNotCompleted)
							self.onRewardedVideoAdNotCompleted();
					}
				}
				else {
					//if (result["event"] == "onXXX") {
					//	//result["message"]
					//	if (self.onXXX)
					//		self.onXXX(result);
					//}
				}
			},
			function (error) {
				console.log('showRewardedVideoAd failed.');
			},
            'Vungle',
            'showRewardedVideoAd',
            []
        ); 
    },
	isShowingRewardedVideoAd: function() {
		return this._isShowingRewardedVideoAd;
	},	
	//
	onAvailable: null,
	onUnavailable: null,
	//
	onRewardedVideoAdShown: null,
	onRewardedVideoAdHidden: null,
	onRewardedVideoAdCompleted: null,
	onRewardedVideoAdNotCompleted: null
};
