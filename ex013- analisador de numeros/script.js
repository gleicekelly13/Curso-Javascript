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
        valores.push(Number (num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTL += ''
    } else {
        alert('Valor inválido ou já encontrado na lista')           
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
         alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior =  valores [0]
        let menor = valores [0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    }
}

