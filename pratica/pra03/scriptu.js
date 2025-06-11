let res = document.querySelector('div#res')

function celtofah() {
    let tempInput = document.querySelector('input#txtn')

    if (tempInput.value.length == 0) {
        window.alert('informe um valor porfavor!')

    } else {
        let temp = Number(tempInput.value);
        let fah = (temp * 9/5) + 32;
        res.innerHTML = `o valor de celcius para farenheit é ${fah}`
    }
}

function fahtocel() {
   let tempInput= document.querySelector('input#txtn')

    if (tempInput.value.length == 0) {
        window.alert('informe um valor porfavor!')

    } else {
        let temp = Number(tempInput.value);
        let cel = (temp - 32) * 5/9;
        res.innerHTML = `o valor de fahrenheit para celcius é ${cel}`
    }
}
let botaoCtoF = document.querySelector('button#celtofah');
let botaoFtoC = document.querySelector('button#fahtocel');

botaoCtoF.addEventListener('click', celtofah);
botaoFtoC.addEventListener('click', fahtocel);
