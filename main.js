const product = [
  {id:1,title:'Notebook',price:200000},
  {id:2,title:'Mouse',price:2000},
  {id:3,title:'Keybord',price:4000},
  {id:4,title:'Phone',price:15000}
];

// В функции renderPage передать item, в функции renderProduct деструктурируем и задаем значения по умолчанию.

const renderProduct = ({title="",price=0}) => 
  `<div class="product-cell">
    <h2>${title}</h2>
    <p>${price}</p>
    <button>Купить</button>
  </div>`


const renderPage = list => {
  const productList = list.map(item => renderProduct(item)).join('');
  // массив преобразовывается в строковой тип вместе с запятыми, метод join('') с пустой стройго помогает решить данную проблему. 
  document.querySelector('.products').innerHTML = productList;
}

renderPage(product);