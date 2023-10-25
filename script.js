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

let tabsItem = document.querySelectorAll('.tabs__item')
let tabsBlock = document.querySelectorAll('.tabs__block')

for (let i = 0; i<categories.length; i++){
        tabsItem[i].innerHTML = categories[i].categoryName
}

let newTab = []
for(let i = 0; i<tabsBlock.length; i++) {
    for (let j = 0; j < products.length; j++) {
        if (categories[i].categoryId === products[j].categoryId) {
            newTab.push(`<img src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt=""/>`)
            newTab.push(products[j].productName)
        }
    }
}
function change(block,num1,num2,num3,num4,num5,num6){
    tabsBlock[block].innerHTML = `<div class="product-group">${newTab.slice(num1,num2).join('')}</div>
    <div class="product-group">${newTab.slice(num2,num3).join('')}</div>
    <div class="product-group">${newTab.slice(num3,num4).join('')}</div>
    <div class="product-group">${newTab.slice(num4,num5).join('')}</div>
    <div class="product-group">${newTab.slice(num5,num6).join('')}</div>`
}
change(0,0,2,4,6,8,10)
change(1,10,12,14,16,18,20)
change(2,20,22,24,26,28,30)
change(3,30,32,34,36,38,40)
change(4,40,42,44,46,48,50)

tabsItem.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabsItem.forEach((tab)=>{tab.classList.remove('active')})
        tab.classList.add('active')
    })
})