let totalGeral;
limpar();

let somaCarrinho = 0;
document.getElementById('produto').value = '';
document.getElementById(`lista-produtos`).innerHTML = '';
document.getElementById('valor-total').innerHTML = `R$ ${somaCarrinho}`;
function adicionar() {
    if (document.getElementById('produto').value === '' || document.getElementById('quantidade').value === '') {
        alert('Preencha os campos para adicionar um produto ao carrinho');
            return;
    }
    let produtos = document.getElementById('produto').value;
    let nomeProduto = produtos.split('-')[0];
    let valorProduto = produtos.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    somaDaCompra = quantidade * valorProduto;


    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML= carrinho.innerHTML +`<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    
        somaCarrinho = somaCarrinho + somaDaCompra;
    let valorTotal = document.getElementById('valor-total');    
    valorTotal.innerHTML = `R$ ${somaCarrinho}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    somaCarrinho = 0;
    document.getElementById('valor-total').innerHTML = `R$ ${somaCarrinho}`;
}