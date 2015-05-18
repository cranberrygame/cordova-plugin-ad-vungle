Cordova Vungle plugin
====================
# Overview #
Show vungle rewarded video ad

[android, ios] [crodova cli] [xdk]

Requires vungle account http://www.vungle.com/

Android vungle SDK 3.2.2
iOS vungle SDK 3.0.11

This is open source cordova plugin.

You can see Plugins For Cordova in one page: http://cranberrygame.github.io?referrer=github

# Change log #
```c
```
# Install plugin #

## Cordova cli ##
```c
cordova plugin add com.cranberrygame.cordova.plugin.ad.video.vungle
```

## Xdk ##
```c
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: revmob
Plugin ID: com.cranberrygame.cordova.plugin.ad.video.vungle
[v] Plugin is located in the Apache Cordova Plugins Registry
```

## Phonegap build service (config.xml) ##
```c
<gap:plugin name="com.cranberrygame.cordova.plugin.ad.video.vungle" source="plugins.cordova.io" />
```

## Construct2 ##
Download construct2 plugin: https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/vungle/construct2.html
<br>
Now all the native plugins are installed automatically: https://plus.google.com/102658703990850475314/posts/XS5jjEApJYV
# Server setting #

<img src="https://github.com/cranberrygame/cordova-plugin-ad-video-vungle/blob/master/doc/app_id.png"><br>
<img src="https://github.com/cranberrygame/cordova-plugin-ad-video-vungle/blob/master/doc/test_mode.png">

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

	window.vungle.onRewardedVideoAdShown = function() {
		alert('onRewardedVideoAdShown');
	};
	window.vungle.onRewardedVideoAdHidden = function() {
		alert('onRewardedVideoAdHidden');
	};
	window.vungle.onRewardedVideoAdCompleted = function() {
		alert('onRewardedVideoAdCompleted');
	};	
	window.vungle.onRewardedVideoAdNotCompleted = function() {
		alert('onRewardedVideoAdNotCompleted');
	};	
}, false);

window.vungle.showRewardedVideoAd();

alert(window.vungle.isShowingRewardedVideoAd());//boolean: true or false
```
# Examples #
<a href="https://github.com/cranberrygame/cordova-plugin-ad-video-vungle/blob/master/example/basic/index.html">example/basic/index.html</a><br>

# Test #

[![](http://img.youtube.com/vi/etstZY7k6z8/0.jpg)](https://www.youtube.com/watch?v=etstZY7k6z8&feature=youtu.be "Youtube")

You can also run following test apk.
https://dl.dropboxusercontent.com/u/186681453/pluginsforcordova/vungle/apk.html

# Useful links #

Plugins For Cordova<br>
http://cranberrygame.github.io?referrer=github

# Credits #

