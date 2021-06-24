function calcular(){
    var numTab = document.getElementById('num')
    var tabela = document.getElementById('selTab')
    tabela.innerHTML = ''

    if(numTab.value.length == 0){
        alert('[ERRO] Digite um numero')
    } else{
        let numero = Number(numTab.value)
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            let result = numero * i
            item.text = `${numero} x ${i} = ${result}`
            item.value = `tab${i}`
            tabela.appendChild(item)
        }
    }
}                                   
