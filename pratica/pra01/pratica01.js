function calcular() {
    var n1 = Number(document.querySelector('input#n1').value)
    var n2 = Number(document.querySelector('input#n2').value)
    var media = (n1 + n2) / 2
    var resultado = document.querySelector('div#area')

        if (media >= 6) {
            resultado.innerHTML = `O aluno com media ${media} FOI APROVADO`
        } else {
            resultado.innerHTML = `O aluno com media ${media} FOI REPROVADO`
        }
}
var button = document.querySelector('button#button')
button.addEventListener('click', calcular)