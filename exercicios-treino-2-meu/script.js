function verificar(){
    var anoatual = new Date()
    var anoAt = anoatual.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > anoAt){
        alert('[ERROR] Verifique os dados e tente novamnete [ERROR]')
    }else{
        var fsexo = document.getElementsByName('sexo')
        var genero = ''
        var idade = anoAt - Number(fano.value)
        var img = document.getElementById('img')
        if(fsexo[0].checked){
            genero = 'Homem'
            document.body.style.background = 'rgb(84, 84, 246)'
            if(idade >=0 && idade <= 10){
                //Criança
                img.src = 'img/foto-bebe-m.png'
            }else if (idade >10 || idade <= 18){
                //Jovem
                img.src = 'img/foto-jovem-m.png'
            }else if (idade >18 || idade <= 50){
                //Adulto
                img.src = 'img/foto-adulto-m.png'
            }else if(idade >50 || idade <= 100){
                //Idoso
                img.src = 'img/foto-idoso-m.png'
            }
        }else if(fsexo[1].checked){
            genero = 'Mulher'
            document.body.style.background = 'Pink'
            if(idade >=0 && idade <= 10){
                //Criança
                img.src = 'img/foto-bebe-f.png'
            }else if (idade >10 || idade <= 18){
                //Jovem
                img.src = 'img/foto-jovem-f.png'
            }else if (idade >18 || idade <= 50){
                //Adulto
                img.src = 'img/foto-adulto-f.png'
            }else if(idade >50 || idade <= 100){
                //Idoso
                img.src = 'img/foto-idoso-f.png'
            }
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
    }
}