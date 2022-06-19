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

//Send OTP

document.querySelector(".cardotpBtn").addEventListener("click", (event) => {
   event.preventDefault();
   let cardNumber = document.querySelector(".cardNumber").value;
   let cardName = document.querySelector(".cardName").value;
   let cardExp = document.querySelector(".cardExp").value;
   let cardCVV = document.querySelector(".cardCVV").value;
   let cardOtpBtn = document.querySelector(".cardotpBtn");

   if (cardNumber == "" || cardName == "" || cardExp == "" || cardCVV == "") {
      alert("Kindly fill all card details");
   } else if (cardOtpBtn.value == "Send OTP") {
      cardOtpBtn.value = "Varify OTP";
      document.querySelector(".cardOTP").style.display = "block";
   } else if (cardOtpBtn.value == "Varify OTP") {
      document.querySelector(".cardOTP").style.display = "none";
      cardOtpBtn.style.display = "none";
      document.querySelector(".OTPVerificationMsg").style.display = "block";
      document.querySelector(".order-btn").style.display = "block";
   }
});

document.querySelector(".order-btn").addEventListener("click", (event) => {
   let payMsg = document.querySelector(".PaymentVerificationMsg");
   payMsg.style.display = "block";
   setTimeout(() => {
      payMsg.innerText = "Payment Varification Successfull. You will redirect to Home Page...";
      localStorage.removeItem("orderData");
      localStorage.removeItem("cartItems");
   }, 1500);

   setTimeout(() => {
      window.location.href = "HomePage.html";
   }, 3000);
});
