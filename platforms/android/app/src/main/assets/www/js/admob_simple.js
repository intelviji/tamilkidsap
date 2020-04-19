var admobid = {};
var productIds = ["spider_remove_ads"];
var prdtid;
var localStorage = window.localStorage; 
// TODO: replace the following ad units with your own
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
function createBannerAd()
{
  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
   
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black',
	autoShow: true
  } );
}
function prepareAds()
{
  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false
  });
}
function showAds()
{
  if(AdMob) AdMob.showInterstitial();
}
function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
  
  var localitem = localStorage.getItem("purchased");
  var mypage = localStorage.getItem("page");
  //localitem = "no";
 // alert(localitem); alert(mypage);
  if(localitem == "no" && mypage == "any")
  {
    //alert("creating ads");
    createBannerAd();
    prepareAds();
  
  }
  if(localitem == "yes")
  {
    AdMob.hideBanner();
  }
}

function showInterAds()
{
  if(AdMob) 
  AdMob.showInterstitial();
} 
function showDetails()
{

  inAppPurchase
  .getProducts(productIds)
  .then(function (products) {
    console.log(products);
    
     document.getElementById("price").innerHTML = 'Price : ' + products[0].currency + " : " + products[0].price;
    prdtid = products[0].productId;
    
    
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
  })
  .catch(function (err) {
    console.log(err);
    alert(err);
  });

}
function buynow()
{
    
    inAppPurchase
      .buy(prdtid)
      .then(function (data) {
        console.log(JSON.stringify(data));
        //alert('consuming transactionId: ' + data.transactionId);
        return inAppPurchase.consume(data.type, data.receipt, data.signature);
      })
      .then(function () {
        alert('Purchase was successful!');
        localStorage.setItem("purchased", "yes");
        console.log('consume done!');
    
      })
      .catch(function (err) {
        console.log(err);
       alert("something went wrong. Please try again!!! Or Please contact support : intelviji@gmail.com");
      });
}
function restore()
{
    alert("Please contact support intelviji@gmail.com to restore purchases. Thanks for understanding!!!");
    
}
if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}