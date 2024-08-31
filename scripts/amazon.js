const products = [
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
];

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="rating">
        <span class="stars">${product.rating.stars} stars</span>
        <span class="count">(${product.rating.count})</span>
      </div>
      <div class="price">$${(product.priceCents / 100).toFixed(2)}</div>
      <button>Add to Cart</button>
    </div>
  `;
});
console.log(productsHTML);

document.querySelector(".js-products-grid").innerHTML = productsHTML;
