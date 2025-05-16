//medri media e o nome do aluno
function media() {
    var nome = document.querySelector('input#nome').value
    var n1 = Number(document.querySelector('input#n1').value)
    var n2 = Number(document.querySelector('input#n2').value)
    var n3 = Number(document.querySelector('input#n3').value)
    var media = (n1 + n2 + n3) / 3
    var resultado = document.querySelector('div#resultado')
    var img = document.querySelector('div#img')

        if (media >= 6) {
            resultado.innerHTML = `o aluno(a) ${nome} foi APROVADO com a média ${media}`
            img.src = 'aprovado.png'

        } else {
            resultado.innerHTML = `o aluno(a) ${nome} foi REPROVADO com a média ${media}`
            img.src = 'reprovado.png'
        }
}
var button = document.querySelector('button#button')
button.addEventListener('click', media)