var btn = document.querySelector('button#btn')
let ini = Number(document.querySelector('input#ini'))
let fim = Number(document.querySelector('Input#fom'))
let passo = Number(document.querySelector('input#passo'))

function contar() {
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('tudo ok')
    }


}