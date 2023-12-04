////////////////////----cart details
const cartDetails = document.querySelector(".cart__details");
const cartIcon = document.querySelector(".cartI");
const body = document.querySelector("body");

function toggleCartDetails() {
  if (cartDetails.classList.contains("show")) {
    cartDetails.classList.remove("show");
  } else {
    cartDetails.classList.add("show");
  }
}

cartIcon.addEventListener("click", toggleCartDetails);

//////////---------------Qty
var quantity = document.querySelector(".qty");
var plusbtn = document.querySelector(".plus");
var minusbtn = document.querySelector(".minus");

plusbtn.addEventListener("click", () => {
  quantity.innerText = Number(quantity.innerText) + 1;
});
minusbtn.addEventListener("click", () => {
  if (Number(quantity.innerText) > 1) {
    quantity.innerText = Number(quantity.innerText) - 1;
  }
});

/////-----------------nav bar
var hamburger = document.querySelector(".hamburger");
var offcanvas = document.querySelector(".offcanvas");
hamburger.addEventListener("click", () => {
  offcanvas.classList.add("show");
  offcanvas.style = "height:" + window.innerHeight + "px";
});
//////////////-----------close all popup
body.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("cartI") === false &&
    event.target.classList.contains("cart__details") === false &&
    event.target.classList.contains("offcanvas") === false &&
    event.target.classList.contains("hamburger") === false
  ) {
    if (cartDetails.classList.contains("show")) {
      cartDetails.classList.remove("show");
    }
    if (offcanvas.classList.contains("show")) {
      offcanvas.classList.remove("show");
    }
  }
});
//////////////////////////---------------Add cart
var cart_btn = document.querySelector(".cart__btn");
var cart_items = document.querySelector(".cart_items");
var rate = document.querySelector(".rate");

cart_btn.addEventListener("click", () => {
  var pImage = document.querySelector(".product__subimages").firstElementChild
    .src;
  var pName = document.querySelector(".pname").innerText;
  var itemDiv = document.createElement("div");
  var itemImg = document.createElement("img");
  itemImg.setAttribute("src", pImage);
  itemImg.setAttribute("alt", "Product Image");
  itemImg.setAttribute("class", "prod_Img");
  var itemName = document.createElement("span");
  itemName.innerText = pName;
  itemName.setAttribute("class", "prod_Name");
  var Qty_Price_details = document.createElement("div");
  var itemrate = document.createElement("span");
  var itemqty = document.createElement("span");
  var itemtotal = document.createElement("span");
  itemrate.innerText = rate.innerText + " * ";
  itemrate.setAttribute("Id", "prod_rate");
  itemqty.innerText = quantity.innerText + " = ";
  itemqty.setAttribute("Id", "prod_Qty");
  itemtotal.innerText =
    Number(rate.innerText.substring(1)) * Number(quantity.innerText);
  Qty_Price_details.appendChild(itemName);
  Qty_Price_details.appendChild(document.createElement("br"));
  Qty_Price_details.appendChild(itemrate);
  Qty_Price_details.appendChild(itemqty);
  Qty_Price_details.appendChild(itemtotal);
  cart_items.innerText = "";
  var itemDiv = document.createElement("div");
  itemDiv.appendChild(itemImg);
  itemDiv.appendChild(Qty_Price_details);
  cart_items.appendChild(itemDiv);
});
/////////////////////////////--------------------header
var menu = document.querySelector(".menu");
menu.querySelectorAll("a").forEach((e) => {
  offcanvas.appendChild(e);
});
