var agora = new Date()
var diaSem = agora.getDay()
diaSem = 11
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta 
4 = Quinta
5 = Sexta
6 = Sábado
*/ 

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 5: 
        console.log('Hoje é Sábado')
        break
    default:
        console.log('[ERRO] dia de semana invalido lil bro')
        break
}
   