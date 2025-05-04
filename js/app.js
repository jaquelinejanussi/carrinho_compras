let valor_total = 0;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto_selecionado = document.getElementById('produto').value;
    let nome_produto = produto_selecionado.split('-')[0]; //separar de valores
    let valor_unitario = produto_selecionado.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //alert(nome_produto);//teste
    //alert(valor_unitario);//teste
    if (document.getElementById('quantidade').value === '' || document.getElementById('quantidade').value ==='0'){
        alert('Digite a quantidade do produto selecionado');
        return;
    }
    //alert(quantidade);//teste
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valor_unitario;
    //alert(preco);
    //adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nome_produto} <span class="texto-azul">R$ ${preco}</span></section>`;
    //atualizar o valor total
    valor_total = valor_total + preco;
    //alert(valor_total);//teste
    let valor_total_mostrar = document.getElementById('valor-total');
    valor_total_mostrar.textContent = `R$ ${valor_total}`;
    document.getElementById('quantidade').value = 0;
}
       
function limpar(){
    valor_total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}

    
    
    