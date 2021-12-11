const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "ztj6dr0cbv1l",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Gsa_BTCp1vFvYJufZukIost1pcwaZKUBNOeUHzW9ezI"
});


const cartBtn = document.querySelector('.cart__btn');
const closeCartBtn = document.querySelector('.close__cart');
const clearCartBtn = document.querySelector('.clear__cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart__overlay');
const cartItems = document.querySelector('.cart__items');
const cartTotal = document.querySelector('.cart__total');
const cartContent = document.querySelector('.cart__content');
const productsDOM = document.querySelector('.products__center');

// cart
let cart = [];
// buttons
let buttonsDOM = [];

// lấy sản phẩm
class Products{
    async getProducts(){
        try {
            //sử dụng API sản phẩm của contentful.com
            let contentful = await client.getEntries({
                content_type: "toppingShop"
            });
            

            




            //sử dụng API từ products.json
            let result = await fetch("json/products.json");
            let data = await result.json();

            let products = data.items;   //data hoac contenful
            
            products = products.map(item =>{
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.warn("Lỗi");
        }
    }
}

// display products
class UI{
    displayProducts(products){
        let result = "";
        products.forEach(product => {
            result +=`
            <!-- đưa ra từng sản phẩm tới html -->
                <div class="product">
                    <div class="img__container">
                        <img src=${product.image} alt="product" class="product__img">
                        <button class="bag__btn" data-id=${product.id}>
                            <i class="fas fa-cart-plus">add to cart</i>
                        </button>
                    </div>
                    <div class="name__item">${product.title}</div>
                    <h4>${product.price} &#8363;</h4>
                </div>
            <!-- end -->
                `;
        });
        productsDOM.innerHTML = result;
    }
    getBagButtons(){
        const buttons = [...document.querySelectorAll('.bag__btn')];
        buttonsDOM = buttons; 
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart){
                button.innerText = "Đã thêm";
                button.disabled = true;
            }
            button.addEventListener("click", event =>{
                event.target.innerText = "Đã thêm";        
                event.target.disabled = true;
                //lay san pham trong danh sach san pham
                let cartItem = {...Storage.getProduct(id), amount: 1};
                // them san pham vao gio hang
                cart = [...cart, cartItem];
                // luu gio hang trong local storage
                Storage.saveCart(cart);
                // hien thi so luong    hang co trong gio hang
                this.setCartValues(cart);
                // hien thi san pham trong gio hang
                this.addCartItem(cartItem);
                // hien thi gio hang
                this.showCart();
            });    
    });
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart__item');
        div.innerHTML = `
        <img src=${item.image} alt="product">
        <div>
            <div class="title">${item.title}</div>
            <h5>${item.price} &#8363;</h5>
            <span class="remove__item" data-id=${item.id}>Xóa</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item__amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>
        `;
    cartContent.appendChild(div);
    }
    showCart(){
        cartOverlay.classList.add("transparentBcg");
        cartDOM.classList.add("showCart");
    }
    setupAPP(){
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }
    populateCart(cart){
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart(){
        cartOverlay.classList.remove("transparentBcg");
        cartDOM.classList.remove("showCart");
    }
    cartLogic(){
        // xoa toan bo gio hang
        clearCartBtn.addEventListener("click", () =>{
            this.clearCart();
        });
        cartContent.addEventListener("click", event =>{
            if(event.target.classList.contains("remove__item")){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement)
                this.removeItem(id)
            }
            else if(event.target.classList.contains("fa-chevron-up")){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }
            else if(event.target.classList.contains("fa-chevron-down")){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        });
    }
    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children);

        while(cartContent.children.length>0) {
            cartContent.removeChild(cartContent.children[0])
        }
        this.hideCart();
    }
    removeItem(id){
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `
        <i class="fas fa-shopping-cart"></i>add to cart</i>
        `;
    }
    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}

// local storage de luu cac san pham da chon vao local storage cua browser
class Storage{
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
    }
    static saveCart(){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // goi toi setupApp
    ui.setupAPP();

    // get all products
    products
    .getProducts()
    .then(products =>{
        ui.displayProducts(products);
        Storage.saveProducts(products);
    })
    .then(() => {
        ui.getBagButtons();
        ui.cartLogic();
    });
});