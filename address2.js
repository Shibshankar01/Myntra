//update priceBlock-container

updatePriceblock();
function updatePriceblock() {
   let orderData = JSON.parse(localStorage.getItem("orderData")) || [];

   let orderSummary = document.querySelector("priceBreakUp-orderSummary");
   document.querySelector(".actual-price").innerText = "₹" + orderData[0].original_amt;
   document.querySelector(".discount-price").innerText = "-₹" + (orderData[0].original_amt - orderData[0].actual_amt);
   let couponAmt = orderData[0].coupon_amt.toFixed(2);
   if (couponAmt !== 0) {
      document.querySelector(".applyCoupon").parentNode.style.display = "flex";
      document.querySelector(".applyCoupon").innerText = "-₹" + orderData[0].coupon_amt;
   } else {
      document.querySelector(".applyCoupon").parentNode.style.display = "none";
   }

   let covidDon = orderData[0].coviddon_amt.toFixed(2);
   if (covidDon !== 0) {
      document.querySelector(".donation-price").parentNode.style.display = "flex";
      document.querySelector(".donation-price").innerText = "₹" + covidDon;
   } else {
      document.querySelector(".donation-price").parentNode.style.display = "none";
   }
   document.querySelector(".convenience-price").innerText = "₹" + orderData[0].convenience_amt;
   document.querySelector(".priceDetail-total").innerText = "₹" + orderData[0].order_amt;
}

let addDetails = JSON.parse(localStorage.getItem("addDetails"));
document.querySelector("#name").innerHTML = addDetails.name;
document.querySelector("#add").innerHTML = addDetails.address;
document.querySelector("#loc").innerHTML = addDetails.locality;
document.querySelector("#city").innerHTML = addDetails.city;
document.querySelector("#state").innerHTML = addDetails.state;
document.querySelector("#pin").innerHTML = addDetails.pin;
document.querySelector("#mob").innerHTML = addDetails.mobile;

document.querySelector("#continue").addEventListener("click",payFun);
function payFun(event){
    window.location.href="payment.html";

}