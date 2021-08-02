cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
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
    },
    {
      "id": "cordova-promise-polyfill.Promise",
      "file": "plugins/cordova-promise-polyfill/www/Promise.js",
      "pluginId": "cordova-promise-polyfill",
      "runs": true
    },
    {
      "id": "cordova-promise-polyfill.promise.min",
      "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
      "pluginId": "cordova-promise-polyfill"
    },
    {
      "id": "cordova-plugin-admob-free.AdMob",
      "file": "plugins/cordova-plugin-admob-free/www/admob.js",
      "pluginId": "cordova-plugin-admob-free",
      "clobbers": [
        "admob",
        "AdMob",
        "plugins.AdMob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inapppurchase": "1.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "onesignal-cordova-plugin": "2.9.0",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-admob-sdk": "0.24.1",
    "cordova-plugin-admob-free": "0.27.0",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-migrate-localstorage": "0.0.2"
  };
});