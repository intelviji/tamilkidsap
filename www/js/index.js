/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var admobid = {};
var localStorage = window.localStorage; 
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3811141053801373/5803426332',
        interstitial: 'ca-app-pub-3811141053801373/2388701601'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3811141053801373/5803426332',
        interstitial: 'ca-app-pub-3811141053801373/2388701601'
    };
} else {
    admobid = { // for Windows Phone
       banner: 'ca-app-pub-3811141053801373/5803426332',
        interstitial: 'ca-app-pub-3811141053801373/2388701601'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    var localitem="";
    var mypage="";
	if(AdMob)
	{
			AdMob.hideBanner();
	}
	else{ alert( 'admob plugin not ready' ); return; }

    
    if(localStorage.length)
    {
        localitem = localStorage.getItem("purchased");
        mypage = localStorage.getItem("page");
        if(localitem == "")
            localStorage.setItem("purchased", "no");
        if(mypage == "")
            localStorage.setItem("page","any");

    }
    else
    {
        localStorage.setItem("page", "any");
        localStorage.setItem("purchased", "no");
    }
        
    

	window.plugins.OneSignal
    .startInit("1a58cabd-8b19-47c4-bd17-a7f7410bd616")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();

    
   
}