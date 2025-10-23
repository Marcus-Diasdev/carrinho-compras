let totalVl = 0;
const produtos = document.getElementById('lista-produtos').querySelector('section');
const total = document.getElementById('valor-total');
produtos.innerHTML = '';
total.textContent = `R$ ${totalVl}`;
let produto1 = 0;
let produto2 = 0;
let produto3 = 0;

function adicionar() {
    let opcao = document.getElementById('produto').value;
    let qtd = parseInt(document.getElementById('quantidade').value);
    let nome = opcao.split(' -')[0];
    let valor = parseFloat(opcao.split('$')[1]);

    if (qtd > 0 && qtd < 13) {
        switch (opcao) {
        case 'Fone de ouvido - R$100' :
            produto1 = produto1 + (1 * qtd);
            exibirProdutos(qtd, nome, valor, produto1);
            break;
        case 'Celular - R$1400' :
            produto2 = produto2 + (1 * qtd);
            exibirProdutos(qtd, nome, valor, produto2);
            break;
        case 'Oculus VR - R$5000' :
            produto3 = produto3 + (1 * qtd);
            exibirProdutos(qtd, nome, valor, produto3);
            break;
    }
    } else {
        alert('Digite uma quantidade entre 1 e 12');
    }
    document.getElementById('quantidade').value = 1;
}

function exibirProdutos(qtd, nome, valor, max) {
    if (max >= 13) {
        alert(`Você pode comprar um máximo de 12 ${nome}!`);
        return;
    }
    const quebra = document.createElement('br');
    const textoQtd = document.createElement('span');
    const textoProduto = document.createElement('span');
    const textoValor = document.createElement('span');
    textoQtd.textContent = `${qtd}x`;
    textoProduto.textContent = ` ${nome} `;
    textoValor.textContent = `R$ ${valor}`;
    textoQtd.classList.add('texto-azul');
    textoValor.classList.add('texto-azul');
    produtos.appendChild(quebra);
    produtos.appendChild(textoQtd);
    produtos.appendChild(textoProduto);
    produtos.appendChild(textoValor);
    totalVl = totalVl + (valor * qtd);
    total.textContent = `R$${totalVl}`;
}

function limpar() {
    if (!confirm(`Tem certeza que quer remover todos os itens do seu carrinho?`)) return;
    totalVl = 0;
    produto1 = 0;
    produto2 = 0;
    produto3 = 0;
    produtos.innerHTML = '';
    total.textContent = `R$ ${totalVl}`;
    document.getElementById('quantidade').value = 0;
}