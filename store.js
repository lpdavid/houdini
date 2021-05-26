let resetCart = document.querySelector(".reset-cart");
let addCart = document.querySelector(".add-cart");

function getProduct() {
    let productNumber = document.querySelector(".product-number").value;
    document.querySelector(".cart-number").innerHTML = `${productNumber} produto(s) selecionado(s)`;
    let totalPrice = 29.99 * productNumber;
    document.querySelector(".total-price").innerHTML = `${totalPrice}€`;
}

addCart.addEventListener("click", getProduct);

function resetValues() {
    document.querySelector(".product-number").value = "0";
    document.querySelector(".cart-number").innerHTML = "0 produto(s) selecionado(s)";
    document.querySelector(".total-price").innerHTML = "0,00 €";
}

resetCart.addEventListener("click", resetValues);
