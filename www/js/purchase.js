

var productIds = ["spider_remove_ads"];
var prdtid;

function showDetails()
{
    var output = '';
    console.log("showDetails");

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
function initApp() {

if (! inAppPurchase ) { alert( 'purchase plugin not ready' ); return; }
  
}
function buynow()
{
    
    inAppPurchase
      .buy(prdtid)
      .then(function (data) {
        console.log(JSON.stringify(data));
        console.log('consuming transactionId: ' + data.transactionId);
        return inAppPurchase.consume(data.type, data.receipt, data.signature);
      })
      .then(function () {
        alert('Purchase was successful!');
        console.log('consume done!');
    
      })
      .catch(function (err) {
        console.log(err);
       alert("something went wrong. Please try again!!!");
      });
}
function restore()
{
    inAppPurchase
      .restorePurchases()
      .then(function (purchases) {
       alert('Restore was successful!');
       
      })
      .catch(function (err) {
        
        alert('Something Went wrong. Try again Later or Please contact support : intelviji@gmail.com');
          
      });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}