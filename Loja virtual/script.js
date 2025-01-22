function adicionarAoCarrinho(produto, preco, quantidadeId) {
    var quantidade = parseInt(document.getElementById(quantidadeId).value);
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verifica se o produto já está no carrinho
    var produtoExistente = carrinho.find(item => item.produto === produto);
    if (produtoExistente) {
        // Atualiza a quantidade do produto existente
        produtoExistente.quantidade += quantidade;
    } else {
        // Adiciona o novo produto ao carrinho
        carrinho.push({ produto: produto, preco: preco, quantidade: quantidade });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    var carrinhoDiv = document.getElementById("itensCarrinho");
    var item = document.createElement("div");
    item.textContent = produto + " - " + quantidade + " Kg - R$ " + (preco * quantidade) + ",00";
    carrinhoDiv.appendChild(item);

    // Mostra a notificação
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 2000);

    // Atualiza a notificação do carrinho
    let totalItensCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById("cart-notification").textContent = totalItensCarrinho;
    document.getElementById("cart-notification").style.display = "block";
}
