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


