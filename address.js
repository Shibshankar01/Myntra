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

document.querySelector("form").addEventListener("submit",addfun);
let x =  document.querySelector("form");
let addArr=JSON.parse(localStorage.getItem("addDetails"))||[];
function addfun(event){
    event.preventDefault();
    let obj={
        name:x.name.value,
        mobile:x.mobile.value,
        pin:x.pin.value,
        address:x.address.value,
        locality:x.locality.value,
        city:x.city.value,
        state:x.state.value,
    }
    localStorage.setItem("addDetails",JSON.stringify(obj));
    window.location.href="address2.html";

}


