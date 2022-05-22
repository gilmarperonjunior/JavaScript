var agora = new Date()
var hora = agora.getHours()
console.log(`Olá, agora são exatamente ${hora} horas.`)
if (hora <= 5){
    console.log('Boa Madrugada!, hora de dormir')
}else if (hora <= 12){
    console.log('Bom Dia!, hora de acordar')
}else if (hora <= 18){
    console.log('Boa Tarde!, hora de trabalhar')
}else{
    console.log('Boa Noite!, hora de dormir')
}