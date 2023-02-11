let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((item)=>{
        let search = basket.find((x)=>x.id === item.id) || [];
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
                            <div id=${item.id} class="quantity">${search.item === undefined? 0: search.item}</div>
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
    localStorage.setItem("data",JSON.stringify(basket)); 
}

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((item)=> item.id === selectedItem.id);

    if(search === undefined) return;
    else if(search.item === 0) return;
     else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !==0);
    localStorage.setItem("data",JSON.stringify(basket));
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

calculation();