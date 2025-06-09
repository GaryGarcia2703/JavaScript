function contar() {

    let iniInput = document.querySelector('input#ini');
    let fimInput = document.querySelector('input#fim');
    let passoInput = document.querySelector('input#passo');
    let res = document.querySelector('div#res')

    if (iniInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {

        window.alert('[ERRO] Dados não informados');

    } else {
        let ini = Number(iniInput.value);
        let fim = Number(fimInput.value);
        let passo = Number(passoInput.value);

        for (let c = ini; c <= fim; c += 1 passo) {
            res.innerHTML += `${c}`
        } 
    }

}
    
var btn = document.querySelector('button#btn');
btn.addEventListener('click' , contar)
