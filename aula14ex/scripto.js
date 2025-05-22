function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement ('img')
    img.setAttribute('id' , 'foto')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
                window.alert('[ERRO] dados invalidos')
                
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''

            if (fsex[0].checked) {
                genero = 'homem'
                if (idade >= 0 && idade < 13) {
                    //criança
                    img.setAttribute('src' , 'img/menino.png')

                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src' , 'img/meninojovem.png')

                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src' , 'img/homen adulto.png')

                } else {
                    //idoso
                    img.setAttribute('src' , 'img/senhor.png')
                }

            } else if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade <10) {
                    //criança
                    img.setAttribute('src' , 'img/menina.png')

                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src' , 'img/moça.png')

                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src' , 'img/mulher.png')

                } else {
                    //idoso
                    img.setAttribute('src' , 'img/senhora.png')
                }
            } 
            res.innerHTML = `detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
}
var button = document.querySelector('input#verificar')
button.addEventListener('click' , verificar)