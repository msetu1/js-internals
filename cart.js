const getInputById = id => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;

}
const addProduct = () => {
    const product = getInputById('product-name-field')
    const quantity = getInputById('product-quantity-field')
    console.log(product, quantity)

    AddProductToDisplay(product, quantity)

    // localStorage.setItem(product, quantity)
    saveItemLocalStorage(product, quantity)
}


const getShoppingCartLocalStorage = () => {
    let savedCart = localStorage.getItem('cart')
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;

};

const saveItemLocalStorage = (product, quantity) => {
    const cart = getShoppingCartLocalStorage()
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const AddProductToDisplay = (product, quantity) => {
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
        AddProductToDisplay(product, quantity)
    }
}
displayProductStorage()