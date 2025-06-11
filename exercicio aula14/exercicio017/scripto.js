function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        
        for (let contador = 1; contador <=10 ; contador++) {
             
            let item = document.createElement('option');
            item.text = `${n} x ${contador} = ${n*contador}`;
            item.value = `tab${contador}`; 
            tab.appendChild(item);
        }
    }
}

