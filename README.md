Cordova Vungle plugin
====================
# Overview #
Show vungle rewarded video ad

[android, ios] [crodova cli] [xdk]

Requires vungle account http://www.vungle.com/

Android vungle SDK 3.3.0
iOS vungle SDK 3.0.11

This is open source cordova plugin.

You can see Plugins For Cordova in one page: http://cranberrygame.github.io?referrer=github

# Change log #
```c
```
# Install plugin #

## Cordova cli ##
https://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface - npm install -g cordova@5.0.0
```c
cordova plugin add cordova-plugin-ad-vungle
```

## Xdk ##
https://software.intel.com/en-us/intel-xdk - Download XDK - XDK PORJECTS - [specific project] - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -
```c
Name: vungle
Plugin ID: com.cranberrygame.cordova.plugin.ad.vungle
[v] Plugin is located in the Apache Cordova Plugins Registry
```

## Cocoon ##
https://cocoon.io - Create project - [specific project] - Setting - Plugins - Custom - Git Url: https://github.com/cranberrygame/cordova-plugin-ad-vungle.git - INSTALL - Save<br>

## Phonegap build service (config.xml) ##
https://build.phonegap.com/ - Apps - [specific project] - Update code - Zip file including config.xml
```c
<gap:plugin name="cordova-plugin-ad-vungle" source="npm" />
```

## Construct2 ##
Download construct2 plugin: http://www.paywithapost.de/pay?id=4ef3f2be-26e8-4a04-b826-6680db13a8c8
<br>
Now all the native plugins are installed automatically: https://plus.google.com/102658703990850475314/posts/XS5jjEApJYV
# Server setting #

<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/app_id.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/test_mode.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/ios1.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/ios2.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/ios3.png"><br>
<img src="https://raw.githubusercontent.com/cranberrygame/cordova-plugin-ad-vungle/master/doc/ios4.png">

```c
test mode setting: 
https://www.vungle.com - Login - Applications - [specific app] - Status - Select Test Node, Active or Inactive

[android]

[ios]

//check Push Notifications
https://developer.apple.com/devcenter/ios/index.action - Certificates, Identifiers & Profiles - Identifiers - App IDs - pickupsticks - Edit - check Push Notifications

cf)

We have discovered one or more issues with your recent delivery for "xxx". 
Your delivery was successful, but you may wish to correct the following issues in your next delivery:

Missing Push Notification Entitlement - Your app appears to include API used to register with the Apple Push Notification service, 
but the app signature's entitlements do not include the "aps-environment" entitlement. 
If your app uses the Apple Push Notification service, make sure your App ID is enabled for Push Notification in the Provisioning Portal, 
and resubmit after signing your app with a Distribution provisioning profile that includes the "aps-environment" entitlement. 
See "Provisioning and Development" in the Local and Push Notification Programming Guide for more information. 
If your app does not use the Apple Push Notification service, no action is required. 
You may remove the API from future submissions to stop this warning. 
If you use a third-party framework, you may need to contact the developer for information on removing the API.
```
# API #
```javascript
var appId = "REPLACE_THIS_WITH_YOUR_APP_ID";
/*
var appId;
//android
if (navigator.userAgent.match(/Android/i)) {
	appId = "REPLACE_THIS_WITH_YOUR_APP_ID";
}
//ios
else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	appId = "REPLACE_THIS_WITH_YOUR_APP_ID";
}
*/

document.addEventListener("deviceready", function(){
	//if no license key, 2% ad traffic share for dev support.
	//you can get free license key from https://play.google.com/store/apps/details?id=com.cranberrygame.pluginsforcordova
	//window.vungle.setLicenseKey("yourEmailId@yourEmaildDamin.com", "yourFreeLicenseKey");

	window.vungle.setUp(appId);

	window.vungle.onRewardedVideoAdLoaded = function() {
		alert('onRewardedVideoAdLoaded');
	};
	window.vungle.onRewardedVideoAdShown = function() {
		alert('onRewardedVideoAdShown');
	};
	window.vungle.onRewardedVideoAdHidden = function() {
		alert('onRewardedVideoAdHidden');
	};
	window.vungle.onRewardedVideoAdCompleted = function() {
		alert('onRewardedVideoAdCompleted');
	};	
}, false);

window.vungle.showRewardedVideoAd();

alert(window.vungle.loadedRewardedVideoAd());//boolean: true or false

alert(window.vungle.isShowingRewardedVideoAd());//boolean: true or false
```
# Examples #
<a href="https://github.com/cranberrygame/cordova-plugin-ad-vungle/blob/master/example/basic/index.html">example/basic/index.html</a><br>

# Test #

[![](http://img.youtube.com/vi/etstZY7k6z8/0.jpg)](https://www.youtube.com/watch?v=etstZY7k6z8&feature=youtu.be "Youtube")

You can also run following test apk.
https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/vungle/apk.html

# Useful links #

Plugins For Cordova<br>
http://cranberrygame.github.io?referrer=github

# Credits #

