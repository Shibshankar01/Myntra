displayData();

function displayData() {
   let singleItemData = JSON.parse(localStorage.getItem("singleItemView")) || [];
   document.querySelector(".pdtitle").innerText = singleItemData.brand;
   document.querySelector(".pdname").innerText = singleItemData.title;
   document.querySelector("#price").innerText = "Rs." + singleItemData.variant_price;
   document.querySelector(".og-price").innerText = " Rs." + singleItemData.variant_compare_at_price;
   let off = 100 - ((singleItemData.variant_price / singleItemData.variant_compare_at_price) * 100).toFixed(0);
   document.querySelector(".OFF").innerText = "(" + off + "% OFF)";

   let productImages = singleItemData.images.split(" | ");
   document.querySelector(".img-card").innerHTML = "";
   productImages.forEach((el) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", el);
      img.setAttribute("class", "pdimg");
      div.append(img);
      document.querySelector(".img-card").append(div);
   });
   document.querySelector(".best-price").innerText = "Rs. " + (+singleItemData.variant_price - 50);
}

//add .sizebtn-selected style to selected size
let size = "";
let pinCode = "";
let btns = document.querySelectorAll(".sizebtn");
btns.forEach((el) => {
   el.addEventListener("click", () => {
      document.querySelector("[value='S']").setAttribute("class", "sizebtn");
      document.querySelector("[value='M']").setAttribute("class", "sizebtn");
      document.querySelector("[value='L']").setAttribute("class", "sizebtn");
      document.querySelector("[value='XL']").setAttribute("class", "sizebtn");
      document.querySelector("[value='XLL']").setAttribute("class", "sizebtn");
      el.setAttribute("class", "sizebtn sizebtn-selected");
      size = el.innerText;
   });
});

//action for Add to button click
document.querySelector(".addtobag").addEventListener("click", () => {
   let goToBagBtn = document.querySelector(".addtobag");

   if (size == "") alert("Select Size");
   else if (pinCode == "") alert("Enter Pincode to check availibility & delivery time");
   else if (goToBagBtn.innerText === "ADD TO BAG") {
      let singleItemData = JSON.parse(localStorage.getItem("singleItemView"));
      let cartItem = JSON.parse(localStorage.getItem("cartItems")) || [];
      singleItemData["qty"] = 1;
      singleItemData["size"] = size;
      singleItemData["pincode"] = pinCode;
      cartItem.push(singleItemData);

      goToBagBtn.innerText = "GO TO BAG";
      goToBagBtn.addEventListener("click", () => {
         window.location.href = "bag.html";
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
   }
});

//check the delivery pincode
document.querySelector("#checkPin").addEventListener("click", () => {
   let pinTag = document.querySelector("#checkPin");
   let pinInput = document.querySelector("#pinCode");

   if (pinTag.innerText == "Check" && pinInput.value.length == 6) {
      pinTag.innerText = "Change";
      pinCode = pinInput.value;
      pinInput.setAttribute("disabled", "true");
   } else if (pinTag.innerText == "Change") {
      pinCode = "";
      pinTag.innerText = "Check";
      pinInput.value = "";
      pinInput.removeAttribute("disabled");
   }
});
