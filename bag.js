// toggle  with offer show more

document.querySelector(".more-text").addEventListener("click", (event) => {
   let moreText = document.querySelector(".more-text");
   let offerHide = document.querySelector(".offer-hide");

   if (offerHide.style.display === "block") {
      offerHide.style.display = "none";
      moreText.innerText = "Show More";
   } else {
      offerHide.style.display = "block";
      moreText.innerText = "Show Less";
   }
});

let coupons = { MASAI100: -100, MYNTRA10: "*0.9", MYNTRA20: "*0.8", MYNTRA30: "*0.7" };
localStorage.setItem("coupons", JSON.stringify(coupons));

let size,
   qty,
   currentElementIndex,
   couponAmt = 0;

//getting Cart Items data for localstorage
let cartItemData = JSON.parse(localStorage.getItem("cartItems")) || [];

//upate qty on change
let qtyItemdata = document.querySelectorAll(".dialogs-qtyitem");
qtyItemdata.forEach((element) => {
   element.addEventListener("click", (event) => {
      qty = +event.target.innerText;
   });
});

//update quantity in localstorage and array on submit
document.querySelector(".dialogs-qtybutton").addEventListener("click", () => {
   cartItemData[currentElementIndex].qty = qty;
   localStorage.setItem("cartItems", JSON.stringify(cartItemData));
   document.querySelector("#qtymodal").style.display = "none";
   displayItems(cartItemData);
});

//upate size on change
let sizeItemdata = document.querySelectorAll(".dialogs-sizeitem");
sizeItemdata.forEach((element) => {
   element.addEventListener("click", (event) => {
      size = event.target.innerText;
   });
});

//update size in localstorage and array on submit
document.querySelector(".dialogs-sizebutton").addEventListener("click", () => {
   cartItemData[currentElementIndex].size = size;
   localStorage.setItem("cartItems", JSON.stringify(cartItemData));
   document.querySelector("#sizemodal").style.display = "none";
   displayItems(cartItemData);
});

// Apply Coupon code
document.querySelector(".coupons-applyButton").addEventListener("click", () => {
   let allcoupons = JSON.parse(localStorage.getItem("coupons")) || [];
   let couponCode = document.querySelector(".coupons-textInput").value;
   let temp = 0;
   let flag = false;
   for (let k in allcoupons) {
      if (couponCode.toUpperCase() == k) {
         totalAmt = +eval(actualAmt + allcoupons[k]).toFixed(2);
         document.querySelector(".coupons-label").innerText = k;
         document.querySelector(".coupons-label").style.color = "#03a685";
         couponAmt = +(actualAmt - totalAmt).toFixed(2);
         flag = true;
         break;
      }
   }

   if (!flag) alert("Wrong Coupon Code");
   else {
      updatePriceblock();
      document.querySelector("#couponsmodal").style.display = "none";
   }
});

//Covid 19 modal
let covidKnowMoreTag = document.querySelector(".donationStrip-KnowMore");
let covidKnowMoreModel = document.querySelector("#knoworemodal");

covidKnowMoreTag.addEventListener("click", () => {
   covidKnowMoreModel.style.display = "block";
});

//COUPONS MODAL
let couponsApplyTag = document.querySelector(".coupons-apply");
let couponsModal = document.querySelector("#couponsmodal");

couponsApplyTag.addEventListener("click", () => {
   couponsModal.style.display = "block";
});

//modal closing

let closeModal = document.querySelectorAll(".modal-cancelIcon");
closeModal.forEach((el) => {
   el.addEventListener("click", (event) => {
      if (event.target.parentNode.parentNode.id == "qtymodal") {
         document.querySelector("#qtymodal").style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "sizemodal") {
         document.querySelector("#sizemodal").style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "knoworemodal") {
         covidKnowMoreModel.style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "couponsmodal") {
         couponsModal.style.display = "none";
      }
   });
});

window.addEventListener("click", (event) => {
   if (event.target.id == "qtymodal") {
      document.querySelector("#qtymodal").style.display = "none";
   }
   if (event.target.id == "sizemodal") {
      document.querySelector("#sizemodal").style.display = "none";
   }
   if (event.target.id == "knoworemodal") {
      covidKnowMoreModel.style.display = "none";
   }
   if (event.target.id == "couponsmodal") {
      couponsModal.style.display = "none";
   }
});

