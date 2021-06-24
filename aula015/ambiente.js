let num = [2,3,5]
num[3] = 32
num.push(21)

let tam = num.length
console.log(`Nosso vetor é ${num} de tamanho ${tam}. O 1o elemento é = ${num[0]}`)
console.log('O vetor é:')
for(let pos = 0; pos < tam; pos++){
    console.log(num[pos])
}

console.log('\n')

//Usando for-in
for(pos in num){
    console.log(num[pos])
}

console.log('\n')


//Procurar o indice do valor '3'
let pos3 = num.indexOf(3)
console.log(pos3)