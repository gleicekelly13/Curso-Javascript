let botao = document.querySelector("#botao"); //Seleciona o botao
botao.style.background = "blue"; //acessou o estilo dele e trocou o valor do background
let estaQuebrado = false;

botao.addEventListener("mouseover", e => {
    if(!estaQuebrado) {  //Se não estiver quebrado, muda de cor
        botao.style.background = "green";
        botao.style.color = "#FFF";
    };
});

botao.addEventListener("mouseout", e => { //o "e" é como um parâmtero de entrada que pega dados do evento
    if(!estaQuebrado) { //Se não estiver quebrado, muda de cor
        botao.style.background = "blue";
        botao.style.color = "darkblue"
    }
});

botao.addEventListener("click", e => {
    botao.style.background = "red";
    botao.innerHTML = "Quebrei"; //Altera o html, neste caso, o texto dentro do botao
    estaQuebrado = true;
})
