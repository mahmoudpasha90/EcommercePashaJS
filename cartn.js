const cartGrid = document.getElementById("cart-grid");
const totalItems = document.getElementById("total-items");
const totalPrice = document.getElementById("total-price");
const tax = document.getElementById("tax");
const grandTotal = document.getElementById("grand-total");
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function displayCart() {
    cartGrid.innerHTML = "";
    let total = 0;
    let itemCount = 0;
    if (cart.length === 0) {
        document.querySelector(".cart-title").style.display = "none";
        document.querySelector(".cart-summary").style.display = "none";
        document.querySelector(".cart-content").innerHTML = `
            <h2 class="empty-cart-message">Your Cart is Empty! 🛒</h2>
        `;
        return;
    }
    document.querySelector(".cart-title").style.display = "flex";
    document.querySelector(".cart-summary").style.display = "flex";
    cart.forEach((product, index) => {
        total += product.price * product.quantity;
        itemCount += product.quantity;
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="item-details">
                <h3>${product.name}</h3>
            </div>
            <div class="item-actions">
                <span class="price">$${product.price}</span>

                <div class="quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${product.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <button class="delete-btn" onclick="removeFromCart(${index})">Remove</button>
            <div class="sub">
            <span class="subtotal">SubTotale :&nbsp;&nbsp;&nbsp; $${(product.price * product.quantity).toFixed(2)}</span>
            </div>
            </div>
            `;
        cartGrid.appendChild(item);
    });

    totalItems.textContent = itemCount;
    totalPrice.textContent = total.toFixed(2);
    tax.textContent = (total * 0.1).toFixed(2);
    grandTotal.textContent = (total * 1.1).toFixed(2);
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}



function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
document.addEventListener("DOMContentLoaded", displayCart);
const gopayment = document.getElementById("gotopayment");
gopayment.addEventListener('click', event => {
    window.location.href = "/payment.html";
})
function removeFromCart(index) {
    if (confirm("Are you sure you want to remove this item?")) {
        cart.splice(index, 1);
        updateCart();
    }
}
