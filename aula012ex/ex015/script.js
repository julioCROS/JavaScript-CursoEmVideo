function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtAno')
    var resultado = document.getElementById('res')
    var resultadoImg = document.getElementById('resImg')

    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert("[ERRO] Ano de nascimento INVALIDO!")
    } else{
        var idade = ano - formAno.value
        var formSex = document.getElementsByName('radSex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSex[0].checked){
            var gender = 'Homem'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/baby_male.jpg')
            }else if(idade <= 21){
                //Adolescente
                img.setAttribute('src', 'img/young_male.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adult_male.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/old_male.jpeg')
            }

        } else {
            var gender = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'img/baby_female.png')
            }else if(idade <= 21){
                //Adolescente
                img.setAttribute('src', 'img/young_female.jpg')
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'img/adult_female.PNG')
            }else{
                //Idosa
                img.setAttribute('src', 'img/old_female.jpg')
                
            }
        }

        resultado.innerHTML = `Detectamos <strong>${gender}</strong> com <strong>${idade}</strong> anos. <br>`
        resultadoImg.appendChild(img)
  

    }
}