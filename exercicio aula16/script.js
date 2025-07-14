let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if ((Number(n)) >= 1 && (Number(n)) <= 100) {
       return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if (lista.indexOf(Number(n)) != -1) {
       return true
    } else {
        return false
    }
}

function adicionar() {
    // Verifica se é um número válido E se NÃO está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // 1. Adiciona o número ao array 'valores'
        valores.push(Number(num.value));

        // 2. Cria um novo item (option) para o <select>
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item); // Adiciona o item à lista (select)

        // 3. Limpa a área de resultado (se houver alguma mensagem anterior)
        res.innerHTML = ''; 

    } else {
        // Se o valor for inválido ou já estiver na lista
        window.alert('Valor inválido ou já encontrado na lista!');
    }

    // Limpa o campo de entrada e foca nele para nova entrada
    num.value = '';
    num.focus();
}