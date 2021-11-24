//https://docs.google.com/document/d/1XWyVyXTvdeXlwH-wuN6H0UqQ7TlE8e5z/edit
const ParticipanteA = [5, 8, 4, 9, 5];
const ParticipanteB = [8, 7, 8, 6, 8];
const ParticipanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(notasParticipantes){
    for(let i = 0; i<notasParticipantes.lenght;i++){
        soma += notasParticipantes[i];
    }
  //1 - soma = 0 ; notasParcipante[i] = 5 -> soma = 5;
  //2 - soma = 5 ; notasParcipante[i] = 8 -> soma = 13;
  //3 - soma = 13 ; notasParcipante[i] = 4 -> soma = 17;
  //4 - soma = 17 ; notasParcipante[i] = 9 -> soma = 26;
  //5 - soma = 26 ; notasParcipante[i] = 5 -> soma = 31;
    return  soma/notasParticipantes.lenght;
}

pontuacaoMedia(ParticipanteA)
pontuacaoMedia(ParticipanteB)
pontuacaoMedia(ParticipanteC)

//Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.


function pontuacaoMaior(notasParcipante){
    let maior = notasParcipante[0];
    for(let i = 1; i<notaparticipante.length; i++);{
        if(maior < notaparticipante[i]){
            maior = notaparticipante[i];
        }
    }
        //[5,8,4,9,5];
        return maior 
}




