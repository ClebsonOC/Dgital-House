//<push> adiciona nova array no final

let personagem =['naruto','seiya']
personagem.push('goku')
console.log(personagem)
personagem.push('tanjiro')
console.log(personagem)

//<pop()> remove ultima array e mostra o elemento eliminado

let cores=['azul','verde','laranja']
let ultimaCor = cores.pop()
console.log(cores)
console.log(ultimaCor)

//<shift()> elimina o primeiro elemento de uma array e retorna o elemento eliminado

let primeiraCor = cores.shift()
console.log(primeiraCor)

//<unshift()> adiciona um ou mais elementos ao inicio de uma array

let coresUnshift = ['azul','verde','laranja']
coresUnshift.unshift('rosa')
console.log(coresUnshift)
coresUnshift.unshift('vermelho','violeta')
console.log(coresUnshift)

//<join()> junta os elementos de uma array usando um separador que especificamos, se não o especificar, use vírgulas

let coresJoin = ['azul','verde','rosa'];
let SeparadoPorVirgulas = coresJoin.join('§') // especifiquei a simbologia '+' dessa forma as o array foi separado por +
console.log(SeparadoPorVirgulas)

//<lastIndexOf()> similar ao <.indexOf()>, exceto que ele começa procurando pelo elemento no final do array (de trás para frente)

let coresLastIndexOf = ['Roxo','Rosa','Verde','Violeta'];
coresLastIndexOf.lastIndexOf('Rosa')
// Ele encontrou o que procurava.
// retorna 3, que é o índice do elemento emcontrado.

console.log(coresLastIndexOf.lastIndexOf('Roxo'))

//<includes()> Também similar ao <.indexOf()>, mas retorna um booleano

let coresIncludes = ['Roxo','Rosa','Verde','Violeta'];

console.log(coresIncludes.includes('Roxo')) // Retornou Verdadeiro
console.log(coresIncludes.includes('Laranja')) // Retornou Falso

