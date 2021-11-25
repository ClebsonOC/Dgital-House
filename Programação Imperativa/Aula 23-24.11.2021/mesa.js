function Conta (numerocontaparm,tipoContaparam, saldoParm, titularParam){
    this.numeroConta = numerocontaparm
    this.tipo = tipoContaparam
    this.saldo =saldoParm
    this.titular = titularParam

    this.formataSaldo = function(){
        return 'R$' + this.saldo.toLocaleString('pt-BR');
    }
}

const conta1 = new Conta(12345678954, 'Conta Corrente', 27771.50, 'tilamburco');
const conta2 = new Conta(52347851590, 'Conta Poupança', 7458.10, 'Tilasco');

console.log(conta1.formataSaldo())
console.log(conta2.formataSaldo())

let lista = [conta1,conta2]

const banco = {
    clientes:lista,
    consultarClientes(titular){
        for(let cliente of this.clientes){
            if(cliente.titular == titular){
                return cliente;
            }
         }
    },
    consultarNumeroConta(numeroConta){
        for(let cliente of this.clientes){
            if(cliente.numero == numeroConta){
                return cliente;
            }
         }
    }

}

console.log(banco.consultarClientes('Tilasco'))
console.log(banco.consultarNumeroConta(27771.50))
