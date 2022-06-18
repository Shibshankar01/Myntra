let menDiv = document.querySelector("#men");
menDiv.addEventListener("click", menClick);
let womenDiv = document.querySelector("#women");
womenDiv.addEventListener("click", womenClick);
let kidsDiv = document.querySelector("#kids");
kidsDiv.addEventListener("click", kidsClick);

function menClick(){
   localStorage.setItem("clickedOn", "Men");
   window.location.href = "productsPage.html";
}
function womenClick(){
   localStorage.setItem("clickedOn", "Women");
   window.location.href = "productsPage.html";
}
function kidsClick() {
   localStorage.setItem("clickedOn", "Kids");
   window.location.href = "productsPage.html"
}
let productData = JSON.parse(localStorage.getItem("allProducts")) || [];

let clickedOn = localStorage.getItem("clickedOn")||"";
let filteredData = [];
if(clickedOn=="Kids"){
   filteredData = productData.filter(function(elem){
      return elem.ideal_for=="Boys" || elem.ideal_for=="Girls"
   })
}else{
   filteredData = productData.filter(function(elem){
      return elem.ideal_for==clickedOn;
   })
}


let firstHeadingSpan = document.querySelector("#first-heading>span:nth-child(2)");
let span = document.createElement("span");
span.innerText = clickedOn;
span.style.fontWeight="bolder"
firstHeadingSpan.after(span);

let secondHeadingSpan = document.querySelector("#second-heading>span:first-child");
let spanItems = document.createElement("span");
spanItems.innerText=" - "+filteredData.length;
secondHeadingSpan.before(spanItems);
let secondHeadingSpanTwo = document.querySelector("#second-heading>span:first-child");
let spanTwo = document.createElement("span");
spanTwo.innerText=clickedOn+"s Items"
secondHeadingSpanTwo.before(spanTwo)

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
      div.addEventListener("mouseenter", changeImage);
      function changeImage(){
            let i=0;
            setInterval(function(){
               if(i>=imageArr.length-1){
                  i=0;
               }else{
                  i++;
               }
               img.src = imageArr[i];
            }, 2000);
      }
      div.addEventListener("mouseout", function () {
         img.src = imageArr[0];
      })
      document.querySelector("#container").append(div);
    }
    localStorage.setItem("filteredProducts", JSON.stringify(productList));
}

function increment(id) {
   for(let i=0; i<productData.length; i++){
      if(productData[i].ID == id){
         productData[i].counter++;
         break;
      }
   }
   localStorage.setItem("allProducts", JSON.stringify(productData));
   window.location.reload();
}

function singleItemView(product) {
   localStorage.setItem("singleItemView", JSON.stringify(product));
   window.location.href="singleItemView.html";
}

function sort() {
   let filteredList = JSON.parse(localStorage.getItem("filteredProducts")) || [];  
   if(sortSelect.value=="sortDiscount"){
      filteredList.sort(function(a, b){
         return b.discount-a.discount;
      });
      displayProducts(filteredList);
   }else if (sortSelect.value=="sortPriceAscending") {
      filteredList.sort(function(a, b){
         return a.variant_price-b.variant_price;
      });
      displayProducts(filteredList);
   }else if (sortSelect.value=="sortPriceDescending") {
      filteredList.sort(function(a,b){
         return b.variant_price-a.variant_price;
      });
      displayProducts(filteredList);
   }else if (sortSelect.value=="sortPopularity") {
      filteredList.sort(function(a,b){
         return b.counter-a.counter;
      });
      displayProducts(filteredList)
   }else{
      window.location.reload();
   }
   console.log(filteredList);
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

let checkBoxOne=document.querySelector("#one")
checkBoxOne.addEventListener("click",filterBrand)

let checkBoxTwo=document.querySelector("#two")
checkBoxTwo.addEventListener("click",filterBrand)

let checkBoxThree=document.querySelector("#three")
checkBoxThree.addEventListener("click",filterBrand)

let checkBoxFour=document.querySelector("#four");
checkBoxFour.addEventListener("click", filterBrand);

let checkBoxFive=document.querySelector("#five");
checkBoxFive.addEventListener("click", filterBrand);

let checkBoxSix=document.querySelector("#six");
checkBoxSix.addEventListener("click", filterBrand);
filterBrand();
function filterBrand(){
   let firstBrandArray=[];
   let secondBrandArray=[];
   let thirdBrandArray=[];
   let fourthBrandArray=[];
   let fifthBrandArray=[];
   let sixthBrandArray=[];
   let sevenththBrandArray=[];
   let eighthBrandArray=[];
   let defaultArray = [];
   let filteredBrand=[];
   if (checkBoxOne.checked==true) {
      firstBrandArray = filteredData.filter(function (elem) {
         return elem.brand == document.querySelector("#one").value;
      })
   }
   if (checkBoxTwo.checked==true) {
      secondBrandArray = filteredData.filter(function (elem) {
         return elem.brand == document.querySelector("#two").value;
      })
   }
   if (checkBoxThree.checked==true) {
      thirdBrandArray = filteredData.filter(function(elem){
         return elem.brand == document.querySelector("#three").value
      })
   }
   if(checkBoxFour.checked==true){
      fourthBrandArray=filteredData.filter(function(elem){
         return elem.brand == document.querySelector("#four").value;
      })
   }
   if (checkBoxFive.checked==true) {
      fifthBrandArray=filteredData.filter(function(elem){
         return elem.brand == document.querySelector("#five").value;
      })
   }
   if (checkBoxSix.checked==true) {
      sixthBrandArray=filteredData.filter(function(elem){
         return elem.brand == document.querySelector("#six").value;
      })
   }
   if (checkBoxSix.checked==true) {
    seventhBrandArray=filteredData.filter(function(elem){
       return elem.brand == document.querySelector("#seven").value;
    })
    }
    if (checkBoxSix.checked==true) {
    eighthBrandArray=filteredData.filter(function(elem){
       return elem.brand == document.querySelector("#eight").value;
    })
    }
   else if(checkBoxOne.checked==false && checkBoxTwo.checked==false && checkBoxThree.checked==false && checkBoxFour.checked==false  && checkBoxFive.checked==false && checkBoxSix.checked==false){
      defaultArray = filteredData.filter(function(elem){
         return true;
      })
   }
   filteredBrand = firstBrandArray.concat(secondBrandArray, thirdBrandArray, fourthBrandArray, fifthBrandArray, sixthBrandArray, defaultArray);
   displayProducts(filteredBrand);
   localStorage.setItem("filteredProducts", JSON.stringify(filteredBrand));
}