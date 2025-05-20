function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
                window.alert('[ERRO] dados invalidos')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            res.innerHTML = `idade calculada: ${idade}`
        }
}
var button = document.querySelector('input#verificar')
button.addEventListener('click' , verificar)