//covid donation
let covidDon = 0;

let donPill = document.querySelectorAll(".pillView-pill");

donPill.forEach((el) => {
   el.addEventListener("click", (event) => {
      covidDon = +event.target.getAttribute("data-key");
      updatePriceblock();

      document
         .querySelector(".donationStrip-icon > path")
         .setAttribute(
            "d",
            "M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
         );
   });
});

document.querySelector(".donationStrip-input").addEventListener("change", (event) => {
   covidDon = +document.querySelector(".donationStrip-input").value;
   document
      .querySelector(".donationStrip-icon > path")
      .setAttribute(
         "d",
         "M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
      );
   updatePriceblock();
});

document.querySelector(".donationStrip-icon").addEventListener("click", (event) => {
   let donIconPath = document.querySelector(".donationStrip-icon > path").getAttribute("d");
   if (
      donIconPath ===
      "M14.85 2.14v11.71a1 1 0 0 1-1 1H2.14a1 1 0 0 1-1-1V2.14a1 1 0 0 1 1-1h11.71a1 1 0 0 1 1 1zM14.222 0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0z"
   ) {
      document
         .querySelector(".donationStrip-icon > path")
         .setAttribute(
            "d",
            "M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
         );
      covidDon = 10;
   } else {
      document
         .querySelector(".donationStrip-icon > path")
         .setAttribute(
            "d",
            "M14.85 2.14v11.71a1 1 0 0 1-1 1H2.14a1 1 0 0 1-1-1V2.14a1 1 0 0 1 1-1h11.71a1 1 0 0 1 1 1zM14.222 0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V1.778C16 .8 15.2 0 14.222 0z"
         );
      covidDon = 0;
   }
   updatePriceblock();
});

//itemContainer-item display
let actualAmt = 0;
let totalAmt = 0;
let orignalAmt = 0;
let orderAmt = 0;

displayItems(cartItemData);

