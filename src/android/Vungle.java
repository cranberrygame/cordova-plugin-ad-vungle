//Copyright (c) 2014 Sang Ki Kwon (Cranberrygame)
//Email: cranberrygame@yahoo.com
//Homepage: http://www.github.com/cranberrygame
//License: MIT (http://opensource.org/licenses/MIT)
package com.cranberrygame.phonegap.plugin.ad;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import android.annotation.TargetApi;
import android.app.Activity;
import android.util.Log;
//
import com.vungle.publisher.AdConfig;
import com.vungle.publisher.EventListener;
import com.vungle.publisher.Orientation;
import com.vungle.publisher.VunglePub;

public class Vungle extends CordovaPlugin {
	private final String LOG_TAG = "Vungle";
	
	// get the VunglePub instance
	final VunglePub vunglePub = VunglePub.getInstance();
	
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		super.initialize(cordova, webView);
    }
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException
	{
		//args.length()
		//args.getString(0)
		//args.getString(1)
		//args.getInt(0)
		//args.getInt(1)
		//args.getBoolean(0)
		//args.getBoolean(1)
		//JSONObject json = args.optJSONObject(0);
		//json.optString("adUnit")
		//json.optString("adUnitFullScreen")
		//JSONObject inJson = json.optJSONObject("inJson");
		
		Log.d(LOG_TAG, action);
		
		if (action.equals("setUp")) {
			//Activity activity = cordova.getActivity();
			//webView
			//
			final String appId = args.getString(0);				
			Log.d(LOG_TAG, appId);

			
			cordova.getActivity().runOnUiThread(new Runnable(){
				@Override
				public void run() {						
					vunglePub.init(cordova.getActivity(), appId);

					final AdConfig config = vunglePub.getGlobalAdConfig();
					config.setOrientation(Orientation.autoRotate);//for android
					//config.setOrientation(Orientation.matchVideo);
					
					PluginResult pr = new PluginResult(PluginResult.Status.OK);
					//pr.setKeepCallback(true);
					callbackContext.sendPluginResult(pr);
					//PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
					//pr.setKeepCallback(true);
					//callbackContext.sendPluginResult(pr);					
				}
			});
			
			return true;
		}
		else if (action.equals("checkAvailable")) {
			//Activity activity = cordova.getActivity();
			//webView
			//
			
			final boolean available = vunglePub.isCachedAdAvailable();
			
			cordova.getActivity().runOnUiThread(new Runnable(){
				@Override
				public void run() {
					if (available) {
						Log.d(LOG_TAG, "available");
						
						PluginResult pr = new PluginResult(PluginResult.Status.OK);
						//pr.setKeepCallback(true);
						callbackContext.sendPluginResult(pr);
					}
					else {
						Log.d(LOG_TAG, "unavailable");
						
						PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
						//pr.setKeepCallback(true);
						callbackContext.sendPluginResult(pr);
					}
				}
			});
			
			return true;
		}		
		else if (action.equals("showFullScreenAd")) {
			//Activity activity = cordova.getActivity();
			//webView
			//

			vunglePub.setEventListener(new EventListener() {
				@Override
				public void onCachedAdAvailable() {
					Log.d(LOG_TAG, "onCachedAdAvailable");
				}
				
				@Override
				public void onAdUnavailable(String arg0) {
					Log.d(LOG_TAG, "onAdUnavailable");
				}
				
				@Override
				public void onAdStart() {//cranberrygame
					// Called before playing an ad
					Log.d(LOG_TAG, "onFullScreenAdShown");
					
					PluginResult pr = new PluginResult(PluginResult.Status.OK, "onFullScreenAdShown");
					pr.setKeepCallback(true);
					callbackContext.sendPluginResult(pr);
					//PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
					//pr.setKeepCallback(true);
					//callbackContext.sendPluginResult(pr);					
				}

				@Override
				public void onVideoView(boolean isCompletedView, int watchedMillis, int videoDurationMillis) {
					// Called each time an ad completes. isCompletedView is true if at least  
					// 80% of the video was watched, which constitutes a completed view.  
					// watchedMillis is for the longest video view (if the user replayed the 
					// video).
					if (isCompletedView) {
						Log.d(LOG_TAG, "onFullScreenAdCompleted");

						PluginResult pr = new PluginResult(PluginResult.Status.OK, "onFullScreenAdCompleted");
						pr.setKeepCallback(true);
						callbackContext.sendPluginResult(pr);
						//PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
						//pr.setKeepCallback(true);
						//callbackContext.sendPluginResult(pr);
					}
					else {
						Log.d(LOG_TAG, "onFullScreenAdNotCompleted");
						
						PluginResult pr = new PluginResult(PluginResult.Status.OK, "onFullScreenAdNotCompleted");
						pr.setKeepCallback(true);
						callbackContext.sendPluginResult(pr);
						//PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
						//pr.setKeepCallback(true);
						//callbackContext.sendPluginResult(pr);
					}
				}

				@Override
				public void onAdEnd(boolean wasCallToActionClicked) {//cranberrygame
					// Called when the user leaves the ad and control is returned to your application
					Log.d(LOG_TAG, "onFullScreenAdHidden");
					
					PluginResult pr = new PluginResult(PluginResult.Status.OK, "onFullScreenAdHidden");
					pr.setKeepCallback(true);
					callbackContext.sendPluginResult(pr);
					//PluginResult pr = new PluginResult(PluginResult.Status.ERROR);
					//pr.setKeepCallback(true);
					//callbackContext.sendPluginResult(pr);					
				}
			});
			
			final AdConfig overrideConfig = new AdConfig();			
			
			cordova.getActivity().runOnUiThread(new Runnable(){
				@Override
				public void run() {
					vunglePub.playAd(overrideConfig);
				}
			});
			
			return true;
		}

		return false; // Returning false results in a "MethodNotFound" error.			
	}	
} 