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
  console.log(window.innerHeight);
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
