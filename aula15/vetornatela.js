var valores = [8, 1, 7, 4, 2, 9]
/*for(pos = 0;pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for( var pos in valores){ //um opção simplificada de representar o array, traduzido seria( PARA(FOR) posição EM(IN) valores)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
