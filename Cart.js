let obj = {
   ID: "8ec62e9d32f52999eda6e2bccb777218",
   size: "XS",
   brand: "Anouk",
   care_instructions: "Polyester |  Dry-clean",
   dominant_material: "Polyester",
   title: "Anouk Women Maroon Solid A-Line Kurta",
   actual_color: "Maroon",
   dominant_color: "Maroon",
   product_type: "A-Line Kurta",
   images:
      "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/1ab6bfba-4825-4e59-ac0e-21e1ebb63aeb1545212392273-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-1.jpg | http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/b3670fb6-a561-40b1-9d69-9493cbbc582c1545212392251-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-2.jpg | http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/848be171-6b6f-41e6-9af8-0409bdb545f31545212392236-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-3.jpg | http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/d3af7853-de3f-406e-a895-c86ca8a5347f1545212392223-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-4.jpg",
   type: "Clothing/Women/Kurtas/Anouk/More by Anouk",
   variant_price: 1359,
   variant_compare_at_price: 3399,
   ideal_for: "Women",
   is_in_stock: "In Stock",
   inventory:
      "Shape : A-Line | Sleeve Styling : Regular Sleeves | Occasion : Festive | Print or Pattern Type : Ethnic Motifs | Number of Components : 1 | Design Styling : Regular | Colour Family : Earthy | Neck : Round Neck | Pattern : Solid | Body or Garment Size : To-Fit Denotes Body Measurements in | Sleeve Length : Three-Quarter Sleeves | Weave Pattern : Regular | Fabric Purity : Synthetic | Stitch : Ready to Wear | Hemline : Flared | Wash Care : Dry Clean | Ornamentation : Zari | Weave Type : Machine Weave | Length : Ankle Length | Fabric : Polyester",
   product_id: 6551403,
};

localStorage.setItem("singleItemView", JSON.stringify(obj));

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
