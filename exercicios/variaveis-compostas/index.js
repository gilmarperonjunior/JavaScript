let num = [5, 2, 9, 4, 7]
num[5] = 6
num.push(7) 

let pos = num.indexOf(7)

console.log(`O primeiro valor é ${num[0]}`)
console.log(`O meu vetor tem ${num.length} elementos`)
if (pos == -1){
    console.log('Valor não escontrado!')
}else{
    console.log(`o valor está na posição ${pos}`)
}


