let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []    // esse vetor será usado para analisar os dados

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
        valores.push(Number (num.value))  //*
        let item = document.createElement('option')  //para adicionar no select
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)  //para adicionar na lista 
        res.innerHTL = ''    //para zerar o valor (limpar o resultado)
    } else {
        alert('Valor inválido ou já encontrado na lista')           
    }
    num.value = ''   //para apagar o número que foi digitado
    num.focus()      //para clicar no espaço de digitar, e já deixa o cursor no lugar
}

function finalizar() {            //analisa os fatos e mostra as funcionalidades
    if(valores.length == 0) {    //se o vetor está vazio
         alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length     // total de elementos 
        let maior =  valores [0]     // 1° valor
        let menor = valores [0]     //  1° valor
        let soma = 0
        let media = 0
        for(let pos in valores) {    //verifica um por um, e analisa maior e menor número
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot     //se sabe a soma e o total de elementos, consegue calcular a média
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

//* valores.push: adicionar um elemento no vetor(ou seja, adicionar o number que está dentro de num.value)
// valores:está no índice
