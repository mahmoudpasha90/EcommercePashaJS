let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
//__________________slider________________________
fetch('products.json')
  .then(Response => Response.json())
  .then(data => {
    //console.log(data)
    const item = document.getElementById("cont")
    const buttomcatogry = document.getElementById("wash")
    const buttomcatogry2 = document.getElementById("mobile")
    const buttomcatogry3 = document.getElementById("other")
    const buttomcatogry4 = document.getElementById("all")
    data.forEach(product => {
      if (product) {
        item.innerHTML += `
   <div class="pro" id="was-visible" ">
   <div class="img-continer">
  <img src="${product.img}">
  </div>
        <div class="discription">
          <span>${product.catetory}</span>
          <h3>${product.name}<h3>
              <div class="star"> 
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h3>${product.price}</h3>
        </div>
      <i class="fa-solid fa-cart-shopping cart addtocart"  data-id="${product.id}"></i>

  </div>
  
  `
      }
    })
    buttomcatogry.addEventListener("click", () => {
      item.innerHTML = "";
      data.forEach(product => {
        if (product.catetory == "washes") {
          item.innerHTML += `
   <div class="pro" id="was-visible" ">
  <img src="${product.img}">
        <div class="discription">
          <span>${product.catetory}</span>
          <h3>${product.name}<h3>
              <div class="star"> 
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h3>${product.price}</h3>
        </div>
      <i class="fa-solid fa-cart-shopping cart addtocart"  data-id="${product.id}"></i>

  </div>
  
  `
        }
      })
    })
    buttomcatogry2.addEventListener("click", () => {
      item.innerHTML = "";
      data.forEach(product => {
        if (product.catetory == "mobile") {
          item.innerHTML += `
 <div class="pro" id="was-visible" ">
<img src="${product.img}">
      <div class="discription">
        <span>${product.catetory}</span>
        <h3>${product.name}<h3>
            <div class="star"> 
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3>${product.price}</h3>
      </div>
    <span class="addtocart" data_id="${product.id}"><i class="fa-solid fa-cart-shopping cart"></i>
</span>
</div>

`
        }
      })
    })
    buttomcatogry3.addEventListener("click", () => {
      item.innerHTML = "";
      data.forEach(product => {
        if (product.catetory == "appliances") {
          item.innerHTML += `
 <div class="pro" id="was-visible" ">
<img src="${product.img}">
      <div class="discription">
        <span>${product.catetory}</span>
        <h3>${product.name}<h3>
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

`
        }
      })
    })
    buttomcatogry4.addEventListener("click", () => {
      item.innerHTML = "";
      data.forEach(product => {
        if (product) {
          item.innerHTML += `
<div class="pro" id="was-visible" ">
<div class="img-continer">
<img src="${product.img}">
</div>
    <div class="discription">
      <span>${product.catetory}</span>
      <h3>${product.name}<h3>
          <div class="star"> 
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h3>${product.price}</h3>
    </div>
  <i class="fa-solid fa-cart-shopping cart addtocart"  data-id="${product.id}"></i>



</div>

`
        }
      })
    })
  })
//--------------------------fetch----------------------------
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    const addToCartButtons = document.querySelectorAll('.addtocart');
    // console.log(addToCartButtons);
    addToCartButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute('data-id');
        const selectedProduct = data.find(product => product.id == productId);
        selectedProduct.quantity = 1;

        addToCart(selectedProduct);
      })

    })
  })

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  // cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  console.log('Product added to cart:', product);
  alert("added to cart!");
}
