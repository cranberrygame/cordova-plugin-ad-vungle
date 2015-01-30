#import "Vungle.h"

@implementation Vungle

@synthesize interstitialViewCallbackId;

//static NSString* interstitialViewCallbackId = nil;
static NSMutableDictionary* mConfig = nil;

- (void) setUp:(CDVInvokedUrlCommand*)command {
	NSString *appId = [command.arguments objectAtIndex: 0];
    
    NSLog(@"%@", @"setUp");
    NSLog(@"%@", appId);
    
    VungleSDK* sdk = [VungleSDK sharedSDK];
    // start vungle publisher library
    [sdk startWithAppId:appId];
    [sdk setDelegate:self];

    NSMutableDictionary* config = [[NSMutableDictionary alloc] init];
	//[config setObject:[config objectForKey:@"orientation"] forKey:VunglePlayAdOptionKeyOrientations]; // !! Be careful, not the same behaviour with android
	mConfig = config;
    
	CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
	//[pr setKeepCallbackAsBool:YES];
	[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
	//CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	//[pr setKeepCallbackAsBool:YES];
	//[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];	
}

- (void) checkAvailable:(CDVInvokedUrlCommand*)command
{
    NSLog(@"%@", @"checkAvailable");
    
    BOOL available = [[VungleSDK sharedSDK] isCachedAdAvailable];
    
	if (available) {
        NSLog(@"%@", @"available");
        
		CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
		//[pr setKeepCallbackAsBool:YES];
		[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
		//CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		//[pr setKeepCallbackAsBool:YES];
		//[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
	}
	else {
        NSLog(@"%@", @"unavailable");
        
		//CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
		//[pr setKeepCallbackAsBool:YES];
		//[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
		CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		//[pr setKeepCallbackAsBool:YES];
		[self.commandDelegate sendPluginResult:pr callbackId:command.callbackId];
	}
}

- (void) showFullScreenAd:(CDVInvokedUrlCommand*)command
{
    BOOL available = [[VungleSDK sharedSDK] isCachedAdAvailable];
    if (!available)
        return;
    
    self.interstitialViewCallbackId = command.callbackId; // we will use it in delegate
    
    [[VungleSDK sharedSDK] playAd:self.viewController withOptions:mConfig];
}

/**
 * If implemented, this will get called when ad ad has cached. It's now ready to play!
*/
- (void)vungleSDKhasCachedAdAvailable
{
    NSLog(@"%@", @"vungleSDKhasCachedAdAvailable");
}

/**
 * If implemented, this will get called when the SDK is about to show an ad. This point
 * might be a good time to pause your game, and turn off any sound you might be playing.
*/
- (void)vungleSDKwillShowAd
{
    NSLog(@"%@", @"onFullScreenAdShown");
    
    CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"onFullScreenAdShown"];
	[pr setKeepCallbackAsBool:YES];
	[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
    //CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	//[pr setKeepCallbackAsBool:YES];
	//[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
}

/**
 * If implemented, this will get called when the SDK closes the ad view, but that doesn't always mean
 * the ad experience is complete. There might be a product sheet that will be presented.
 * This point might be a good place to resume your game if there's no product sheet being presented.
 * If the product sheet will be shown, we recommend waiting for it to close before you resume,
 * show a reward confirmation to the user, etc. The viewInfo dictionary will contain the following keys:
 * - "completedView": NSNumber representing a BOOL whether or not the video can be considered a
 *                full view.
 * - "playTime": NSNumber representing the time in seconds that the user watched the video.
 * - "didDownlaod": NSNumber representing a BOOL whether or not the user clicked the download
 *                  button.
 */
- (void)vungleSDKwillCloseAdWithViewInfo:(NSDictionary*)viewInfo willPresentProductSheet:(BOOL)willPresentProductSheet
{
    BOOL isCompletedView = (BOOL)[viewInfo valueForKey:@"completedView"];
	
	if (isCompletedView) {
        NSLog(@"%@", @"onFullScreenAdCompleted");

		CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"onFullScreenAdCompleted"];
		[pr setKeepCallbackAsBool:YES];
		[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
		//CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		//[pr setKeepCallbackAsBool:YES];
		//[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];			
	}
	else {
		NSLog(@"%@", @"onFullScreenAdNotCompleted");
	
		CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"onFullScreenAdNotCompleted"];
		[pr setKeepCallbackAsBool:YES];
		[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
		//CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
		//[pr setKeepCallbackAsBool:YES];
		//[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];					
	}
}

/**
 * If implemented, this will get called when the product sheet is about to be closed.
 * It will only be called if the product sheet was shown.
 */
- (void)vungleSDKwillCloseProductSheet:(id)productSheet
{
    NSLog(@"%@", @"onFullScreenAdHidden");
 
    CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"onFullScreenAdHidden"];
    [pr setKeepCallbackAsBool:YES];
	[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
    //CDVPluginResult* pr = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	//[pr setKeepCallbackAsBool:YES];
	//[self.commandDelegate sendPluginResult:pr callbackId:self.interstitialViewCallbackId];
}

 - (void)dealloc {
  [[VungleSDK sharedSDK] setDelegate:nil];
}

@end
