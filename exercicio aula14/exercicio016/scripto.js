function contar() {
    let iniInput = document.querySelector('input#ini');
    let fimInput = document.querySelector('input#fim');
    let passoInput = document.querySelector('input#passo');
    let res = document.querySelector('div#res');

    if (iniInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {
        
        window.alert('[ERRO] Dados não informados');

    } else {
        res.innerHTML = ''; 

        let ini = Number(iniInput.value);
        let fim = Number(fimInput.value);
        let passo = Number(passoInput.value);

        if (passo <= 0) {
            window.alert('[ERRO] Passo inválido! Considerando PASSO 1');
            passo = 1;
        }

        if (ini < fim) {
            // Contagem crescente
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} 👉 `;
            }
        } else {
            // Contagem decrescente
            for (let c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} 👉 `;
            }
        }

        res.innerHTML += `🏁`;
    }
}

let btn = document.querySelector('button#btn');
btn.addEventListener('click', contar);
