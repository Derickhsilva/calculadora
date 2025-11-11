function insert(num) {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML += num;
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function calcular() {
  let resultado = document.getElementById('resultado').innerHTML;

  if (resultado) {
    try {
      let expressao = resultado
        .replace(/x/gi, '*')
        .replace(/÷/g, '/');

      let calculo = eval(expressao);
      document.getElementById('resultado').innerHTML = calculo;
    } catch (e) {
      document.getElementById('resultado').innerHTML = "Erro";
    }
  } else {
    document.getElementById('resultado').innerHTML = "Nada...";
  }
}
