const productDetails = [
{
  name: "Airpods Pro",
  price: 100,
  imageUrl:
  "https://od.lk/s/OTFfMzEzNzE4Mzhf/smartechlogo_page-0001__1_-removebg-preview.png",
  qty: 10,
  heading: "Turis 1",
  des:
  "Turis 2." },

{
  name: "Apple Watch",
  price: 100,
  imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
  qty: 15,
  heading: "Turis 3",
  des:
  "Turis 4." },

{
  name: "Macbook Pro",
  price: 100,
  imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
  qty: 20,
  heading: "Turis 5",
  des:
  "Turis 6." },

{
  name: "iPhone 11 pro",
  price: 100,
  imageUrl:
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
  qty: 35,
  heading: "Turis 7",
  des:
  " Turis 8." },

{
  name: "iPad Pro",
  price: 100,
  imageUrl:
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
  qty: 25,
  heading: "Turis 9",
  des:
  "Turis 10." }];


const cartDetails = [];

//click events {
function addItem(event) {
  let btnClicked =
  event.parentElement.parentElement.parentElement.parentElement.parentElement;
  let noStocks = btnClicked.getElementsByClassName("out-of-stock-cover")[0];
  if (noStocks.style.display == "flex") return;
  let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
  let price = parseFloat(
  btnClicked.
  getElementsByClassName("product-price")[0].
  innerText.replace("€ ", ""));

  let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
  SwitchBtns(btnClicked);
  let cartItem = {
    name,
    price,
    imgSrc,
    qty: 1 };

  CartItems(cartItem);
  cartDetails.push(cartItem);
  RenderCart();
  CartItemsTotal();
}

