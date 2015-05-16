//Copyright (c) 2014 Sang Ki Kwon (Cranberrygame)
//Email: cranberrygame@yahoo.com
//Homepage: http://cranberrygame.github.io
//License: MIT (http://opensource.org/licenses/MIT)
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import <VungleSDK/VungleSDK.h>

@interface Vungle : CDVPlugin <VungleSDKDelegate>

@property NSString *callbackIdKeepCallback;
//
@property NSString *email;
@property NSString *licenseKey_;
@property BOOL validLicenseKey;
//
@property NSString *appId;

- (void) setLicenseKey: (CDVInvokedUrlCommand*)command;
- (void) setUp:(CDVInvokedUrlCommand*)command;
- (void) checkAvailable:(CDVInvokedUrlCommand*)command;
- (void) showRewardedVideoAd:(CDVInvokedUrlCommand*)command;

@end
