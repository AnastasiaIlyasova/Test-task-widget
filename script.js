var products = [
    {productId:1, productName: 'Товар 1', categoryId:1},
    {productId:2, productName: 'Товар 2', categoryId:2},
    {productId:3, productName: 'Товар 3', categoryId:3},
    {productId:4, productName: 'Товар 4', categoryId:4},
    {productId:5, productName: 'Товар 5', categoryId:5},
    {productId:6, productName: 'Товар 6', categoryId:1},
    {productId:7, productName: 'Товар 7', categoryId:2},
    {productId:8, productName: 'Товар 8', categoryId:3},
    {productId:9, productName: 'Товар 9', categoryId:4},
    {productId:10, productName: 'Товар 10', categoryId:5},
    {productId:11, productName: 'Товар 11', categoryId:1},
    {productId:12, productName: 'Товар 12', categoryId:2},
    {productId:13, productName: 'Товар 13', categoryId:3},
    {productId:14, productName: 'Товар 14', categoryId:4},
    {productId:15, productName: 'Товар 15', categoryId:5},
    {productId:16, productName: 'Товар 16', categoryId:1},
    {productId:17, productName: 'Товар 17', categoryId:2},
    {productId:18, productName: 'Товар 18', categoryId:3},
    {productId:19, productName: 'Товар 19', categoryId:4},
    {productId:20, productName: 'Товар 20', categoryId:5},
    {productId:21, productName: 'Товар 21', categoryId:1},
    {productId:22, productName: 'Товар 22', categoryId:2},
    {productId:23, productName: 'Товар 23', categoryId:3},
    {productId:24, productName: 'Товар 24', categoryId:4},
    {productId:25, productName: 'Товар 25', categoryId:5}
];

var categories = [
    {categoryId:1, categoryName: 'Футболки'},
    {categoryId:2, categoryName: 'Майки'},
    {categoryId:3, categoryName: 'Носки'},
    {categoryId:4, categoryName: 'Джинсы'},
    {categoryId:5, categoryName: 'Брюки'},
];

//Add tabs
let content = document.querySelector('.content')
let tabsItems = document.createElement('nav')
tabsItems.classList.add('tabs__items')
content.prepend(tabsItems)

for (let i=0;i<categories.length;i++) {
    let tabsItem = document.createElement('a')
    tabsItem.classList.add('tabs__item')
    tabsItems.appendChild(tabsItem)
}

//Set tabs attributes
let tabsItemAll = document.querySelectorAll('.tabs__item')
 for (let j=0;j<tabsItemAll.length;j++) {
     tabsItemAll[j].setAttribute('id',`tab${j+1}`)
     if (j<=9) {
         tabsItemAll[j].setAttribute('href',`#tab_0${j+1}`)
     } else {
         tabsItemAll[j].setAttribute('href',`#tab_${j+1}`)
     }
 }

//Add tabs-body container
let tabsBodyContainer = document.createElement('div')
tabsBodyContainer.classList.add('tabs__body-container')
content.append(tabsBodyContainer)

//Add tabs-body in tabs-body container
for (let i=0; i<categories.length; i++) {
    let tabsBody = document.createElement('div')
    tabsBody.classList.add('tabs__body')
    tabsBodyContainer.appendChild(tabsBody)
}

//Add tabs block
let tabsBodyAll = document.querySelectorAll('.tabs__body')
for (let i=0;i<categories.length;i++) {
    let tabsBlock = document.createElement('div')
    tabsBlock.classList.add('tabs__block')
    tabsBodyAll[i].appendChild(tabsBlock)
}

//Set tabs block attributes
let tabsBlockAll = document.querySelectorAll('.tabs__block')
for(let j=0; j<tabsBlockAll.length; j++) {
    tabsBlockAll[j].setAttribute('id',`tab_0${j+1}`)
}

//Add category name
let tabsItem = document.querySelectorAll('.tabs__item')
let tabsBlock = document.querySelectorAll('.tabs__block')

for (let i = 0; i<categories.length; i++) {
    tabsItem[i].innerHTML = categories[i].categoryName
}

//Add product name and image
const blockSize = 5;

products.sort((a, b) => a.categoryId - b.categoryId);

tabsItem.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        const tabsBlock = document.getElementById(`tab_0${index + 1}`);
        tabsBlock.innerHTML = '';
        for (let i = index * blockSize; i < (index + 1) * blockSize; i++) {
            if (i < products.length) {
                const product = products[i];
                const blockDiv = document.createElement('div');
                blockDiv.className = 'product-group';
                blockDiv.innerHTML = `<img src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt=""/>${product.productName}`;
                tabsBlock.appendChild(blockDiv);
            }
        }
    });
});

//Change background color on active tab
tabsItem.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabsItem.forEach((tab)=>{tab.classList.remove('active')})
        tab.classList.add('active')
    })
})