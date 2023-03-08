//RECURSIVIDADE
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! = 5x4x3x2x1 - fatorial de um número( ex:5)
5! = 5 x 4! ou seja o fatorial de um número é ele vezes o fatorial do número seguinte

nesse caso a fórumla seria: n! = n x (n-1)! onde n é o número vezes o fatrial dele menos 1.




*/