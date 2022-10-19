let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] 

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {   //verificar se o número está na lista
    if(l.indexOf(Number(n)) != -1) {   // -1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {   //só será adicionado se os dois forem verdade; value == valor; valores == lista
        alert('Tudo ok!')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}
