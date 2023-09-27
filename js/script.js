
var productname = document.querySelectorAll("#product-name")
var cart = document.querySelector("#cart")
var btn = document.querySelector("#btn")
var totalprice = document.querySelector("#total-price")
var resultprice = 0


productname.forEach(function(item){
item.onclick = function () {
    cart.innerHTML += item.textContent + "  +   "
    resultprice += +(item.getAttribute("price"))
    if(cart.innerHTML!=""){
        btn.style.display="block";
    }

}
}
)

btn.onclick = function() {
    totalprice.style.display="block";
    totalprice.innerHTML= resultprice;
}

