//exercise 1 : random arrow functions
let summ = (a,b) => a + b

let isPositive = number => number >= 0

let randomNumber = () => Math.random

document.addEventListener("click", () => console.log("click"))

//exercise 2 : event listener ex

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    console.log("Grandparent 1 ")
})

parent.addEventListener("click", e => {
    console.log("Parent 1 ")
})

document.addEventListener("click", e => {
    console.log("Document 1 ")
})

setTimeout(() => {
    parent.removeEventListener("click", () => {
        console.log("hi")
    })
}, 2000)

child.addEventListener("click", e=> {
    console.log("Child Bubble")
})

//exercise 3 : query create 
const divs = document.querySelectorAll("div")

addGlobalEventListener("click","div",e => {
    console.log("hi")
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e=>{
        if (e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor= "purple"
document.body.append(newDiv)
 