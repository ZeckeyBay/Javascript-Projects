const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)


const scoreEl = document.getElementById("score");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const resetEl = document.getElementById("reset-btn");
const questionAnswer = document.getElementById("question");
questionAnswer.innerText = `${num1} çarpı ${num2} kaçtır ?`;
const correctAnswer = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
    if(!score){
        score = 0;
    }
scoreEl.innerText = `score: ${score}`

resetEl.addEventListener("click",(event) =>{
    score = 1;
    updateLocalStorage();
})

formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value
    if(userAns === correctAnswer){
        score++;
        updateLocalStorage();
    } else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}