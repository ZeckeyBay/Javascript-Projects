let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((y)=>{
        let search = basket.find((x)=>x.id === y.id) || [];
        return `
        <div id=product-id-${y.id} class="item">
                <img width="220" height="220" src="${y.img}">
                <div class="details">
                    <h3>${y.name}</h3>
                    <p>${y.desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${y.price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${y.id})" class="bi bi-dash"></i>
                            <div id=${y.id} class="quantity">${search.item === undefined? 0: search.item}</div>
                            <i onclick="increment(${y.id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
        </div>`
    }).join(""));
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

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
    let search = basket.find((x)=> x.id === selectedItem.id);

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
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x+y,0)
}

calculation();