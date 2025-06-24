let nome = document.querySelector('input#nome')
let calcularbtn = document.querySelector('button#cal')
let addlojabtn = document.querySelector('button#addloja')
let divmeses = document.querySelector('div#meses')
campos = divmeses.querySelectorAll('.mes') 
let res = document.querySelector('div#resultado')


function calcular() {
    if (nome.value.length === 0) {
        alert('Insira o nome da loja');
        return; // interrompe a função se o nome estiver vazio
    }

    let totalvalor = 0;

    for (let campo of campos) {
    totalvalor += Number(campo.value) || 0;
    }

    res.innerHTML = `A Loja <strong>${nome.value}</strong> teve um total de manufatura de: <strong>${totalvalor.toFixed(2)}</strong>.`
}


function addloja() {
    nome.value = ""

    // limpa todos os input
    for (let campo of campos) {
        campo.value = "";  
    }
    
    res.innerHTML = ""
}


calcularbtn.addEventListener('click',calcular)
addlojabtn.addEventListener('click',addloja)
