document.addEventListener('DOMContentLoaded', function() {
	if (window.didLoad_main) return;
	window.didLoad_main = true;
		
	var isIFrame = window.frameElement && (window.frameElement.nodeName == "IFRAME");
	if (true && !isIFrame) {
		window.location.replace(window.location.protocol + "//" + window.location.hostname);
	} else {
		var pageStartTimeMSEC = Date.now();
		var cbidg = "62B1EB587D30B208";
		var gameDiv = document.getElementById("GameDiv");
		var gameCanvas = document.getElementById("GameCanvas");	
		var gameAxDivContainer = document.getElementById("gameAxDivContainer");	
	var _isGameAreaAdActive = false;
	var _gameInitialized = false; // Track if game menu has been initialized
	var _isGamePlaying = false; // Track if game is currently playing (not paused)
	var _isFirstLoad = true; // First load shows click-to-play overlay
	
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
			(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && window.screen.width <= 1024);
		
		var isAFGHTML5EnabledOnMobile = true;
		var TET_ENV__ADS_INTERSTITIAL_AFGH5_ENABLED = true;
		var isAFGHTML5Enabled = isMobile ? isAFGHTML5EnabledOnMobile &&  TET_ENV__ADS_INTERSTITIAL_AFGH5_ENABLED : TET_ENV__ADS_INTERSTITIAL_AFGH5_ENABLED;
		
		//----------------------------------------------------------------
	
		if (isAFGHTML5Enabled) {
			window.axGAFGHTML_didOnReadyTimeout = false;
			onReadyElapsedTimeSEC = 0;
			var onReadyTimeoutInterval = setInterval(function () {
				onReadyElapsedTimeSEC++;
				var onReadyTimeoutLimitSEC = 5;
				var isReady;
				if (false) {
					isReady = ((onReadyElapsedTimeSEC > onReadyTimeoutLimitSEC))
				}
				else {
					isReady = ((onReadyElapsedTimeSEC > onReadyTimeoutLimitSEC) && window.mBPSApp)
				}
				if (isReady) {
					clearInterval(onReadyTimeoutInterval);
					_isGameAreaAdActive = true;
					axGAFGHTML5_onReadyTimeout();
				}
			}, 1000);
		
			window.adsbygoogle = window.adsbygoogle || [];
			var adBreak = adConfig = function (o) { adsbygoogle.push(o); }
			adConfig({
				preloadAdBreaks: 'on',
				onReady: () => {
					return;
				}
			});
		}
		else {
			_isGameAreaAdActive = true;
			onGameAreaAdComplete();
		}
	
		//----------------------------------------------------------------
				
		if (false) {
			function UnityProgress(gameInstance, progress) {
				if (progress == 1) {
					removeLoadingDisplay();
				}
			}
			var UnityGameInstance = UnityLoader.instantiate("GameDiv", "%UNITY_WEBGL_BUILD_URL%", { onProgress: UnityProgress });
		}
	
		//----------------------------------------------------------------
	
		function openURL(pURL, pTargetNewWindow) { /* NOP */ }
		window.openURL = openURL;
	
		function getPageElapsedTimeMSEC() { return 0; }
		window.getPageElapsedTimeMSEC = getPageElapsedTimeMSEC;
	
		function TGREAIGRIMZPFHREXNXJUMGJNGRPCNDK() { return 0; }
		window.TGREAIGRIMZPFHREXNXJUMGJNGRPCNDK = TGREAIGRIMZPFHREXNXJUMGJNGRPCNDK;
	
		function PCDFCJSRUMBRFNRKJOJKWNSJNMNFONFLPFTKYSBKDT() { return 999999999; }
		window.PCDFCJSRUMBRFNRKJOJKWNSJNMNFONFLPFTKYSBKDT = PCDFCJSRUMBRFNRKJOJKWNSJNMNFONFLPFTKYSBKDT;
	
		function getCBID() { return cbidg; }
		window.getCBID = getCBID;
	
		function getGameDiv() { return gameDiv ? gameDiv : document.getElementById("GameDiv"); }
		window.getGameDiv = getGameDiv;
	
		function getGameCanvas() { return gameCanvas ? gameCanvas : document.getElementById("GameCanvas"); }
		window.getGameCanvas = getGameCanvas;
	
		function getCurrentYear() { return new Date().getFullYear(); }
		window.getCurrentYear = getCurrentYear;
	
		function gameLoadingSceneIsReady() { removeLoadingDisplay(); }
		window.gameLoadingSceneIsReady = gameLoadingSceneIsReady;
	
		function removeLoadingDisplay() {
			try {
				var loadingText = document.getElementById('loadingText');
				if (loadingText) { loadingText.parentNode.removeChild(loadingText); }
				var loadingDisplay = document.getElementById('loadingDisplay');
				if (loadingDisplay) { loadingDisplay.parentNode.removeChild(loadingDisplay); }
			} catch (e) { }
		}
		window.removeLoadingDisplay = removeLoadingDisplay;
		
		// ----------------------------------------------------------------
	
		function trackGUAEvent(category, action, opt_label, opt_value, opt_noninteraction) { /* NOP */ }
		window.trackGUAEvent = trackGUAEvent;
		
		if (true) {
			function trackGA4PageEvent(pEventName, pParameters) { trackGA4Event(pEventName, pParameters); }
			function trackGA4GameEvent(pEventName, pParameters) { trackGA4Event(pEventName, pParameters); }
		} else if (false) {
			function trackGA4PageEvent(pEventName, pParameters) { trackGA4Event(pEventName, JSON.parse(pParameters)); }
			function trackGA4GameEvent(pEventName, pParameters) { trackGA4Event(pEventName, JSON.parse(pParameters)); }
		}
		window.trackGA4PageEvent = trackGA4PageEvent;
		window.trackGA4GameEvent = trackGA4GameEvent;
	
		function trackGA4Event(pEventName, pParameters) {
			if (true) {
				try {
					var eventOrigin = 'tetris';
					pParameters['event_origin'] = eventOrigin;
					pParameters['event_url'] = window.location.href;
					gtag('event', pEventName, pParameters);
				} catch (e) {}
			}
		}
		window.trackGA4Event = trackGA4Event;
	
		// ----------------------------------------------------------------
	
		function setGameDivContainerIsVisible( pIsVisible ) {
			gameDiv.style.display = pIsVisible ? "flex" : "none";
		}
		window.setGameDivContainerIsVisible = setGameDivContainerIsVisible;
		
		function setGameAxDivContainerIsVisible( pIsVisible ) {
			if (gameAxDivContainer == null) { return; }
			gameAxDivContainer.style.display = pIsVisible ? "flex" : "none";
		}
		window.setGameAxDivContainerIsVisible = setGameAxDivContainerIsVisible;
	
		// ----------------------------------------------------------------
	
		var lastAdRefreshOnActionTimeSEC = Date.now() / 1000;
		var lastAdRefreshOnTimeIntervalTimeSEC = Date.now() / 1000;
	
	// Track game over to reset playing state
	function handleGameOver() {
		_isGamePlaying = false; // Reset so next play shows ad
		console.log("[Game] Game over - reset playing state");
	}
	window.handleGameOver = handleGameOver;
	
	function refreshAds(pTrigger = 'GameStarted', pAdSlotIndex = -1) {
		// Reset playing state on game over
		if (pTrigger === 'GameOverExited') {
			_isGamePlaying = false;
			console.log("[Game] Game over exited - reset playing state for next play");
		}
		
		if (!canRefreshAds(pTrigger)) { return; }
	
			try {
				if (pAdSlotIndex < 0)
				{
					window.parent.googletag.pubads().refresh();
				}
				else
				{
					// window.parent.googletag.pubads().refresh(FIXME);
				}
			} catch (e) {}
	
			switch (pTrigger)
			{
				case 'GameOverExited':
				case 'GamePaused': 
				case 'GameUnpaused': 
					lastAdRefreshOnActionTimeSEC = Date.now() / 1000;
					break;
				case 'TimeInterval':
					lastAdRefreshOnTimeIntervalTimeSEC = Date.now() / 1000;
					break;
			}	
		}
		window.refreshAds = refreshAds;
	
		function canRefreshAds(pTrigger = 'GameStarted')
		{
			return false;
		}
		window.canRefreshAds = canRefreshAds;
	
		function isGameAreaAdEnabled() { return isAFGHTML5Enabled; }
		window.isGameAreaAdEnabled = isGameAreaAdEnabled;
	
		function isGameAreaAdActive() { return _isGameAreaAdActive; }
		window.isGameAreaAdActive = isGameAreaAdActive;
	
	function showGameAreaAd(pType = 'next') {
			onGameAreaAdComplete();
		}
		
	window.showGameAreaAd = showGameAreaAd;
	
	function onGameAreaAdComplete() {
		if ( !_isGameAreaAdActive ) { return; }

		// Re-enable pointer events on canvas
		var gameCanvas = document.getElementById("GameCanvas");
		if (gameCanvas) {
			gameCanvas.style.pointerEvents = 'auto';
			console.log("[Game] Re-enabled canvas pointer events");
		}
		
		// Restore game visibility
		try {
			var gameDiv = document.getElementById("GameDiv") || document.getElementById("gameContainer") || document.getElementById("unity-container");
			if (gameDiv && gameDiv._previousVisibility !== undefined) {
				gameDiv.style.visibility = gameDiv._previousVisibility || 'visible';
				console.log("[Game] Restored game container visibility");
			}
		} catch (err) {}
		
		// Unmute ALL game audio after ad completes
		try {
			var audioElements = document.querySelectorAll('audio');
			audioElements.forEach(function(audio) {
				audio.muted = false;
				if (audio._previousVolume !== undefined) {
					audio.volume = audio._previousVolume;
				}
				if (audio._wasPlaying) {
					audio.play();
				}
			});
			var videoElements = document.querySelectorAll('video');
			videoElements.forEach(function(video) {
				if (video._wasMuted !== undefined) {
					video.muted = video._wasMuted;
				} else {
					video.muted = false;
				}
				if (video._previousVolume !== undefined) {
					video.volume = video._previousVolume;
				}
			});
			if (window._suspendedAudioContexts && window._suspendedAudioContexts.length > 0) {
				window._suspendedAudioContexts.forEach(function(ctx) {
					try {
						if (ctx && ctx.state === 'suspended') {
							ctx.resume();
							console.log("[Game] Resumed AudioContext");
						}
					} catch (e) {}
				});
				window._suspendedAudioContexts = [];
			}
			if (window.Howler && window._howlerWasMuted !== undefined) {
				Howler.mute(window._howlerWasMuted);
			}
			console.log("[Game] Unmuted all game audio after ad");
		} catch (err) {
			console.log("[Game] Could not unmute audio:", err);
		}
		
		while ( gameAxDivContainer && gameAxDivContainer.lastChild ) { gameAxDivContainer.removeChild(gameAxDivContainer.lastChild); }

		setGameDivContainerIsVisible( true );
		setGameAxDivContainerIsVisible( false );
		_isGameAreaAdActive = false;
		
		if (_isFirstLoad) {
			// First load: wait for game loader, then notify parent for click-to-play overlay
			_isFirstLoad = false;
			console.log("[Game] H5 ad complete, waiting for game loader");
			var gameReadyInterval = setInterval(function () {
				try {
					if (window.mBPSApp && window.mBPSApp.dispatchAppMessage) {
						clearInterval(gameReadyInterval);
						removeLoadingDisplay();
						console.log("[Game] Game loader complete, showing preroll overlay");
						try {
							window.parent.postMessage({ type: 'gameLoaderComplete' }, '*');
						} catch (e) {
							window.mBPSApp.dispatchAppMessage(979287055);
						}
					}
				} catch (e) {
					console.error("[Game] Error waiting for game loader:", e);
				}
			}, 100);
		} else {
			// Subsequent plays: show game menu directly
			console.log("[Game] Ad complete, showing game menu");
			var onGameAreaAdCompleteInterval = setInterval(function () {
				try {
					if (window.mBPSApp && window.mBPSApp.dispatchAppMessage) {
						clearInterval(onGameAreaAdCompleteInterval);
						removeLoadingDisplay();
						window.mBPSApp.dispatchAppMessage(979287055);
					}
				} catch (e) { 
					console.error("[Game] Error in onGameAreaAdComplete:", e);
				}
			}, 100);
		}
	}
	window.onGameAreaAdComplete = onGameAreaAdComplete;

	// Listen for parent messages after preroll completes
	window.addEventListener('message', function(event) {
		if (event.data && (event.data.type === 'vastPrerollComplete' || event.data.type === 'prerollComplete')) {
			console.log("[Game] Preroll complete, showing game menu");
			var showMenuInterval = setInterval(function () {
				try {
					if (window.mBPSApp && window.mBPSApp.dispatchAppMessage) {
						clearInterval(showMenuInterval);
						window.mBPSApp.dispatchAppMessage(979287055);
					}
				} catch (e) {}
			}, 100);
		}
	});
		
		//----------------------------------------------------------------	
		//-- GAFGHTML5:
	
		function axGAFGHTML5_beforeAx() { }
	
		function axGAFGHTML5_afterAx() { }
	
		function axGAFGHTML5_axBreakDone(pPlacementInfo) {
			switch (pPlacementInfo.breakStatus) {
				case "timeout":
					trackGUAEvent("Game Page", "ads_google_h5", "system_timeout", 0, true);
					trackGA4PageEvent("ads_google_h5__system_timeout", {});
					break;
	
				case "dismissed":
					trackGUAEvent("Game Page", "ads_google_h5", "ad_skipped", 0, true);
					trackGA4PageEvent("ads_google_h5__ad_skipped", {});
					break;
	
				case "viewed":
					trackGUAEvent("Game Page", "ads_google_h5", "ad_complete", 0, true);
					trackGA4PageEvent("ads_google_h5__ad_complete", {});
					break;
	
				default:
					trackGUAEvent("Game Page", "ads_google_h5", "no_ad_delivered", 0, true);
					trackGA4PageEvent("ads_google_h5__no_ad_delivered", {});
					break;
			}
			onGameAreaAdComplete();
		}
	
		function axGAFGHTML5_onReadyTimeout() {
			trackGUAEvent("Game Page", "ads_google_h5", "system_timeout", 0, true);
			trackGA4PageEvent("ads_google_h5__system_timeout", {});
			axGAFGHTML_didOnReadyTimeout = true;
			onGameAreaAdComplete();
		}
	
		//----------------------------------------------------------------				
	
	}	
	
	});
	
	