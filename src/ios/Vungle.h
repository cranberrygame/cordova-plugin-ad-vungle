#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import <VungleSDK/VungleSDK.h>

@interface Vungle : CDVPlugin<VungleSDKDelegate> {

}

@property NSString *interstitialViewCallbackId;

- (void) setUp:(CDVInvokedUrlCommand*)command;
- (void) checkAvailable:(CDVInvokedUrlCommand*)command;
- (void) showFullScreenAd:(CDVInvokedUrlCommand*)command;

@end
