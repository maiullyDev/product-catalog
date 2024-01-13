const products = [
  {
    id: 1,
    name: "Vestido Vermelho",
    category: "vestidos",
    price: 150.0,
    image: "/assets/productImages/dress-2.jpeg",
  },
  {
    id: 2,
    name: "Vestido Midi",
    category: "vestidos",
    price: 100.0,
    image: "/assets/productImages/dress-1.jpeg",
  },
  {
    id: 3,
    name: "Scarpin",
    category: "calcados",
    price: 199.99,
    image: "/assets/productImages/scarpin.jpeg",
  },
  {
    id: 4,
    name: "Tênis Cano Alto",
    category: "calcados",
    price: 269.99,
    image: "/assets/productImages/shoes.png",
  },
  {
    id: 5,
    name: "Camiseta básica",
    category: "camisas",
    price: 24.99,
    image: "/assets/productImages/shirt.png",
  },
  {
    id: 6,
    name: "Moletom",
    category: "camisas",
    price: 99.99,
    image: "/assets/productImages/sweatshirt.png",
  },
];

function displayProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
          <img src=${product.image} alt="">
          <h3>${product.name}</h3>
          <p><strong>R$${product.price.toFixed(2)}</strong></p>
          <p>em 12x de R$ ${(product.price / 12).toFixed(2)}<p/>
        `;
    productsContainer.appendChild(productDiv);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function () {
  const selectedCategory = this.value;
  filterProducts(selectedCategory);
});

displayProducts(products);
