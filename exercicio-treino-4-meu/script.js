function gerar(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número')
    }else{
        var nval = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${nval} x ${c} = ${nval*c}`
            tab.appendChild(item)
        }
    }
}