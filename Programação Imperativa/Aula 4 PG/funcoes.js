function darOi(){
    console.log('Olá tudo bem?');
}

darOi();
darOi();
darOi()

//função expressa

let somar = function(){
    console.log( 44 + 5);
};

somar();


let somar = function(numA, numB){
    return numA + numB
    //console.log(numA * numB);
};

somar(40,22);

let resultado = somar(5,2);
console.log(resultado);

//escopo
function dividir(numA, numB){
    let resultado = numA / numB
        console.log(resultado)
}