function displayItems(cartItemData) {
   actualAmt = 0;
   totalAmt = 0;
   orignalAmt = 0;
   let itemContainer = document.querySelector(".itemContainer");
   itemContainer.innerText = "";

   cartItemData.forEach((el, ind) => {
      actualAmt += el.qty * el.variant_price;
      totalAmt += el.qty * el.variant_price;
      orignalAmt += el.qty * el.variant_compare_at_price;

      let Item = document.createElement("div");
      Item.setAttribute("class", "itemContainer-item");
      let ItemLeft = document.createElement("div");
      ItemLeft.setAttribute("class", "itemContainer-itemLeft");
      let itemImg = document.createElement("img");

      itemImg.setAttribute("src", el.images.split(" | ")[0]);
      ItemLeft.append(itemImg);

      let ItemRight = document.createElement("div");
      ItemRight.setAttribute("class", "itemContainer-itemRight");

      let itemBrand = document.createElement("h5");
      itemBrand.innerText = el.brand;
      itemBrand.setAttribute("class", "itemContainer-brand");
      let itemTitle = document.createElement("p");
      itemTitle.innerText = el.title;
      itemTitle.setAttribute("class", "itemContainer-title");
      let itemSeller = document.createElement("p");
      itemSeller.innerText = "Sold By: Omnitech Retail";
      itemSeller.setAttribute("class", "itemContainer-soldby");

      let itemSizeQtyContainer = document.createElement("div");
      itemSizeQtyContainer.setAttribute("class", "sizeQtyContainer");
      let itemSize = document.createElement("div");
      itemSize.innerText = "Size: " + el.size;
      itemSize.setAttribute("class", "item-size");
      itemSize.addEventListener("click", () => {
         document.querySelector("#sizemodal").style.display = "block";
         currentElementIndex = ind;
      });
      let itemQty = document.createElement("div");
      itemQty.innerText = "Qty: " + el.qty;
      itemQty.setAttribute("class", "item-qty");
      itemQty.addEventListener("click", () => {
         document.querySelector("#qtymodal").style.display = "block";
         currentElementIndex = ind;
      });
      itemSizeQtyContainer.append(itemSize, itemQty);

      let itemPriceContainer = document.createElement("div");
      itemPriceContainer.setAttribute("class", "itemPriceContainer");
      let itemPrice = document.createElement("h5");
      itemPrice.innerText = "₹" + el.variant_price;
      itemPrice.setAttribute("class", "item-price");
      let ogPrice = document.createElement("h5");
      ogPrice.innerText = "₹" + el.variant_compare_at_price;
      ogPrice.setAttribute("class", "og-price");
      let offPrice = document.createElement("h5");
      let off = 100 - ((el.variant_price / el.variant_compare_at_price) * 100).toFixed(0);
      offPrice.innerText = "(" + off + "% OFF)";
      offPrice.setAttribute("class", "orange-1");
      itemPriceContainer.append(itemPrice, ogPrice, offPrice);

      let deliveryContainer = document.createElement("div");
      deliveryContainer.setAttribute("class", "deliveryContainer");
      let deliveryIcon = document.createElement("span");
      deliveryIcon.setAttribute("class", "myntraweb-sprite sprites-greenTickIcon");
      let deliveryText = document.createElement("span");
      deliveryText.innerText = "Delivery By";
      let deliveryDate = document.createElement("strong");
      let today = new Date();
      deliveryDate.innerText = +(today.getDate() + 3) + " " + today.toString().substring(4, 7) + " " + today.getFullYear();
      deliveryContainer.append(deliveryIcon, deliveryText, deliveryDate);
      ItemRight.append(itemBrand, itemTitle, itemSeller, itemSizeQtyContainer, itemPriceContainer, deliveryContainer);

      let closeIcon = document.createElement("div");
      closeIcon.setAttribute("class", "itemContainer-closeIcon");
      closeIcon.innerHTML = `<svg  width="16" height="16" class="item-closeIcon">
      <path
         d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
      ></path>
   </svg>`;
      closeIcon.addEventListener("click", () => {
         deleteItem(ind);
      });
      Item.append(ItemLeft, ItemRight, closeIcon);

      itemContainer.append(Item);
   });
   // console.log(actualAmt, totalAmt, orignalAmt);
   updatePriceblock();
}

//update priceBlock-container
function updatePriceblock() {
   let orderSummary = document.querySelector("priceBreakUp-orderSummary");
   document.querySelector(".actual-price").innerText = "₹" + orignalAmt;
   document.querySelector(".discount-price").innerText = "-₹" + (orignalAmt - actualAmt);

   if (couponAmt !== 0) {
      document.querySelector(".applyCoupon").parentNode.style.display = "flex";
      document.querySelector(".applyCoupon").innerText = "-₹" + couponAmt;
   } else {
      document.querySelector(".applyCoupon").parentNode.style.display = "none";
   }

   if (covidDon !== 0) {
      document.querySelector(".donation-price").parentNode.style.display = "flex";
      document.querySelector(".donation-price").innerText = "₹" + covidDon;
   } else {
      document.querySelector(".donation-price").parentNode.style.display = "none";
   }

   orderAmt = Number.parseFloat(totalAmt + covidDon + 99).toFixed(2);
   document.querySelector(".priceDetail-total").innerText = "₹" + orderAmt;
}
//Delete Item from Cart
function deleteItem(ind) {
   cartItemData.splice(ind, 1);
   localStorage.setItem("cartItems", JSON.stringify(cartItemData));
   displayItems(cartItemData);
}

//place order functionality

document.querySelector(".order-btn").addEventListener("click", () => {
   let orderData = {
      user_name: "Sanjay",
      user_id: "8237202186",
      original_amt: orignalAmt,
      actual_amt: actualAmt,
      coupon_amt: couponAmt,
      coviddon_amt: covidDon,
      convenience_amt: 99,
      order_amt: orderAmt,
   };
   let allOrderData = JSON.parse(localStorage.getItem("orderData")) || [];
   allOrderData.push(orderData);
   console.log(allOrderData);
   localStorage.setItem("orderData", JSON.stringify(allOrderData));
   window.location.href = "address.html";
});
