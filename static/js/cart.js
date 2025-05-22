function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
    displayCart();
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalContainer = document.getElementById("cart-total");

    if (!cartContainer) return;

    // Update cart items
    cartContainer.innerHTML = cart.map(item => `
        <li class="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span>${item.name}</span>
            <div class="flex items-center gap-4">
                <span>₹${item.price} x ${item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')" 
                    class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </li>`
    ).join("");

    // Update total
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalContainer.innerText = total;
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    updateCartCount();
}

// Initialize cart on load
window.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});