// Função para mudar cor de fundo
function pintar(cor) {
  document.body.style.backgroundColor = cor;
}

// Mostrar texto digitado
function mostrarTexto() {
  const texto = document.getElementById('texto').value;
  document.getElementById('resultado').textContent = texto;
}

// Submeter cor escrita
function submeterCor() {
  const cor = document.getElementById('corInput').value.toLowerCase();
  document.body.style.backgroundColor = cor;
}

// Contador
let contador = 0;
function contar() {
  contador++;
  document.getElementById('contador').textContent = contador;
}
