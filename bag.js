// toggle with offer show more
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

// Qty Modal
let qtyTag = document.querySelector(".item-qty");
let qtyModal = document.querySelector("#qtymodal");

qtyTag.addEventListener("click", () => {
   qtyModal.style.display = "block";
});

//Size Modal
let sizeTag = document.querySelector(".item-size");
let sizeModal = document.querySelector("#sizemodal");

sizeTag.addEventListener("click", () => {
   sizeModal.style.display = "block";
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
         qtyModal.style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "sizemodal") {
         sizeModal.style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "knoworemodal") {
         covidKnowMoreModel.style.display = "none";
      } else if (event.target.parentNode.parentNode.id == "couponsmodal") {
         couponsModal.style.display = "none";
      }
   });
});

window.addEventListener("click", (event) => {
   if (event.target.id == "qtymodal") {
      qtyModal.style.display = "none";
   }
   if (event.target.id == "sizemodal") {
      sizeModal.style.display = "none";
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
});

//itemContainer-item

displayItems();

function displayItems() {
   let cartItemData = JSON.parse(localStorage.getItem("cartItems")) || [];

   let itemContainer = document.querySelector(".itemContainer");
   itemContainer.innerText = "";

   cartItemData.forEach((el, ind) => {
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
      let itemQty = document.createElement("div");
      itemQty.innerText = "Qty: " + el.qty;
      itemQty.setAttribute("class", "item-qty");
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
      Item.append(ItemLeft, ItemRight);

      itemContainer.append(Item);
   });
}
