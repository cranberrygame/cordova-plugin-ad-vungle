
module.exports = {
	_loadedRewardedVideoAd: false,
	_isShowingRewardedVideoAd: false,	
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
				
				if (typeof result == "string") {
					if (result == "onRewardedVideoAdLoaded") {
						self._loadedRewardedVideoAd = true;

						if (self.onRewardedVideoAdLoaded)
							self.onRewardedVideoAdLoaded();
					}
					else if (result == "onRewardedVideoAdShown") {
						self._loadedRewardedVideoAd = false;
						self._isShowingRewardedVideoAd = true;
					
						if (self.onRewardedVideoAdShown)
							self.onRewardedVideoAdShown();
					}
					else if (result == "onRewardedVideoAdHidden") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdHidden)
							self.onRewardedVideoAdHidden();
					}
					else if (result == "onRewardedVideoAdCompleted") {
						self._isShowingRewardedVideoAd = false;
					
						if (self.onRewardedVideoAdCompleted)
							self.onRewardedVideoAdCompleted();
					}
/*					
					else if (result == "onRewardedVideoAdNotCompleted") {
						self._isShowingRewardedVideoAd = false;					
						
						if (self.onRewardedVideoAdNotCompleted)
							self.onRewardedVideoAdNotCompleted();
					}
*/					
				}
				else {
					//var event = result["event"];
					//var location = result["message"];				
					//if (event == "onXXX") {
					//	if (self.onXXX)
					//		self.onXXX(location);
					//}
				}
			},
			function (error) {
				console.log('setUp failed.');
			},
            'Vungle',
            'setUp',			
			[appId]
        ); 
    },
    showRewardedVideoAd: function () {
		var self = this;
		cordova.exec(
 			null,
            null,
            'Vungle',
            'showRewardedVideoAd',
            []
        ); 
    },
	loadedRewardedVideoAd: function() {
		return this._loadedRewardedVideoAd;
	},	
	isShowingRewardedVideoAd: function() {
		return this._isShowingRewardedVideoAd;
	},
/*	
	//
	onAvailable: null,//deprecated
	onUnavailable: null,//deprecated
*/	
	//
	onRewardedVideoAdLoaded: null,
	onRewardedVideoAdShown: null,
	onRewardedVideoAdHidden: null,
	onRewardedVideoAdCompleted: null
/*	
	onRewardedVideoAdNotCompleted: null
*/	
};
