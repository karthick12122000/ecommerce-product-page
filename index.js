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
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML =
    "<img class='delete__item' src='./images/icon-delete.svg' onclick='detleteItem()' />";
  var itemDiv = document.createElement("div");
  itemDiv.appendChild(itemImg);
  itemDiv.appendChild(Qty_Price_details);
  itemDiv.appendChild(deleteBtn);
  cart_items.appendChild(itemDiv);
});
/////////////////////////////--------------------header
var menu = document.querySelector(".menu");
menu.querySelectorAll("a").forEach((e) => {
  offcanvas.innerHTML+='<a herf="#" class="submenu">'+e.innerText+'</a>';
});
///////////////////////////--------------------delete cart
function detleteItem() {
  cart_items.removeChild(cart_items.firstElementChild);
  cart_items.innerText = "Your cart is empty";
}
/////////////////////////////-----------------LightBox
function openLightbox(e) {
  if(e.classList.contains('LightBox')!=true){
  var product__image= document.getElementById("product__image");
  product__image.classList.add("LightBox");
 var closebtn=document.createElement("img");
 closebtn.setAttribute('class','closeBtn');
 closebtn.setAttribute('onclick','closeLightbox()');
 closebtn.setAttribute('src','./images/icon-close.svg');
 var nextbtn=document.createElement("img");
 nextbtn.setAttribute('class','nextBtn');
 nextbtn.setAttribute('onclick','closeLightbox()');
 nextbtn.setAttribute('src','./images/icon-next.svg');
 var prvbtn=document.createElement("img");
 prvbtn.setAttribute('class','prvBtn');
 prvbtn.setAttribute('onclick','closeLightbox()');
 prvbtn.setAttribute('src','./images/icon-previous.svg');
 product__image.appendChild(prvbtn);
 product__image.appendChild(nextbtn);
 product__image.appendChild(closebtn);
}
}
///////////////////////////////------------------CloseLightBox
function closeLightbox() {
  var product__image= document.getElementById("product__image");
  product__image.classList.remove("LightBox");
 var closeBtn= document.querySelector(".closeBtn");
closeBtn.remove();
var nextBtn= document.querySelector(".nextBtn");
nextBtn.remove();
var prvBtn= document.querySelector(".prvBtn");
prvBtn.remove();
}
/////////////////////////---------------Change Preview image
function changepreview(e) {
 var subImgs= document.querySelector(".product__subimages")

subImgs.querySelectorAll("img").forEach(e => {
  if(e.classList.contains("img--Active")==true){
e.classList.remove("img--Active");
  }
});
    
  
  e.classList.add("img--Active");
  console.log(e.dataset.image);
  var thumbnail=document.querySelector(".thumbnail");
  console.log(thumbnail.src);
  thumbnail.src=e.dataset.image;
 
}
///////////////////------------------forward/backward
function slide(action,pos) {
  
}