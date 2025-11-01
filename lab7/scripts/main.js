// Inicialização do LocalStorage
const STORAGE_KEYS = {
  SELECTED_PRODUCTS: 'produtos-selecionados',
  CART: 'cesto'
};

localStorage.setItem(STORAGE_KEYS.SELECTED_PRODUCTS, localStorage.getItem(STORAGE_KEYS.SELECTED_PRODUCTS) ?? JSON.stringify([]));

const listaDeProdutos = [];

// Carrega os produtos da API
async function carregarProdutos() {
  try {
    const response = await fetch('https://deisishop.pythonanywhere.com/products/');
    if (!response.ok) throw new Error('Erro ao buscar produtos da API');

    const produtos = await response.json();
    listaDeProdutos.push(...produtos.map(prod => ({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      description: prod.description,
      category: prod.category,
      image: prod.image,
      rating: prod.rating
    })));

    criarProdutos();
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
}

// Eventos de filtro, ordenação, busca e compra
document.getElementById('filtro-categoria').addEventListener('change', e => filtrarProdutos(e.target.value));
document.getElementById('ordenar-preco').addEventListener('change', e => ordenarProdutos(e.target.value));
document.getElementById('pesquisa').addEventListener('input', e => pesquisarProdutos(e.target.value.toLowerCase()));
document.querySelector('button').addEventListener('click', processarCompra);

// Criação de elementos na UI
function criarProdutos(produtos = listaDeProdutos) {
  const section = document.getElementById('produtos');
  section.innerHTML = produtos.map(criarCardProduto).join('');
  adicionarEventosAoCesto();
}

function criarCardProduto({ title, image, description, price }) {
  return `
    <div class="produto">
      <h3>${title}</h3>
      <img src="${image}" alt="${title}">
      <p>${description}</p>
      <p>Preço: € ${price.toFixed(2)}</p>
      <button class="adicionar-cesto">+ Adicionar ao cesto</button>
    </div>
  `;
}

function adicionarEventosAoCesto() {
  document.querySelectorAll('.adicionar-cesto').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      adicionarAoCesto(listaDeProdutos[index]);
    });
  });
}

// Funções de filtro, ordenação e pesquisa
function filtrarProdutos(categoria) {
  const filtrados = categoria === 'todos'
    ? listaDeProdutos
    : listaDeProdutos.filter(p => p.category === categoria);
  criarProdutos(filtrados);
}

function ordenarProdutos(ordem) {
  const ordenados = [...listaDeProdutos].sort((a, b) => ordem === 'crescente' ? a.price - b.price : b.price - a.price);
  criarProdutos(ordenados);
}

function pesquisarProdutos(termo) {
  const filtrados = listaDeProdutos.filter(p => p.title.toLowerCase().includes(termo));
  criarProdutos(filtrados);
}

// Funções do cesto de compras
function adicionarAoCesto(produto) {
  const cesto = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  cesto.push(produto);
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cesto));
  atualizarCesto();
}

function removerDoCesto(index) {
  const cesto = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  cesto.splice(index, 1);
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cesto));
  atualizarCesto();
}

function atualizarCesto() {
  const container = document.getElementById('produtos-selecionados');
  container.innerHTML = '';

  JSON.parse(localStorage.getItem(STORAGE_KEYS.CART))?.forEach((produto, index) => {
    const item = criarElementoDoCesto(produto, index);
    container.appendChild(item);
  });

  calcularTotal();
}

function criarElementoDoCesto(produto, index) {
  const { title, image, price } = produto;
  const div = document.createElement('div');
  div.className = 'produto-cesto';
  div.innerHTML = `
    <h3>${title}</h3>
    <img src="${image}" alt="${title}" width="100">
    <p>Preço: € ${price.toFixed(2)}</p>
    <button class="remover-item">Remover</button>
  `;
  div.querySelector('.remover-item').addEventListener('click', () => removerDoCesto(index));
  return div;
}

// Cálculo do valor total
function calcularTotal() {
  const cesto = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  let total = cesto.reduce((soma, { price }) => soma + price, 0);

  if (document.querySelector('input[name="deisi"]:checked')) total *= 0.95;
  if (document.getElementById('codigo').value === 'black-friday') total *= 0.95;

  document.getElementById('total').textContent = `Preço Total: € ${total.toFixed(2)}`;
  return total;
}

// Processamento da compra
async function processarCompra() {
  const cesto = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  if (!cesto.length) return alert('Erro: Não foram selecionados produtos');

  const total = calcularTotal();
  const dadosCompra = {
    totalCost: total.toFixed(2),
    reference: '201124-0004',
    example: 'Excelente escolha! A DEISI Shop agradece a sua preferência!',
    error: ''
  };

  try {
    const response = await fetch('https://deisishop.pythonanywhere.com/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosCompra)
    });
    const resultado = await response.json();
    alert(resultado.error ? `Erro: ${resultado.error}` : resultado.example);
  } catch (error) {
    console.error('Erro ao processar a compra:', error);
    alert('Erro ao processar a compra');
  }
}

carregarProdutos();

