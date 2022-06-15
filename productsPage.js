let productData = JSON.parse(localStorage.getItem("allProducts")) || [];
localStorage.setItem("clickedOn", "Men");

let clickedOn = localStorage.getItem("clickedOn")||"";

let filteredData = productData.filter(function(elem){
   return elem.ideal_for==clickedOn;
})

let firstHeadingSpan = document.querySelector("#first-heading>span:nth-child(2)");
let span = document.createElement("span");
span.innerText = clickedOn;
span.style.fontWeight="bolder"
firstHeadingSpan.after(span);


let sortSelect = document.querySelector("#sort");
sortSelect.addEventListener("change", sort);

let filterSizeSelect = document.querySelector("#filterSize");
filterSizeSelect.addEventListener("change", filterSize);

displayProducts(filteredData);
function displayProducts(productList) {
   document.querySelector("#container").innerHTML="";
    for (let i = 0; i < productList.length; i++) {
      let imageArr = productList[i].images.split(" | ");
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = imageArr[0];
      let brand = document.createElement("h3");
      brand.innerText = productList[i].brand;
      let title = document.createElement("h4");
      title.innerText = productList[i].title;
      let priceSpan = document.createElement("span");
      priceSpan.innerText = "Rs. "+productList[i].variant_price;
      let mrpSpan = document.createElement("span");
      mrpSpan.innerText="Rs. "+productList[i].variant_compare_at_price;
      let discount = Math.floor((+productList[i].variant_compare_at_price-+productList[i].variant_price)/(+productList[i].variant_compare_at_price)*100);
      productList[i].discount=discount;
      let discountSpan = document.createElement("span");
      discountSpan.innerText="("+discount+"% OFF)";
      div.append(img, brand, title, priceSpan, mrpSpan, discountSpan);
      div.addEventListener("click", function(){
         increment(productList[i].ID);
         singleItemView(productList[i]);
      });
      document.querySelector("#container").append(div);
    }
    localStorage.setItem("filteredProducts", JSON.stringify(productList));
}

function increment(id) {
   for(let i=0; i<productData.length; i++){
      if(productData[i].ID == id){
         productData[i].counter++;
      }
   }
   localStorage.setItem("allProducts", JSON.stringify(productData));
   window.location.reload();
}

function singleItemView(product) {
   localStorage.setItem("singleItemView", JSON.stringify(product));
}

function sort() {
   if(sortSelect.value=="sortDiscount"){
      filteredData.sort(function(a, b){
         return b.discount-a.discount;
      });
      displayProducts(filteredData);
   }else if (sortSelect.value=="sortPriceAscending") {
      filteredData.sort(function(a, b){
         return a.variant_price-b.variant_price;
      });
      displayProducts(filteredData);
   }else if (sortSelect.value=="sortPriceDescending") {
      filteredData.sort(function(a,b){
         return b.variant_price-a.variant_price;
      });
      displayProducts(filteredData);
   }else if (sortSelect.value=="sortPopularity") {
      filteredData.sort(function(a,b){
         return b.counter-a.counter;
      });
      displayProducts(filteredData)
   }
}

function filterSize() {
   if (filterSizeSelect.value!="") {
      let filterSizeList = filteredData.filter(function(elem){
         return elem.size == filterSizeSelect.value;
      });
      displayProducts(filterSizeList);
   }else{
      displayProducts(filteredData);
   }
}