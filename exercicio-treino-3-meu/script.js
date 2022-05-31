function contar(){
    //VAR//
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pul = document.getElementById('pular')
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pul.value)
    var res = document.getElementById('res')
    //IF
    if(ini.value.length == 0 || Number(fim.value) < Number(ini.value) || Number(ini.value) < 0){
        alert('[ERROR] INICIO inválido')
    }else if(fim.value.length == 0 || Number(fim.value) < 0){
        alert('[ERROR] FIM inválido')
    }else if(pul.value.length == 0 || Number(pul.value) < 0){
        alert('[ERROR] PULAR inválido')
    }else {
        for(var n1; n1 <= n2; n1 += n3){
            res.innerHTML += `${n1},`
        }
    }
}