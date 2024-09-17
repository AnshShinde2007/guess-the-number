const result = document.getElementById('result')
const submit = document.getElementById('submit')
submit.addEventListener("click", (e) => {
    e.preventDefault()
    const max = 10
    let number = Math.floor(Math.random() * max)
    let numberus = parseInt(document.getElementById("numberuser").value)
    if (numberus == number) {
        result.innerHTML = `
    <h1>You were correct it was ${number}</h1>`
    } else {
        result.innerHTML = `
    <h1>You were incorrect it was ${number}</h1>`
    }
})