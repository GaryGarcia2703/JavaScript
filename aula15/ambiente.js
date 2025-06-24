let num = [1,8,2,4,6]
num.push(20)
num.sort((a, b) => a - b);
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(30)
console.log(`o valor 8 esta na posição ${pos}`)
 if (pos == -1) {
    console.log('o valor não foi encontrado')
 }
