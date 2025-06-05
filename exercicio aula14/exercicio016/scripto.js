function contar() {
    var btn = document.querySelector('button#btn');
    let iniInput = document.querySelector('input#ini');
    let fimInput = document.querySelector('input#fim');
    let passoInput = document.querySelector('input#passo');

    if (iniInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {
        window.alert('[ERRO] Dados não informados');
    } else {
        let ini = Number(iniInput.value);
        let fim = Number(fimInput.value);
        let passo = Number(passoInput.value);
        alert('Tudo ok');
        // Aqui você pode colocar o código para fazer a contagem
    }

}
btn.addEventListener('click' , contar)
