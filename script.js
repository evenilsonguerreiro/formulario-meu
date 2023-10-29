const inputNome = document.querySelector('#input-nome')
const inputEmail = document.querySelector('#input-email')
const inputTel = document.querySelector('#input-telefone')
const form = document.querySelector('#form')

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()



    linha = `<tr>`
    linha += `<td> ${inputNome.value} </td>`
    linha += `<td> ${inputEmail.value} </td>`
    linha += `<td> ${inputTel.value} </td>`
    linha += `</tr>`
    linhas += linha

    const tbody = document.querySelector('#tbody')

    tbody.innerHTML = linhas

    inputNome.value = ''
    inputEmail.value = ''
    inputTel.value = ''
})
