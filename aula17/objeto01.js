let amigo = {
    nome: 'Gary',
    sexo : 'M',
    peso: 85.4,
    engordar(p=0){
        console.log("engordou")
        this.peso += p
    }}
console.log(`peso atual ${amigo.peso}`)
amigo.engordar(2)
console.log(`Peso depois de 'engordar' ${amigo.peso}`)
console.log(amigo)
