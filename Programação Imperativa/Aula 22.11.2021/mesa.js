alice = [ 23, 82, 46 ]
bob = [ 45, 8, 32]

function encontrargranhador(notaparticipante){
    let maior = notaparticipante[0];
    for(let i = 0; i<notaparticipante.length; i++){
        if(maior < notaparticipante[i]){
            maior = notaparticipante[i];
        }
    } return maior
}

console.log(encontrargranhador(alice))