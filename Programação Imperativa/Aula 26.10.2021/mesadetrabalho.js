function teste1(x,y) {
    return y - x
}
const resultado1 = teste1(10, 40)

console.log(resultado1)

function teste2(x,y) {
    return x * 2
    console.log(x)
    return x / 2
}

    const resultado2 = teste2(5)
    console.log(resultado2)


   //Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.


    function polegadaEmCM(x){
        return x * 2.54
    }
    var P = polegadaEmCM(10)
console.log(P)


//Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function ConverterStringEmUrl(string,string2){
let url = 'http://www.'+ string + string2
return url
}

console.log(ConverterStringEmUrl('funcaojs','.net'))

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function exclamação(E){
    return E + "!";
}
console.log(exclamação('minha frase teste'));

//Crie uma função que calcule a idade dos cachorros, considerando que 1 anohumano, equivale a 7 anos para eles.

function idadeDoCachorro(idadeHumano){
   return idadeHumano*7
}

console.log(idadeDoCachorro(10))

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function ValorHoraDeTrabalho(SalarioMensal){
    return 120 / SalarioMensal
}
console.log(ValorHoraDeTrabalho(2.000))

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura emcentímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores

function IMC(altura,peso){
    return peso/altura //A ordem do return é a forma com a qual sera feita o calculo
}
const resultado3 = IMC(1.80**2,80)
console.log(resultado3)

//
let text = msaçdjjasdjlasdlsjdlçjsaçldj

let upper = text.toup
