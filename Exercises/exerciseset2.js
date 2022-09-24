//exercise 1 : 
let summ = (a,b) => a + b

let isPositive = number => number >= 0

let randomNumber = () => Math.random

document.addEventListener("click", () => console.log("click"))

//exercise 2 :

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
 