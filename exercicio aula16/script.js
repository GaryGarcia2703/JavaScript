let valores = []
let valor = document.querySelector('input#numero')
let addbtn = document.querySelector('button#add')
let finbtn = document.querySelector('button#finish')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#lista')

let total = 0
let media = 0
let qtdtotal = 0

function add() {
    if (valor.value.length === 0) {
        window.alert('Insira um número [a caixa está vazia]')
    } else {
        let num = Number(valor.value)

        if (num < 1 || num > 100) {
            window.alert('Insira um valor [entre 1 e 100]')
            valor.value = '' 
            valor.focus() 
        } else {

            if (valores.indexOf(num) != -1) {
                window.alert('Valor já informado lil bro')
                valor.value= ''
                valor.focus()
                return
            }

            valores.push(num)
            window.alert(`Número ${num} adicionado com sucesso!`) 
            console.log(valores)

            let item = document.createElement('option') // crea el elemento
            item.text = `Valor ${num} adicionado`       
            lista.appendChild(item) //muestra el elemento creado

            total += num
            valor.value = '' // limpia el campo para la siguiente entrada
            valor.focus() 
        }
    }
}
addbtn.addEventListener('click', add)

function finalizar() {
    if (valores.length === 0) {
        window.alert('Insira algum valor primeiro antes de finalizar!')
    } else { 
        let maior = valores[0]
        let menor = valores[0]

        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media =  (total/valores.length)
        qtdtotal = valores.length

        res.innerHTML = '' // espaço
        res.innerHTML += `<p>Total de valores inseridos: ${qtdtotal}</p>`
        res.innerHTML += `<p>A soma total dos valores: ${total}</p>`
        res.innerHTML += `<p>A media : ${media}</p>`
        res.innerHTML += `<p>O maior valor informado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado: ${menor}</p>`
    }
}
finbtn.addEventListener('click' , finalizar)