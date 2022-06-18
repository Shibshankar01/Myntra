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
      document.querySelector(".applyCoupon").innerText = "-₹" + orderData[0].coupon_amt.toFixed(2);
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
   document.querySelector(".priceDetail-total").innerText = "₹" + orderData[0].order_amt;
}
