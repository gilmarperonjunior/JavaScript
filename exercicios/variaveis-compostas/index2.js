let valores = [8, 1, 7, 9, 0, 2]
valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos}, tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){ // primeiro vem o índice (nome da variável com indice), depois do in o nome da variável composta
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //Só funciona para arrays e objetos 
}
