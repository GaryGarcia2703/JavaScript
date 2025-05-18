function carregar () {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22  // para teste

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#44A1F2'

    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde_sonicp.png'
        document.body.style.background = '#b42e10d8'

    } else {
        //boa noite
        img.src = 'imagens/noite1.jpg'
        document.body.style.background = '#0F5FA6'
    }
}
