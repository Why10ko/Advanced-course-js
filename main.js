class ProductList {
  constructor(container='.products'){
    this.container = container;
    this.goods = [];
    this._fetchProducts();
    this.render();
    this.totalSum();
  }
  _fetchProducts(){
    this.goods = [
      {id:1,title:'Notebook',price:200000},
      {id:2,title:'Mouse',price:2000},
      {id:3,title:'Keybord',price:4000},
      {id:4,title:'Phone',price:15000}
    ];
  }
  render(){
    const block = document.querySelector(this.container);
    for(let product of this.goods){
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend",item.render());
    }
  }
  totalSum(){
    return this.goods.reduce((firstArg, {price}) => {
      return firstArg + price;
    },0)
  }
}

class ProductItem{
  constructor(product){
    this.title = product.title;
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

let list = new ProductList();

// Выводим сумму ксех товаров:
let total = list.totalSum();
console.log(total);

class Basket {
  addGoo () {

  }
  removeGood () {

  }
  changeGood() {

  }
  render() {

  }
 }

 class ElemBasket {
  render() {
    
  }
 }

// const product = [
//   {id:1,title:'Notebook',price:200000},
//   {id:2,title:'Mouse',price:2000},
//   {id:3,title:'Keybord',price:4000},
//   {id:4,title:'Phone',price:15000}
// ];

// const renderProduct = ({title="",price=0}) => 
//   `<div class="product-cell">
//     <h2>${title}</h2>
//     <p>${price}</p>
//     <button>Купить</button>
//   </div>`


// const renderPage = list => {  
//   document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');;
// }

// renderPage(product);