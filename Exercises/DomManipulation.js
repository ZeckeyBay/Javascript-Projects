const body = document.body
body.append("Hello", "Bye")

const div = document.createElement("div")
div.innerText = "Hello"
div.textContent = "Hello"
body.append(div)

const div = document.querySelector("div")
console.log(div.textContent)
console.log(div.innerText)

div.dataset.newName = "hi"

div.classList.add("new class")
div.classList.remove("new class")
div.classList.toggle("new class2" , false)

