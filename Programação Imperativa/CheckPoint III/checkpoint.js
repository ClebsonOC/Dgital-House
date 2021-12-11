let curso = require('./curso')

function Aluno (nome, quantidadeDeFaltas, notas){
    this.nome = nome;

    this.quantidadeDeFaltas = quantidadeDeFaltas;

    this.notas = notas;

    this.faltas = function (){
        this.quantidadeDeFaltas +=1;
    },

    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i <this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

}

let aluno1 = new Aluno ('Clebson', 0,[10,10,10,10]);
let aluno2 = new Aluno ('Joao', 15, [4,7,6,9])
let aluno3 = new Aluno ('Matheus', 4, [8,9,6,4])
let aluno4 = new Aluno ('Marcos', 4, [8,9,8,7])
let aluno5 = new Aluno ('Leandro', 4, [5,5,6,5])

curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);
curso.curso.novoEstudante(aluno3);
curso.curso.novoEstudante(aluno4);
curso.curso.novoEstudante(aluno5);

console.log(curso.curso.calculoAprovadoOuReporvado)
console.log(curso.curso.listAlunos())



//console.log (curso.curso.listaDeEstudantes);