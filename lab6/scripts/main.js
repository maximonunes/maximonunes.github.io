const produtos = [
  {
    "id": 1,
    "título": "Fjallraven - Mochila Foldsack nº 1, acomoda 15 laptops",
    "preço": 109,95,
    "description": "Sua mochila perfeita para o uso diário e caminhadas na floresta. Guarde seu laptop (de até 15 polegadas) no compartimento acolchoado, seu dia a dia",
    "categoria": "roupas masculinas",
    "imagem": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "avaliação": {
      "taxa": 3,9,
      "contagem": 120
    }
  },
  {
    "id": 2,
    "título": "Camisetas masculinas casuais premium slim fit",
    "preço": 22,3,
    Descrição: "Estilo justo, manga longa raglan contrastante, carcela Henley com três botões, tecido leve e macio para uso respirável e confortável. Camisas com costura sólida e gola redonda, feitas para durabilidade e um ótimo caimento para uso casual e fãs de beisebol. A gola redonda estilo Henley inclui uma carcela de três botões."
    "categoria": "roupas masculinas",
    "imagem": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "avaliação": {
      "taxa": 4.1,
      "contagem": 259
    }
  },
  {
    "id": 3,
    "título": "Jaqueta de algodão masculina",
    "preço": 55,99,
    "description": "Ótimos casacos para a primavera/outono/inverno, adequados para diversas ocasiões, como trabalho, caminhadas, acampamentos, escaladas, ciclismo, viagens ou outras atividades ao ar livre. Ótima opção de presente para você ou seu familiar. Um carinhoso abraço ao pai, marido ou filho neste Dia de Ação de Graças ou Natal.",
    "categoria": "roupas masculinas",
    "imagem": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "avaliação": {
      "taxa": 4,7,
      "contagem": 500
    }
  },
  {
    "id": 4,
    "título": "Casual Slim Fit Masculino",
    "preço": 15,99,
    "description": "A cor pode ser ligeiramente diferente entre a tela e a prática. / Observe que a constituição física varia de pessoa para pessoa, portanto, informações detalhadas sobre o tamanho devem ser revisadas abaixo na descrição do produto.",
    "categoria": "roupas masculinas",
    "imagem": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "avaliação": {
      "taxa": 2.1,
      "contagem": 430
    }
  },
  {
    "id": 5,
    "título": "Pulseira de corrente feminina John Hardy Legends Naga Gold & Silver Dragon Station",
    "preço": 695,
    "description": "Da nossa Coleção Lendas, o Naga foi inspirado no mítico dragão aquático que protege a pérola do oceano. Use-o voltado para dentro para receber amor e abundância, ou para fora para proteção."
    "categoria": "joias",
    "imagem": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "avaliação": {
      "taxa": 4,6,
      "contagem": 400
    }
  },
  {
    "id": 6,
    "título": "Pequeno Micropave de Ouro Maciço",
    "preço": 168,
    "description": "Satisfação garantida. Devolva ou troque qualquer pedido em até 30 dias. Projetado e vendido pela Hafeez Center nos Estados Unidos. Satisfação garantida. Devolva ou troque qualquer pedido em até 30 dias.",
    "categoria": "joias",
    "imagem": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "avaliação": {
      "taxa": 3,9,
      "contagem": 70
    }
  },
  {
    "id": 7,
    "título": "Princesa banhada a ouro branco",
    "preço": 9,99,
    "description": "Anel de noivado solitário com diamantes, clássico, criado para ela. Presentes para mimar ainda mais o seu amor em noivado, casamento, aniversário, Dia dos Namorados...",
    "categoria": "joias",
    "imagem": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "avaliação": {
      "taxa": 3,
      "contagem": 400
    }
  },
  {
    "id": 8,
    "título": "Coruja perfurada banhada a ouro rosa em aço inoxidável duplo",
    "preço": 10,99,
    "description": "Brincos de alargamento duplo tipo túnel banhados a ouro rosé. Feitos de aço inoxidável 316L",
    "categoria": "joias",
    "imagem": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "avaliação": {
      "taxa": 1,9,
      "contagem": 100
    }
  },
  {
    "id": 9,
    "título": "Disco rígido externo portátil WD Elements de 2 TB - USB 3.0",
    "preço": 64,
    "description": "Compatibilidade com USB 3.0 e USB 2.0 Transferências rápidas de dados Melhoram o desempenho do PC Alta capacidade; Compatibilidade Formatado em NTFS para Windows 10, Windows 8.1, Windows 7; A reformatação pode ser necessária para outros sistemas operacionais; A compatibilidade pode variar dependendo da configuração de hardware e do sistema operacional do usuário",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "avaliação": {
      "taxa": 3,3,
      "contagem": 203
    }
  },
  {
    "id": 10,
    "título": "SanDisk SSD PLUS 1 TB SSD interno - SATA III 6 Gb/s",
    "preço": 109,
    "description": "Fácil atualização para inicialização, desligamento, carregamento de aplicativos e resposta mais rápidos (em comparação com o disco rígido SATA 2.5 de 5400 RPM; com base em especificações publicadas e testes de benchmarking internos usando pontuações de vantagem do PCMark) Aumenta o desempenho de gravação em picos, tornando-o ideal para cargas de trabalho típicas de PC O equilíbrio perfeito entre desempenho e confiabilidade Velocidades de leitura/gravação de até 535 MB/s/450 MB/s (com base em testes internos; o desempenho pode variar dependendo da capacidade da unidade, dispositivo host, sistema operacional e aplicativo.)",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    "avaliação": {
      "taxa": 2,9,
      "contagem": 470
    }
  },
  {
    "id": 11,
    "título": "SSD Silicon Power de 256 GB 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "preço": 109,
    "description": "A memória flash NAND 3D é aplicada para proporcionar altas velocidades de transferência. Velocidades de transferência notáveis ​​que permitem inicialização mais rápida e melhor desempenho geral do sistema. A avançada tecnologia de cache SLC permite aumento de desempenho e maior vida útil. Design fino de 7 mm, adequado para Ultrabooks e notebooks ultrafinos. Suporta comando TRIM, tecnologia Garbage Collection, RAID e ECC (Verificação e Correção de Erros) para proporcionar desempenho otimizado e confiabilidade aprimorada.",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "avaliação": {
      "taxa": 4,8,
      "contagem": 319
    }
  },
  {
    "id": 12,
    "título": "O disco rígido WD Gaming de 4 TB funciona com o disco rígido externo portátil do Playstation 4",
    "preço": 114,
    "description": "Expanda sua experiência de jogo no PS4, jogue em qualquer lugar, rápido e fácil, configuração elegante com alta capacidade, garantia limitada do fabricante de 3 anos",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    "avaliação": {
      "taxa": 4,8,
      "contagem": 400
    }
  },
  {
    "id": 13,
    "título": "Acer SB220Q bi 21,5 polegadas Full HD (1920 x 1080) IPS Ultrafino",
    "preço": 599,
    "description": "Tela IPS widescreen Full HD (1920 x 1080) de 21,5 polegadas e tecnologia Radeon Free Sync. Sem compatibilidade com suporte VESA. Taxa de atualização: 75 Hz - Usando porta HDMI. Design sem quadros | ultrafino | Tempo de resposta de 4 ms | Painel IPS. Proporção da tela: 16:9. Cores suportadas: 16,7 milhões de cores. Brilho: 250 nits. Ângulo de inclinação: 5 a 15 graus. Ângulo de visão horizontal: 178 graus. Ângulo de visão vertical: 178 graus, 75 hertz",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "avaliação": {
      "taxa": 2,9,
      "contagem": 250
    }
  },
  {
    "id": 14,
    "título": "Monitor gamer curvo Samsung CHG90 de 49 polegadas e 144 Hz (LC49HG90DMNXZA) — tela super ultrawide QLED",
    "preço": 999,99,
    "description": "MONITOR JOGADOR CURVO SUPER ULTRAWIDE 32:9 DE 49 POLEGADAS com tela dupla de 27 polegadas lado a lado, TECNOLOGIA QUANTUM DOT (QLED), suporte HDR e calibração de fábrica que proporciona cores e contraste incrivelmente realistas e precisos. ALTA TAXA DE ATUALIZAÇÃO DE 144 Hz e tempo de resposta ultrarrápido de 1 ms trabalham para eliminar desfoque de movimento, efeitos fantasmas e reduzir o atraso de entrada",
    "categoria": "eletrônicos",
    "imagem": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    "avaliação": {
      "taxa": 2,2,
      "contagem": 140
    }
  },
  {
    "id": 15,
    "título": "BIYLACLESEN Jaqueta de snowboard feminina 3 em 1, casacos de inverno",
    "preço": 56,99,
    "description": "Observação: A jaqueta é tamanho padrão dos EUA. Escolha o tamanho como seu tamanho habitual. Material: 100% poliéster; Forro removível: lã quente. Forro funcional removível: suave para a pele, leve e quente. Jaqueta com forro de gola alta, mantém você aquecido em climas frios. Bolsos com zíper: 2 bolsos com zíper para as mãos, 2 bolsos com zíper no peito (o suficiente para guardar cartões ou chaves) e 1 bolso oculto dentro. Bolsos com zíper para as mãos e bolso oculto mantêm seus pertences seguros. Design humanizado: capuz ajustável e removível e punho ajustável para evitar vento e água, para um ajuste confortável. O design removível 3 em 1 oferece mais conveniência, você pode separar o casaco e a parte interna conforme necessário ou usá-los juntos. É adequado para diferentes estações e ajuda você a se adaptar a diferentes climas",
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "avaliação": {
      "taxa": 2,6,
      "contagem": 235
    }
  },
  {
    "id": 16,
    "título": "Jaqueta feminina de couro sintético com capuz removível Lock and Love",
    "preço": 29,95,
    "description": "100% POLIURETANO (exterior), 100% POLIÉSTER (forro), 75% POLIÉSTER, 25% ALGODÃO (SUÉTER), Material de couro sintético para estilo e conforto / 2 bolsos na frente, Jaqueta de couro sintético estilo jeans com capuz 2 em 1, Detalhe de botão na cintura / Costura detalhada nas laterais, LAVAR SOMENTE À MÃO / NÃO USAR ALVEJANTE / SECAR NO VARÃO / NÃO PASSAR A FERRO",
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "avaliação": {
      "taxa": 2,9,
      "contagem": 340
    }
  },
  {
    "id": 17,
    "título": "Jaqueta de chuva feminina corta-vento listrada para escalada",
    "preço": 39,99,
    "description": "Leve, perfeito para viagens ou uso casual --- Manga longa com capuz e cordão ajustável na cintura. Capa de chuva com fecho frontal por botão e zíper, forro totalmente listrado. A capa de chuva tem 2 bolsos laterais, um bom tamanho para guardar todos os tipos de coisas, cobre os quadris e o capuz é generoso, mas não exagerado. O capuz forrado de algodão com cordões ajustáveis ​​dá um visual realmente estiloso.",
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "avaliação": {
      "taxa": 3,8,
      "contagem": 679
    }
  },
  {
    "id": 18,
    "título": "MBJ Feminino Sólido Manga Curta Gola Canoa V ",
    "preço": 9,85,
    "description": "95% RAYON 5% SPANDEX, Fabricado nos EUA ou importado, Não usar alvejante, Tecido leve com ótima elasticidade para maior conforto, Mangas e decote canelados / Costura dupla na bainha inferior",
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    "avaliação": {
      "taxa": 4,7,
      "contagem": 130
    }
  },
  {
    "id": 19,
    "título": "Opna Moisture de manga curta feminina",
    "preço": 7,95,
    "description": "100% poliéster, lavagem à máquina, interlock 100% poliéster catiônico, lavagem à máquina e pré-encolhimento para um ótimo ajuste, leve, espaçoso e altamente respirável com tecido que absorve a umidade e ajuda a mantê-la longe, tecido leve e macio com gola V confortável e um ajuste mais justo, proporcionando uma silhueta elegante e mais feminina e maior conforto",
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "avaliação": {
      "taxa": 4,5,
      "contagem": 146
    }
  },
  {
    "id": 20,
    "título": "Camiseta feminina DANVOUY casual de algodão curta",
    "preço": 12,99,
    Descrição: 95% algodão, 5% elastano, Características: Casual, Manga curta, Estampa de letras, Gola em V, Camisetas da moda, O tecido é macio e tem alguma elasticidade. Ocasião: Casual/Escritório/Praia/Escola/Casa/Rua. Estação: Primavera, Verão, Outono, Inverno.
    "categoria": "roupas femininas",
    "imagem": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    "avaliação": {
      "taxa": 3,6,
      "contagem": 145
    }
  }
]

