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