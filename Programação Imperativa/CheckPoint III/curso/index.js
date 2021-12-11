module.exports = {
    curso: {
        nomeDoCurso: 'ProgramacaoImperativa',
        notaAprovacao: 8,
        faltasMaximas: 10,
        listaDeEstudantes: [],
        novoEstudante: function (estudante) {
            this.listaDeEstudantes.push(estudante);
        },
        calculoAprovadoOuReporvado: function (aluno) {
            let media = aluno.calcularMedia();
            let resultado;

            if (aluno.quantidadeDeFaltas < this.faltasMaximas && media >= this.notaAprovacao) {
                resultado = true;

            }else if (aluno.quantidadeDeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)) {
                resultado = true;
            } else{
                resultado = false;
            }

            return resultado;
        },
        listAlunos: function () {
            let nameList = [];
            for (let i = 0; i < this.listaDeEstudantes.length; i++){
                nameList.push(this.calculoAprovadoOuReporvado(this.listaDeEstudantes[i]));
            }
            //for (let i in this.listaDeEstudantes.length) 
            return nameList;
        }
        
    }
}