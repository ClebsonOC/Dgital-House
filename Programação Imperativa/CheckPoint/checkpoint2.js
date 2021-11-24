function microondas(comida,tempo){
    if(comida == 1){
        if(tempo>=(2*10) && (tempo<(3*10))){
             return('A comida queimou!')
        }
    else if (tempo>=(3*10)){
        return('kabummm!')
    }
    else if (tempo<(10)){
        return('tempo insuficiente')
    }
    else{
       return ('Comida Pronta, Bom Apetite!!!')
    }

    }
    else if(comida==2){
        if(tempo>=(2*8) && (tempo<=(3*8))){
            return('A comida queimou!')
        }
        else if(tempo>=(3*8)){
            return('Kabummm!!!')
            
        }

        else if(tempo<8){
            return("tempo insuficiente")
        }
        else{
            return('Comida Pronta, Bom Apetite')
        }
        
    }
    else if(comida==3){
        if(tempo>=(2*15) && (tempo<=(3*15))){
            return('Comida queimou')
        }
        else if(tempo>=(3*15)){
            return('Kabummm!!!')
        }
        else if(tempo<(15)){
            return('tempo insuficiente')
        }
        else{
            return('Comida Pronta, Bom Apetite!!!')
        }
        
    }
    else if(comida==4){
        if(tempo>=(2*12) && (tempo<(3*12))){
                return('A comida queimou!')
            }
        else if (tempo>=(3*12)){
            return('kabummm!!!')
        }
        else if(tempo<(12)){
            return('Tempo Insuficiente')
        }
        else{
            return('Comida Pronta, Bom Apetite!!!')
        }
      }
      else if(comida==5){
          if(tempo>=(2*12) && (tempo<=(3*12))){
              return('Comida queimou!')
          }
           else if(tempo>=(3*12)){
                return('Kabummm!!!')
          }
          else if(tempo<(12)){
              return('Tempo Insuficiente')
          }
          else{
              return('Comida Pronta, Bom Apetite!!!')
          }
      }
      else if(comida==6){
          if(tempo>(2*8) && (tempo>(3*8))){
              return('Comida queimou!')
          }
          else if(tempo>(3*8)){
              return('Kabummm!!!')
          }
          else if(tempo<(8)){
              return('Tempo insuficiente')
          }
          else{
              return('Comida Pronta, Bom Apetite!!!')
          }
      }
      else{
          console.log('Dados Invalidos')
          console.log('Por favor, selecione alguma das opções da lista abaixo:')
          console.log('selecione 1 - Pipoca + tempo')
          console.log('selecione 2 - Macarrão + tempo')
          console.log('selecione 3 - Carne + tempo')
          console.log('selecione 4 - Feijão + tempo')
          console.log('selecione 5 - Brigadeiro + tempo')
      }     
}
console.log(microondas(9,31))
