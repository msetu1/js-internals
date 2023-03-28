const getInputById = id => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;

}
const addProduct = () => {
    const product = getInputById('name-field')
    const quantity = getInputById('quantity-field')
    console.log(product, quantity)

    // localStorage.setItem(product, quantity);

    addDisplayProduct(product, quantity);

    savedToLocalStorage(product, quantity)
}
const getShoppingCartLocalStorage = () => {
    let savedCart = localStorage.getItem('cart')
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}
const savedToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartLocalStorage();
    cart[product] = quantity;
    const stringified = JSON.stringify(cart)

    localStorage.setItem('cart', stringified)
}
const addDisplayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)


}

const displayProductStorage = () => {
    const cart = getShoppingCartLocalStorage()
    for (const product in cart) {
        quantity = cart[product]
        console.log(product, quantity)
        addDisplayProduct(product, quantity)
    }

}
displayProductStorage()