const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
  constructor(container = '.products'){
      this.container = container;
      this.goods = [];
      this._getProducts()
          .then(data => {
               this.goods = data;
               this.render()
          });
  }
  _getProducts(){ 
      return fetch(`${API}/catalogData.json`)
          .then(result => result.json())
          .catch(error => {
              console.log(error);
          });
  }
  calcSum(){
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }
  render(){
      const block = document.querySelector(this.container);
      for (let product of this.goods){
          const productObj = new ProductItem(product);
          block.insertAdjacentHTML('beforeend', productObj.render());
      }
  }
}

class ProductItem{
  constructor(product){
    this.title = product.product_name;
    this.id = product.id;
    this.price = product.price;
  }
  render(){
    return `<div class="product-cell">
    <h2>${this.title}</h2>
    <p>${this.price}</p>
    <button>Купить</button>
  </div>`
  }
}

let list = new ProductsList();


///
class Basket {
  constructor(container = '.productsBasket'){
      this.container = container;
      this.basketGoods = [];
      this._clickBasket();
      this._getBasketProducts()
          .then(data => {
               this.basketGoods = data.contents;
               this.render()
          });
  }
  _getBasketProducts(){ 
      return fetch(`${API}/getBasket.json`)
          .then(result => result.json())
          .catch(error => {
              console.log(error);
          });
  }
  
  render(){
      const block = document.querySelector(this.container);
      for (let product of this.basketGoods){
          const productObjBasket = new ProductBasketItem(product);
          block.insertAdjacentHTML('beforeend', productObjBasket.render(product));
      }
  }
  _clickBasket(){
    document.querySelector('.basketButton').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible')
    })
  }
}


class ProductBasketItem{
  render(product){
    return `<div class="cart-item" data-id="${product.id_product}">
            <div class="product-bio">
            <div class="product-desc">
            <p class="product-title">${product.product_name}</p>
            <p class="product-quantity">Quantity: ${product.quantity}</p>
            <p class="product-single-price">${product.price}</p>
            </div>
            </div>
            
            </div>`
  }
}

let objBasket = new Basket();
