function parImpar(numero){
    if(numero % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

let numero = 5
console.log(`O numero digitado é ${parImpar(numero)}`)