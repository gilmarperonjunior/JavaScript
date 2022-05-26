let num = [5 , 8 , 2 , 9 , 3]
/*
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[3])
*/
let pos = num.indexOf(4)
console.log(`O valor 8 está no índice ${pos}`)
if (pos == -1){
    console.log('Valor Não encontrado!')
}else{
    console.log(`O valor 4 está no índice ${pos}`)
}


