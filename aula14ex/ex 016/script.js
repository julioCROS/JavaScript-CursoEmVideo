function funcCont(){
    var init = document.getElementById('init')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var result = document.getElementById('res')


    if(init.value.length == 0
        || end.value.length == 0
        || step.value == 0){
        result.innerHTML = '<strong>[ERRO]</strong> Impossivel contar, revise os dados fornecidos'
    }else{

        result.innerHTML = '<strong>Contando...</strong> '
        let inicio = Number(init.value)
        let fim = Number(end.value)
        let passo = Number(step.value)
        let i = 0

        if(fim > inicio){
            for(i = inicio; i <= fim; i = i + passo){
                result.innerHTML += ` ${i} \u{1F449}`
               }
        } else{
            for(i = inicio; i >= fim; i = i - passo){
                result.innerHTML += ` ${i} \u{1F449}`
               }
        }
       
        result.innerHTML += ' <strong> FIM \u{1F3C1} </strong>'

    }    



}