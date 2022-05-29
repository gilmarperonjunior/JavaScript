function carregar(){
    //======MENSAGEM======//
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var hora = new Date()
    var agora = hora.getHours()
    var minutos = new Date()
    var minA = minutos.getMinutes()
    msg.innerHTML = `Atualmente são ${agora} horas e ${minA} minutos.`
    //======MENSAGEM======//

    //======IMAGEM======//
    if(agora > 0 && agora <= 12){
        //BOM DIA
        msg.innerHTML = `Atualmente são ${agora} horas e ${minA} minutos da Manhã.`
        img.src = 'manha.png'
        document.body.style.background = '#eec89a'
    }else if(agora > 12 && agora <= 18){
        //BOA TARDE
        msg.innerHTML = `Atualmente são ${agora} horas e ${minA} minutos da Tarde.`
        img.src = 'tarde.png'
        document.body.style.background = '#bf916f'
    }else{
        //BOA NOITE
        msg.innerHTML = `Atualmente são ${agora} horas e ${minA} minutos da Noite.`
        img.src = 'noite.png'
        document.body.style.background = '#16223f'
    }
    //======IMAGEM======//
}