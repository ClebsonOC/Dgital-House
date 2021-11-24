function PodeSubir(altura,acompanhada){
    if(altura > 1.40 && altura < 2.0){

        console.log('PodeSubir')

    } else if(altura <= 1.40 && altura > 1.20 && acompanhada == 'Sim' ){

        console.log('AcessoPermitido')

    } else if(altura <= 1.20){

        console.log('NaoPodeSubir')

    }else{
    console.log('AcessoNegado')
    }
}
PodeSubir(1.40,'Nao')