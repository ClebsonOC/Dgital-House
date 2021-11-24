function comprarComida(quantidade = 0){
    const preco = quantidade * 12;
    return preco;
}

function darDesconto(preco){
    const desconto = preco * 0.7
    return desconto
}
//Chamando ou invocando a função
const retornoPreco = comprarComida(2);

console.log('preco Inicial: ' + retornoPreco "R$ com desconto" + darDesconto(retornoPreco))