let carrinho = [];

window.onload = function() {
  const salvo = localStorage.getItem("carrinhoLoja");
  if (salvo) {
    carrinho = JSON.parse(salvo);
  }
  criarProduto();
  atualizarCesto();
};

function criarProduto() {
  const secProdutos = document.querySelector("#produtos");
  secProdutos.innerHTML = "";
  produtos.forEach((produto, i) => {
    const art = document.createElement("article");
    art.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}">
      <h3>${produto.title}</h3>
      <p>Preço: ${produto.price.toFixed(2)} €</p>
      <button onclick="adicionar(${i})">+ Adicionar ao Cesto</button>
    `;
    secProdutos.appendChild(art);
  });
}

function adicionar(i) {
  carrinho.push(produtos[i]);
  atualizarCesto();
}

function remover(i) {
  carrinho.splice(i, 1);
  atualizarCesto();
}

function atualizarCesto() {
  const sec = document.querySelector(".lista-carrinho");
  sec.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, i) => {
    const art = document.createElement("article");
    art.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>Preço: ${item.price.toFixed(2)} €</p>
      <button onclick="remover(${i})">- Remover do Cesto</button>
    `;
    sec.appendChild(art);
    total += item.price;
  });

  document.querySelector(".total").textContent = `Custo total: ${total.toFixed(2)} €`;
  localStorage.setItem("carrinhoLoja", JSON.stringify(carrinho));
}

document.getElementById("limpar-carrinho").addEventListener("click", () => {
  carrinho = [];
  atualizarCesto();
});
