const products = [
  {name:"Vegetables", price:"120 Birr"},
  {name:"Fruits", price:"180 Birr"},
  {name:"Children's Clothes", price:"450 Birr"},
  {name:"Cosmetics", price:"300 Birr"},
  {name:"Snacks", price:"100 Birr"},
  {name:"Mixed Products", price:"250 Birr"}
];

const list = document.getElementById("product-list");
list.innerHTML = products.map(p => `
  <div class="card">
    <h3>${p.name}</h3>
    <p class="price">${p.price}</p>
    <button class="buy" onclick="alert('Thank you for choosing TG Supermarket!')">Buy</button>
  </div>
`).join("");
