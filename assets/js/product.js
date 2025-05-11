fetch("data/products.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("product-list");
    data.forEach(product => {
      container.innerHTML += `
        <div class="product-item">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price.toLocaleString()}₫</p>
        </div>
      `;
    });
  });