/*eslint-env browser*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
    
var carType = '';
var subscriptionType = '';
var carAmount = 0;
var subscriptionAmount = 0;
var total = 0;

function getCarType(carType) {
    if (carType === "car-radio-luxury" || carType === "car-radio-premium" ||carType === "car-radio-sport" || carType === "car-radio-suv" || carType === "car-radio-exotic") {
        carAmount = document.getElementById(carType).value;
    }
    
    total = parseInt(carAmount,0) + parseInt(subscriptionAmount,0);
    document.getElementById('pricing-widget-monthly-total').innerHTML = "$" + total;
}

function getSubscriptionType(subscriptionType) {
    if (subscriptionType === "subscription-radio-12" || subscriptionType === "subscription-radio-6" || subscriptionType === "subscription-radio-3") {
        subscriptionAmount = document.getElementById(subscriptionType).value;
    }
    
    total = parseInt(carAmount) + parseInt(subscriptionAmount);
    document.getElementById('pricing-widget-monthly-total').innerHTML = "$" + total;
}