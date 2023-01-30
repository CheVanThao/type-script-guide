axios

const element = document.getElementById("123")
const button = document.getElementById("button")

function changeColor() {
    element.style.color = 'red'
}

button.addEventListener('click', changeColor)

console.log(element)

fetch('domain', {
    method: "GET",
}).then()

fetch('domain', {
    method: "POST",
    body: something.JSON
})