function contar() {
    let ini = document.getElementById('txti') //Pega o elemento que digito no espaço 'inicio'
    let fim = document.getElementById('txtf') //Pega o elemento que foi digitado no espaço 'fim'
    let passo = document.getElementById('txtp') //Pega o elemento que foi digitado no espaço 'passo'
    let res = document.getElementById('res') // essa variável tem relação com a <div id="res">

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // o sinal (== 0) significa 'testar vazio
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: ' //vai aparecer 'Contando' qdo digitar os para contar e se estiver tudo ok.
        let i = Number(ini.value) //Pega o valor que está dentro de 'ini' e converte para Número
        let f = Number(fim.value) //Pega o valor que está dentro de 'fim' e converte para Número
        let p = Number(passo.value) //Pega o valor que está dentro de passo e converte para Número
        if(p <= 0){
            alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if(i < f) { //se o valor do inicio for maior q o valor do final...
            //Contagem crescente
            for(let c = i; c <= f; c += p) { //...é esse código que vai ser rodado
                res.innerHTML += `${c}  \u{1F449}`  
            }    
        }else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}

