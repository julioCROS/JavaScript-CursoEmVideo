function carregar(){
    var hora = new Date()
    var divBr = document.getElementById('brHours')
    var divKr = document.getElementById('krHours')

    var fotoBr = document.getElementById('fotoBR')
    var fotoKr = document.getElementById('fotoKR')

    var secBr = document.getElementById('brSection')
    var secKr = document.getElementById('krSection')

    var horaBr = hora.getHours()
    var horaKr = hora.getHours() - 12

    if(horaKr < 0){
        horaKr = horaKr * -1
    }

    divBr.innerText = `${horaBr}:${hora.getMinutes()} horas`
    divKr.innerText = `${horaKr}:${hora.getMinutes()} 시`

    if(horaBr >= 0 && horaBr < 12){
        fotoBr.src = 'imagens/manha.jpg'
        secBr.style.backgroundColor = '#86b0ff'
    }else if(horaBr >= 12 && horaBr < 18){
        fotoBr.src = 'imagens/tarde.jpg'
        secBr.style.backgroundColor = 'rgb(255, 207, 50)'
    }else if(horaBr >= 18){
        fotoBr.src = 'imagens/noite.jpeg'
        secBr.style.backgroundColor =' hsl(253, 100%, 20%)'
    }

    if(horaKr >= 0 && horaKr < 12){
        fotoKr.src = 'imagens/manha.jpg'
        secKr.style.backgroundColor = '#86b0ff'
    }else if(horaKr >= 12 && horaKr < 18){
        fotoKr.src = 'imagens/tarde.jpg'
        secr.style.backgroundColor = 'rgb(255, 207, 50)'
    }else if(horaKr >= 18){
        fotoKr.src = 'imagens/noite.jpeg'
        secKr.style.backgroundColor =' hsl(253, 100%, 20%)'
    }

}




