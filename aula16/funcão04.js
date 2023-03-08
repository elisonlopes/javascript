function fatorial(n){
    var fat = 1
    for(var contador = n; contador > 1; contador--){
        fat*= contador
    }
    return fat
}
console.log(fatorial(6))