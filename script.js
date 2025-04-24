
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
//------------------- Display Products --------------------//
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const item = document.getElementById("cont");
    const washBtn = document.getElementById("wash");
    const mobileBtn = document.getElementById("mobile");
    const otherBtn = document.getElementById("other");
    const allBtn = document.getElementById("all");
    function displayProducts(filtered) {
      item.innerHTML = "";
      filtered.forEach(product => {
        item.innerHTML += `
          <div class="pro">
            <div class="img-continer">
              <img src="${product.img}">
            </div>
            <div class="discription">
              <span>${product.catetory}</span>
              <h3>${product.name}</h3>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h3>${product.price}</h3>
            </div>
            <i class="fa-solid fa-cart-shopping cart addtocart" data-id="${product.id}"></i>
          </div>
        `;
      });

      addCartListeners();
    }

    // عرض الكل في البداية
    displayProducts(data);

    // search
    washBtn.addEventListener("click", () => displayProducts(data.filter(p => p.catetory === "washes")));
    mobileBtn.addEventListener("click", () => displayProducts(data.filter(p => p.catetory === "mobile")));
    otherBtn.addEventListener("click", () => displayProducts(data.filter(p => p.catetory === "appliances")));
    allBtn.addEventListener("click", () => displayProducts(data));

    function addCartListeners() {
      const addToCartButtons = document.querySelectorAll('.addtocart');
      addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
          const productId = event.target.getAttribute('data-id');
          const selectedProduct = data.find(product => product.id == productId);
          selectedProduct.quantity = 1;
          addToCart(selectedProduct);
        });
      });
    }
  });
  

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}
function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
    updateCartCount();
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Added to cart!");
 
}

 
