/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","192.168.1.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
    		module: "MMM-Wallpaper",
    		position: "fullscreen_below",
   			config: { // See "Configuration options" for more information.
      			source: "bing",
      			slideInterval: 60 * 5000 // Change slides every minute
    			}
 		 },	
		{
			module: "updatenotification",
			position: "top_bar"
			
		},
		{
			module: "clock",
			position: "top_left",
			config:{
				timezone: "America/New_York",
				showPeriodUpper: true,
				showWeek: true,
				showSunTimes: true
			},
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Orlando",
				locationID: "4167147", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "REDACTED"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Orlando",
				locationID: "4167147", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "REDACTED"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
        module: 'MMM-ProfileSwitcher',
        config: {
            // See 'Configuration options' for more information.
        	}
   		},
   		{
        module: 'MMM-Remote-Control',
        // uncomment the following line to show the URL of the remote control on the mirror
        // position: 'bottom_left',
        // you can hide this module afterwards from the remote control itself
        config: {
            apiKey: 'REDACTED'
        	customCommand: {},  // Optional, See "Using Custom Commands" below
        	showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        	secureEndpoints: true // Optional, See API/README.md
        	// uncomment any of the lines below if you're gonna use it
        	// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        	// apiKey: "", // Optional, See API/README.md for details
        	// classes: {} // Optional, See "Custom Classes" below
    		}
    	},
    	{
   		module: "MMM-Dimmer",
    	position: "fullscreen_above",
   		config: { // See "Configuration options" for more information.
      		longitude: -81.5812,
      		latitude: 28.419411,
      		maxDim: 0.9,
      		transitionDuration: 15 * 60 * 1000,
    		}
 		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}