let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let addbtn = document.querySelector('button#add')
let valores = []

function adicionar() {
    if (num.ariaValueMax.length === 0) {
        alert('Informe um valor para ser inderido porfavor')

    } else {
        let num = Number(num.value)
        valores.push(num)

        num.value = '';

    }
}
addbtn.addEventListener('click' , adicionar)