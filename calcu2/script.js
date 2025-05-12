let display = document.getElementById("display");

function inserir(valor) {
  if (display.value === "0") {
    display.value = valor;
  } else {
    display.value += valor;
  }
}

function limpar() {
  display.value = "0";
}

function apagar() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Erro";
  }
}
