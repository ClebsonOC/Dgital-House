//lenght
console.log('Oi eu sou o Cebson'.length);

let texto ="        Oi eu sou o clebson"

console.log(texto.length)

//indexOF
console.log(texto.indexOf('s')) 
console.log(texto.indexOf('clebson'))
console.log(texto.indexOf('cl'))
console.log(texto.indexOf('relampago')) //o resultado sera -1 pois não foi achado esta palavra no ('let')

//slice retira a palavra da string baseando sempre no indice, sendo que o primeiro caracter sera (0)

let palvra = texto.slice(0,3)

console.log(texto.slice(0,3))

console.log(texto.slice(11,19))

console.log(palvra)

//trim retira os espaços do começo da string ou seja, quando ele detectar o primeiro caracter alfanumerico ele começara a contar apartir dele

console.log(texto.trim())

//split transforma uma string em uma array

let nome = 'Oi eu sou o clebson'
console.log(nome.split()) //transformou toda a string em uma unica array
console.log(nome.split(' '))//transformou a string em varias array por intermedio do espaço entre aspas
console.log(nome.split('c'))//usa o caracter como parametro para criar duas array

//replace permite trocar caracteres

console.log(nome.replace('clebson','lenda'))

let textonovo = nome.replace('clebson','lenda')
console.log(textonovo)


//Vamos repassar o que aprendemos????

//<length> para saber o comprimento

//<indexOf()> para saber se algo existe

//<slice()> para pegar uma parte do texto

//<trim()> para remover os espaços em branco

//<split()> para gerar uma array

//<replace()> para alterar uma parte do texto
