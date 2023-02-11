
let shop = document.getElementById('shop');

let shopItemsData = [{
    id : "aaaa",
    name : "Shirt",
    price : "150",
    desc : "random",
    img : "images/img-1.jpg"
},
{
    id : "bbbb",
    name : "T-Shirt",
    price : "100",
    desc : "random",
    img : "images/img-2.jpg"
},
{
    id : "cccc",
    name : "Suit",
    price : "500",
    desc : "random",
    img : "images/img-3.jpg"
},
{
    id : "dddd",
    name : "Trousers",
    price : "200",
    desc : "random",
    img : "images/img-4.jpg"
}]

let basket = [];

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((item)=>{
        return `
        <div id=product-id-${item.id} class="item">
                <img width="220" height="220" src="${item.img}">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${item.price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${item.id})" class="bi bi-dash"></i>
                            <div id=${item.id} class="quantity">0</div>
                            <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
        </div>`
    }).join(""));
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((item)=> item.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id : selectedItem.id,
            item : 1,
        });
    } else {
        search.item += 1;
    }  
    update(selectedItem.id);
}

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((item)=> item.id === selectedItem.id);

    if(search.item === 0) return;
     else {
        search.item -= 1;
    }
    localStorage.setItem("data");
    update(selectedItem.id);
}

let update = (id)=>{
    let search = basket.find((item)=> item.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x+y,0)
}