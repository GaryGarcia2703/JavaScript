let valores = []
let valor = document.querySelector('input#numero')
let addbtn = document.querySelector('button#add')
let finbtn = document.querys
let res = document.querySelector('div#res')
let lista = document.querySelector('select#lista')

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
            valor.value= '';
            valor.focus()
            return
        }
            valores.push(num)
            window.alert(`Número ${num} adicionado com sucesso!`) 
            console.log(valores)

            let item = document.createElement('option') // crea el elemento
            item.text = `Valor ${num} adicionado`       
            lista.appendChild(item) //muestra el elemento creado
            valor.value = '' 
            valor.focus() 
        }

   
    }
}
addbtn.addEventListener('click', add)