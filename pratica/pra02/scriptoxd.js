//medri media e o nome do aluno
function media () {
    var nome = document.querySelector('input#nome').value
    var n1 = Number(document.querySelector('input#n1').value)
    var n2 = Number(document.querySelector('input#n2').value)
    var n3 = Number(document.querySelector('input#n3').value)
    var media = (n1 + n2 + n3) / 3

    var resultado = document.querySelector('div#resultado')
    var img = document.querySelector('img#imagem')
    var res2 = document.querySelector('div#res2')

        if (media >= 6) {
            resultado.innerHTML = `o aluno(a) ${nome} foi <strong>APROVADO</strong> com a média ${media}`

            img.src = 'aprovadop.png'
            res2.innerHTML = 'CONTINUE ASSIM LIL BRO'


        } else {
            resultado.innerHTML = `o aluno(a) ${nome} foi <strong>REPROVADO</strong> com a média ${media}`
            img.src = 'reprovado_cat.jpg'
            res2.innerHTML = 'VOCÊ AINDA CONSEGUE PASSAR É SO SE ESFORÇAR'
        }
}
var button = document.querySelector('button#button')
button.addEventListener('click', media)

/*
recordar que tengo que anotar esto:
    
    para poder mostrar una imagen en estructura condicional
    primero declaro la var img, con el query selector usado en la tag <img id='ej'>
    luego usar el comando nombre_var.src = 'nombre_archivo.png'
*/