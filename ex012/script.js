function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)       // Essa variável será o número que foi digitado
        let c = 1
        tab.innerHTML = ''             //Antes de começar a mostrar a próxima tabuada, limpa a área
        while (c <= 10) {             //Enquanto o contador for menor/igual a 10
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}

