var num = [5,8,2,9,3]
num.push(1) // acrescenta o número(14) no vetor
num.sort()// ordena os numeros do vetor em ordem crescente
console.log(`O vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`) // num.length mede a quntidade de elementos dentro do array. 
console.log(`o primeiro valor do vetor é ${num [0]}`)
var pos = num.indexOf(5) // Porucra no vetor a posição onde está o número entre parênteses
if( pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O número 5 está na posição ${pos}`)
}
