// 1. Pense na melhor forma de representar tais contas, e por quê? (discutir coma
// equipe sobre as diferentes estruturas e qual é a mais conveniente)
// R: Para representar a conta, inicialmente utilizaríamos um objeto literal.

// 2 - Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.

  let dadosBancarios = {
    numeroConta: "",
    tipoConta: "",
    saldo: "",
    titularConta: "",
}

// 3 - Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. 

function Dados(numConta, tipoConta, saldo, tituloConta){
  this.numConta = numConta;
  this.tipoDados = tipoDados;
  this.saldo = saldo;
  this.tituloConta = tituloConta;
}

let conta1 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta2 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta3 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta4 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta5 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta6 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta7 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta8 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta9 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');
let conta10 = new Dados('12345','R$ 500.000,00', 'Melhor Homen Aranha');


// const dados = [tobeye,tobeyMaguire]


// 4 -A partir dos 10 usuários, gere uma lista onde todos eles convergem (lista de objetos)

// 5 - Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.