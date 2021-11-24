/*let pipoca = 10
let macarrao = 8;
let carne = 15;
let feijao = 12
let brigadeiro = 8*/

let opcoes = ['pipoca','macarrao','carne','feijao','brigadeiro'];
let TempoPadrao = 0

function microondas(prato,tempo){
    prato=='pipoca'?TempoPadrao = 10:0;
    prato=='macarrao'?TempoPadrao = 8:0;
    prato=='carne'?TempoPadrao = 15:0;
    prato=='feijao'?TempoPadrao = 12:0;
    prato=='brigadeiro'?TempoPadrao = 8:0;

    if(tempo >= TempoPadrao && tempo<TempoPadrao * 2){
        console.log('prato pronto, bom apetite!!!')

    }   else if(tempo>TempoPadrao){
        console.log('Tempo insuficiente')

    }   else if(tempo> TempoPadrao*2 && tempo<=TempoPadrao*3){
        console.log('A comida queimou')

    }   else if(tempo> TempoPadrao*3){
        console.log('kabummm!!!!')

    } 
    
    
}
