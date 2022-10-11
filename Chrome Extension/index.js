
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("el-el");

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
})