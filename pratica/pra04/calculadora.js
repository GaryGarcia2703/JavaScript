let btnmedia = document.querySelector('button#btnmedia');
let btnlimpar = document.querySelector('button#btnlimpar');
let res = document.querySelector('div#res')
let nome = document.querySelector('input#txtnome')
let n1 = document.querySelector('input#txtn1')
let n2 = document.querySelector('input#txtn2')
let n3 = document.querySelector('input#txtn3')

function calcular() {
    
    if (nome.value.length == 0) {
        alert('Insira um nome porfavor')
        return
    }
    if (n1.value.length == 0) {
        alert('Insira a primeira nota porfavor!')
        return  
    }
    if (n2.value.length == 0) {
        alert('Insira a segunda nota porfavor!')
        return
    }
    if (n3.value.length == 0) {
        alert('Insira a terceira nota porfavor!')
        return
    }

    let n1v = Number(txtn1.value)
    let n2v = Number(txtn2.value)
    let n3v = Number(txtn3.value)

    if (n1v < 0 || n1v > 10) {
        alert('Valor de Nota invalida, Inserir nota entre 0 e 10')
        return
    }

    if (n2v < 0 || n2v > 10) {
        alert('Valor de Nota invalida, Inserir nota entre 0 e 10')
        return
    }

    if (n3v < 0 || n3v > 10) {
        alert('Valor de Nota invalida, Inserir nota entre 0 e 10')
        return
    }

    let media = (n1v + n2v + n3v) / 3

    if (media >= 6) {
        situacao = 'Aprovado'
    } else {
        situacao = 'Reprovado'
    }
    res.innerHTML = `O aluno <strong>${nome.value}</strong> com média ${media.toFixed(2)} foi <strong>${situacao}</strong>`
}

function btnhover() {
    btnmedia.style.background = '#0056b3';
    btnmedia.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    btnmedia.style.transform = 'translateY(2px)';
}

function btnout() {
    btnmedia.style.background = ''
    btnmedia.style.boxShadow = ''
    btnmedia.style.transform = ''
}

function limparCampos() {
    nome.value = ''
    n1.value = ''
    n2.value = ''
    n3.value = ''
}

function btnLimparHover() {
    btnlimpar.style.background = '#0056b3';
    btnlimpar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    btnlimpar.style.transform = 'translateY(2px)';
}

function btnLimparOut() {
    btnlimpar.style.background = '';
    btnlimpar.style.boxShadow = '';
    btnlimpar.style.transform = '';
}


btnmedia.addEventListener('click' , calcular)
btnmedia.addEventListener('mouseover' , btnhover)
btnmedia.addEventListener('mouseout', btnout)
btnlimpar.addEventListener('click', limparCampos);
btnlimpar.addEventListener('mouseover', btnLimparHover);
btnlimpar.addEventListener('mouseout', btnLimparOut);