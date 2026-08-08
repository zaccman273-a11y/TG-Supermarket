<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TG Supermarket</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;background:#f6f7f9;color:#222}
header{background:#0b7a53;color:white;padding:18px 6%;display:flex;align-items:center;justify-content:space-between;gap:20px;position:sticky;top:0;z-index:5}
.logo{font-size:26px;font-weight:800}.logo span{color:#ffd34d}
.search{flex:1;max-width:520px;padding:12px 18px;border:0;border-radius:25px;font-size:15px}
.cart{background:#fff;color:#0b7a53;border:0;border-radius:22px;padding:11px 18px;font-weight:700;cursor:pointer}
.hero{padding:65px 6%;background:linear-gradient(120deg,#e7fff3,#fff8dc);display:flex;align-items:center;justify-content:space-between;gap:30px}
.hero h1{font-size:48px;max-width:650px}.hero p{font-size:19px;margin:18px 0;color:#555}.btn{display:inline-block;background:#0b7a53;color:white;padding:13px 23px;border-radius:8px;text-decoration:none;font-weight:700}
.hero-card{background:white;padding:30px;border-radius:20px;box-shadow:0 12px 35px #0001;font-size:60px}
section{padding:45px 6%}
h2{margin-bottom:25px;font-size:30px}
.categories{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:25px}
.cat{border:0;background:white;padding:12px 18px;border-radius:22px;cursor:pointer;box-shadow:0 3px 12px #00000010}
.cat.active{background:#0b7a53;color:white}
.products{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px}
.product{background:white;border-radius:15px;padding:18px;box-shadow:0 4px 18px #0000000c}
.pic{height:145px;border-radius:12px;background:#eef8f3;display:flex;align-items:center;justify-content:center;font-size:65px;margin-bottom:15px}
.product h3{margin-bottom:8px}.price{color:#0b7a53;font-weight:800;font-size:19px;margin:10px 0}
.add{width:100%;padding:11px;border:0;background:#0b7a53;color:white;border-radius:7px;cursor:pointer;font-weight:700}
footer{background:#16352b;color:white;text-align:center;padding:30px}
#message{position:fixed;right:20px;bottom:20px;background:#16352b;color:#fff;padding:14px 18px;border-radius:10px;display:none}
@media(max-width:700px){header{flex-wrap:wrap}.search{order:3;max-width:none;width:100%}.hero{padding:40px 6%}.hero h1{font-size:36px}.hero-card{display:none}}
</style>
</head>
<body>
<header>
  <div class="logo">TG <span>Supermarket</span></div>
  <input class="search" id="search" placeholder="Search products..." oninput="filterProducts()">
  <button class="cart" onclick="showCart()">🛒 Cart (<span id="count">0</span>)</button>
</header>

<div class="hero">
  <div>
    <h1>Everything you need, in one place.</h1>
    <p>Shop groceries, clothes, cosmetics, snacks and more from TG Supermarket.</p>
    <a href="#shop" class="btn">Shop Now</a>
  </div>
  <div class="hero-card">🛍️</div>
</div>

<section id="shop">
<h2>Shop by category</h2>
<div class="categories">
<button class="cat active" onclick="setCategory('All',this)">All</button>
<button class="cat" onclick="setCategory('Groceries',this)">🥦 Groceries</button>
<button class="cat" onclick="setCategory('Clothes',this)">👕 Clothes</button>
<button class="cat" onclick="setCategory('Cosmetics',this)">💄 Cosmetics</button>
<button class="cat" onclick="setCategory('Snacks',this)">🍪 Snacks</button>
</div>
<div class="products" id="products"></div>
</section>

<footer>
<h3>TG Supermarket</h3>
<p>Quality products • Great service • Easy shopping</p>
<p style="margin-top:10px">📍 Ethiopia | 📞 Contact us to order</p>
</footer>
<div id="message"></div>

<script>
const products=[
{name:"Fresh Vegetables",cat:"Groceries",price:120,icon:"🥦"},
{name:"Fresh Fruits",cat:"Groceries",price:180,icon:"🍎"},
{name:"Kids T-Shirt",cat:"Clothes",price:450,icon:"👕"},
{name:"Dinner Dress",cat:"Clothes",price:1200,icon:"👗"},
{name:"Face Cream",cat:"Cosmetics",price:650,icon:"🧴"},
{name:"Perfume",cat:"Cosmetics",price:900,icon:"🌸"},
{name:"Biscuits",cat:"Snacks",price:80,icon:"🍪"},
{name:"Potato Chips",cat:"Snacks",price:100,icon:"🍟"}
];
let category="All",cart=0;
function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const list=products.filter(p=>(category==="All"||p.cat===category)&&p.name.toLowerCase().includes(q));
 document.getElementById("products").innerHTML=list.map(p=>`
 <div class="product"><div class="pic">${p.icon}</div><h3>${p.name}</h3>
 <small>${p.cat}</small><div class="price">${p.price} ETB</div>
 <button class="add" onclick="addToCart('${p.name}')">Add to Cart</button></div>`).join("") ||
 '<p>No products found.</p>';
}
function setCategory(c,el){category=c;document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));el.classList.add("active");render()}
function filterProducts(){render()}
function addToCart(name){cart++;document.getElementById("count").textContent=cart;notify(name+" added to cart 🛒")}
function showCart(){notify("Your cart has "+cart+" item(s).")}
function notify(text){let m=document.getElementById("message");m.textContent=text;m.style.display="block";setTimeout(()=>m.style.display="none",1800)}
render();
</script>
</body>
</html>
