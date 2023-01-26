const textareaEl = document.getElementById("text-area")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup",(e)=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}