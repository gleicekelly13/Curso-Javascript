var agora = new Date()
var diaSem = agora.getDay()
 
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

 //console.log(diaSem)

switch(diaSem) {        // switch só funciona com números inteiros e strings
    case 0:
        console.log('Domingo')
        break     // Break é obrigatório(ele testa a expressão)
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('[ERRO] Dia Inválido')
        break
}
