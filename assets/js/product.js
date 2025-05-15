// Hàm hiển thị sao đánh giá (nếu có)
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let html = "";

  // Hiển thị sao đầy
  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fa-solid fa-star"></i>';
  }

  // Hiển thị nửa sao nếu có
  if (hasHalfStar) {
    html += '<i class="fa-regular fa-star-half-stroke"></i>';
  }

  // Hiển thị sao rỗng (viền mảnh)
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    html += '<i class="fa-regular fa-star"></i>';
  }

  return html;
}


// Gọi dữ liệu từ product.json và hiển thị
fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("productList");

    products.forEach(product => {
      // Tạo HTML khuyến mãi
      const promotionsHtml = product.promotions?.map(promo => `
        <li class="section-product__item_information_promotions_item">${promo}</li>
      `).join("") || "";

      // Tạo phần đánh giá nếu có
      let evaluateHtml = '';
      if (product.ratingCount && product.ratingCount > 0) {
        evaluateHtml = `
          <div class="section-product__item_information_evaluate">
            <div class="section-product__item_information_evaluate_star">
              ${renderStars(product.ratingStars)}
            </div>
            <a href="${product.href}" class="section-product__item_information_evaluate_link">
              (<span class="count">${product.ratingCount}</span> Đánh giá)
            </a>
          </div>
        `;
      }

      // HTML sản phẩm
      const productHtml = `
        <div class="section-product__item">
          <div class="section-product__item_discount">
            <span>-${product.discountPercent}%</span>
          </div>
          <div class="section-product__item_information">
            <div class="section-product__item_information_image">
              <a href="${product.href}" class="section-product__item_information_link">
                <img src="${product.image}" width="100%" alt="${product.name}">
              </a>
              <a href="${product.href}" class="section-product__item_information_promotions">
                <ul class="section-product__item_information_promotions_list">
                  ${promotionsHtml}
                </ul>
              </a>
            </div>
            <div class="section-product__item_information_text">
              <div class="section-product__item_information_describe">
                <p><a href="${product.href}">${product.name}</a></p>
              </div>
              <div class="section-product__item_information_price">
                <span>${product.finalPrice.toLocaleString()} <span>₫</span></span>
              </div>
              ${evaluateHtml}
            </div>
          </div>
        </div>
      `;

      container.innerHTML += productHtml;
    });
  })
  .catch(error => console.error("Lỗi khi tải dữ liệu sản phẩm:", error));
