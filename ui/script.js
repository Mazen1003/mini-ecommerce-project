let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartDisplay.textContent = "Cart: " + cartCount;

        button.textContent = "Added ✓";
        button.disabled = true;

    });

});
