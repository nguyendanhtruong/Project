// Hàm thêm sản phẩm vào giỏ hàng
function addItem(product) {
  // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
  var cartItems = document.querySelector(".cart-items");
  var newItem = document.createElement("div");
  newItem.classList.add("cart-item");

  // Thêm hình ảnh sản phẩm
  var img = document.createElement("img");
  img.src = product.image;
  newItem.appendChild(img);

  // Thêm tiêu đề sản phẩm
  var h2 = document.createElement("h2");
  h2.textContent = product.title;
  newItem.appendChild(h2);

  // Thêm giá sản phẩm
  var p = document.createElement("p");
  p.textContent = product.price + "đ";
  newItem.appendChild(p);

  // Thêm nút xóa sản phẩm
  var button = document.createElement("button");
  button.textContent = "Xóa";
  button.addEventListener("click", function () {
    // Xóa sản phẩm khỏi danh sách sản phẩm trong giỏ hàng
    cartItems.removeChild(newItem);
  });
  newItem.appendChild(button);

  // Thêm sản phẩm mới vào danh sách sản phẩm trong giỏ hàng
  cartItems.appendChild(newItem);

  // Cập nhật tổng giá trị giỏ hàng
  updateTotal();
}

// Hàm cập nhật tổng giá trị giỏ hàng
function updateTotal() {
  // Lấy tổng giá trị của tất cả các sản phẩm trong giỏ hàng
  var total = 0;
  for (var i = 0; i < document.querySelectorAll(".cart-item").length; i++) {
    total += parseFloat(
      document.querySelectorAll(".cart-item")[i].querySelector("p").textContent
    );
  }

  // Cập nhật giá trị của thẻ tổng giá trị
  document.querySelector(".cart-total").textContent = total + "đ";
}

// Hàm khởi tạo
window.onload = function () {
  // Thêm một số sản phẩm mẫu vào giỏ hàng
  addItem({
    image: "https://via.placeholder.com/100x100",
    title: "Sản phẩm 1",
    price: 100000,
  });
  addItem({
    image: "https://via.placeholder.com/100x100",
    title: "Sản phẩm 2",
    price: 200000,
  });

  // Cập nhật tổng giá trị giỏ hàng
  updateTotal();
};
