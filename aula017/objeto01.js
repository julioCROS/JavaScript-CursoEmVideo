let amigo = {nome: 'José', 
            sexo: 'M', 
            idade: 21,
            peso: 70,
            engordar(p){
                this.peso += p;
                console.log(`Engordou ${p}Kg`)
            }
}
amigo.engordar(6)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
