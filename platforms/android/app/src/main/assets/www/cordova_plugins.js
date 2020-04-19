cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-inapppurchase.InAppBillingV3",
      "file": "plugins/cordova-plugin-inapppurchase/www/index-android.js",
      "pluginId": "cordova-plugin-inapppurchase",
      "merges": [
        "inAppPurchase"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.31.6",
    "cordova-plugin-inapppurchase": "1.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "onesignal-cordova-plugin": "2.3.3"
  };
});