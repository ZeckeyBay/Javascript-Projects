
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads();
})


function renderLeads(){
let listItems = ""
    for (let i=0; i<myLeads.length;i++){
    listItems = document.createElement("li")
    listItems.textContent = myLeads[i]
    
}
ulEl.append(listItems)
}