function removeItem(event) {
  let btnClicked = event.parentElement;
  let itemName = btnClicked.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  cartDetails.forEach((item, i) => {
    if (itemName == item.name) {
      cartDetails.splice(i, 1);
      for (let name of productNames) {
        if (itemName == name.innerText) {
          let found = name.parentElement.parentElement;
          SwitchBtns(found);
        }
      }
    }
  });
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function clearCart() {
  ToggleBackBtns();
  cartDetails.length = 0;
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function qtyChange(event, handler) {
  let btnClicked = event.parentElement.parentElement;
  let isPresent = btnClicked.classList.contains("btn-add");
  let itemName = isPresent ?
  btnClicked.parentElement.parentElement.getElementsByClassName(
  "product-name")[
  0].innerText :
  btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  for (let name of productNames) {
    if (itemName == name.innerText) {
      let productBtn = name.parentElement.parentElement.getElementsByClassName(
      "qty-change")[
      0];
      cartDetails.forEach((item, i) => {
        if (itemName == item.name) {
          if (handler == "add" && item.qty < 10) {
            item.qty += 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
          } else if (handler == "sub") {
            item.qty -= 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
            if (item.qty < 1) {
              cartDetails.splice(i, 1);
              productBtn.innerHTML = AddBtn();
              productBtn.classList.toggle("qty-change");
            }
          } else {
            document.getElementsByClassName("purchase-cover")[0].style.display =
            "block";
            document.getElementsByClassName("stock-limit")[0].style.display =
            "flex";
            sideNav(0);
          }
        }
      });
    }
  }
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function limitPurchase(event) {
  document.getElementsByClassName("purchase-cover")[0].style.display = "none";
  event.parentElement.style.display = "none";
  sideNav(1);
}

function sideNav(handler) {
  let sideNav = document.getElementsByClassName("side-nav")[0];
  let cover = document.getElementsByClassName("cover")[0];
  sideNav.style.right = handler ? "0" : "-100%";
  cover.style.display = handler ? "block" : "none";
  CartIsEmpty();
}

function buy(handler) {
  if (cartDetails.length == 0) return;
  sideNav(!handler);
  document.getElementsByClassName("purchase-cover")[0].style.display = handler ?
  "block" :
  "none";
  document.getElementsByClassName("order-now")[0].innerHTML = handler ?
  Purchase() :
  "";
}

function order() {
  let invoice = document.getElementsByClassName("invoice")[0];
  invoice.style.height = "500px";
  invoice.style.width = "400px";
  invoice.innerHTML = OrderConfirm();
  ToggleBackBtns();
  Stocks();
  clearCart();
}

function okay(event) {
  let container = document.getElementsByClassName("invoice")[0];
  if (event.target.innerText == "Tskler") {
    container.style.display = "none";
    document.getElementsByClassName("purchase-cover")[0].style.display = "none";
  } else {
    event.target.innerText = "Tskler";
    event.target.parentElement.getElementsByClassName(
    "order-details")[
    0].innerHTML = `<em class='thanks'>Bizimle alışveriş yaptığınız için teşekkürler</em>`;
    container.style.height = "180px";
  }
}
//}

// button components for better Ux {
function AddBtn() {
  return `
<div>
  <button onclick='addItem(this)' class='add-btn'>Ekle <i class='fas fa-chevron-right'></i></button>
</div>`;
}

function QtyBtn(qty = 1) {
  if (qty == 0) return AddBtn();
  return `
<div>
  <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
  <p class='qty'>${qty}</p>
  <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
</div>`;
}
//}

//Ui components {
function Product(product = {}) {
  let { name, price, imageUrl, heading, des } = product;
  return `
<div class='card'>
  <div class='top-bar'>
    <i class='fab fa-apple'></i>
    <em class="stocks">In Stock</em>
  </div>
  <div class='img-container'>
    <img class='product-img' src='${imageUrl}' alt='' />
    <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
  </div>
  <div class='details'>
    <div class='name-fav'>
      <strong class='product-name'>${name}</strong>
      <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
    </div>
    <div class='wrapper'>
      <h5>${heading}</h5>
      <p>${des}</p>
    </div>
    <div class='purchase'>
      <p class='product-price'>€ ${price}</p>
      <span class='btn-add'>${AddBtn()}</span>
    </div>
  </div>
</div>`;
}

function CartItems(cartItem = {}) {
  let { name, price, imgSrc, qty } = cartItem;
  return `
<div class='cart-item'>
  <div class='cart-img'>
    <img src='${imgSrc}' alt='' />
  </div>
  <strong class='name'>${name}</strong>
  <span class='qty-change'>${QtyBtn(qty)}</span>
  <p class='price'>€ ${price * qty}</p>
  <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
</div>`;
}

function Banner() {
  return `
<div class='banner'>
  <ul class="box-area">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>
  <div class='main-cart'>${DisplayProducts()}</div>

  <div class='nav'>
    <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>
    <span class= 'total-qty'>0</span>
  </div>
  <div onclick='sideNav(0)' class='cover'></div>
  <div class='cover purchase-cover'></div>
  <div class='cart'>${CartSideNav()}</div>
  <div class='stock-limit'>
    <em>You Can Only Buy 10 Items For Each Product</em>
    <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
  </div>
<div  class='order-now'></div>
</div>`;
}

function CartSideNav() {
  return `
<div class='side-nav'>
  <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
  <h2>Ürünler</h2>
  <div class='cart-items'></div>
  <div class='final'>
    <strong>Total: € <span class='total'>0</span>.00/-</strong>
    <div class='action'>
      <button onclick='buy(1)' class='btn buy'>Satın almak<i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
      <button onclick='clearCart()' class='btn clear'>Temizle Ürünleri <i class='fas fa-trash' style='color:#bb342f;'></i></button>


<a href="mailto:smartech.mariakerke@gmail.com">
      <button onclick='Send Email()' class='Send Email'>Mail Gönder<i class='fa fa-paper-plane' style='color:#bb342f;'></i></button>
<a href="mailto:smartech.mariakerke@gmail.com">

</a>
 </div>
  </div>
</div>`;
}

function Purchase() {
  let toPay = document.getElementsByClassName("total")[0].innerText;
  let itemNames = cartDetails.map(item => {
    return `<span>${item.qty} x ${item.name}</span>`;
  });
  let itemPrices = cartDetails.map(item => {
    return `<span>€ ${item.price * item.qty}</span>`;
  });
  return `
<div class='invoice'>
  <div class='shipping-items'>
    <div class='item-names'>${itemNames.join("")}</div>
    <div class='items-price'>${itemPrices.join("+")}</div>
  </div>
<hr>
  <div class='payment'>
    <em>ödeme</em>
    <div>
      <p>ödenecek toplam tutar:</p><span class='pay'>€ ${toPay}</span>
    </div>
  </div>
  <div class='order'>
    <button onclick='order()' class='btn-order btn'>Şimdi Sipariş Ver</button>
    <button onclick='buy(0)' class='btn-cancel btn'>Iptal</button>
  </div>
</div>`;
}

function OrderConfirm() {
  let orderId = Math.round(Math.random() * 1000);
  let totalCost = document.getElementsByClassName("total")[0].innerText;
  return `
<div>
  <div class='order-details'>
    <em>siparişiniz verildi</em>
    <p>Sipariş kimliğiniz: : <span>${orderId}</span></p>
    <p>siparişiniz 3-5 iş günü içerisinde tarafınıza teslim edilecektir</p>
    <p>ödeyebilirsin <span>€ ${totalCost}</span> Ürünler tarafınıza teslim edildikten sonra kartla veya herhangi bir online işlem yöntemiyle</p>
  </div>
  <button onclick='okay(event)' class='btn-ok'>Tamam</button>

</div>`;
}
//}

//updates Ui components {
function DisplayProducts() {
  let products = productDetails.map(product => {
    return Product(product);
  });
  return products.join("");
}

function DisplayCartItems() {
  let cartItems = cartDetails.map(cartItem => {
    return CartItems(cartItem);
  });
  return cartItems.join("");
}

function RenderCart() {
  document.getElementsByClassName(
  "cart-items")[
  0].innerHTML = DisplayCartItems();
}

function SwitchBtns(found) {
  let element = found.getElementsByClassName("btn-add")[0];
  element.classList.toggle("qty-change");
  let hasClass = element.classList.contains("qty-change");
  found.getElementsByClassName("btn-add")[0].innerHTML = hasClass ?
  QtyBtn() :
  AddBtn();
}

function ToggleBackBtns() {
  let btns = document.getElementsByClassName("btn-add");
  for (let btn of btns) {
    if (btn.classList.contains("qty-change")) {
      btn.classList.toggle("qty-change");
    }
    btn.innerHTML = AddBtn();
  }
}

function CartIsEmpty() {
  let emptyCart = `<span class='empty-cart'>Görünüşe göre Sepete Herhangi Bir Ürün Eklememişsiniz</span>`;
  if (cartDetails.length == 0) {
    document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
  }
}

function CartItemsTotal() {
  let totalPrice = cartDetails.reduce((totalCost, item) => {
    return totalCost + item.price * item.qty;
  }, 0);
  let totalQty = cartDetails.reduce((total, item) => {
    return total + item.qty;
  }, 0);
  document.getElementsByClassName("total")[0].innerText = totalPrice;
  document.getElementsByClassName("total-qty")[0].innerText = totalQty;
}

function Stocks() {
  cartDetails.forEach(item => {
    productDetails.forEach(product => {
      if (item.name == product.name && product.qty >= 0) {
        product.qty -= item.qty;
        if (product.qty < 0) {
          product.qty += item.qty;
          document.getElementsByClassName("invoice")[0].style.height = "180px";
          document.getElementsByClassName(
          "order-details")[
          0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
        } else if (product.qty == 0) {
          OutOfStock(product, 1);
        } else if (product.qty <= 5) {
          OutOfStock(product, 0);
        }
      }
    });
  });
}

function OutOfStock(product, handler) {
  let products = document.getElementsByClassName("card");
  for (let items of products) {
    let stocks = items.getElementsByClassName("stocks")[0];
    let name = items.getElementsByClassName("product-name")[0].innerText;
    if (product.name == name) {
      if (handler) {
        items.getElementsByClassName("out-of-stock-cover")[0].style.display =
        "flex";
        stocks.style.display = "none";
      } else {
        stocks.innerText = "Only Few Left";
        stocks.style.color = "orange";
      }
    }
  }
}

function App() {
  return `
<div>
  ${Banner()}
</div>`;
}
//}

// injects the rendered component's html
document.getElementById("app").innerHTML = App();