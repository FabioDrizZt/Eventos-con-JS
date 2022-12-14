function qs(elemento) {
  return document.querySelector(elemento);
}

let resultado = qs(".resultado");
let btnBajar = qs(".bajar");
let btnSubir = qs(".subir");
let display = qs("#display");
let inputText = qs("#prueba");
let btnConteo = qs(".conteo");
let cronometro = qs(".cronometro");
let clear = qs(".clear");

let valor = 0;
resultado.innerText = valor;

btnBajar.addEventListener("click", function () {
  // resultado.innerText -= 1;

  valor--;
  resultado.innerText = valor;
});

btnSubir.addEventListener("click", function () {
  // resultado.innerText = parseInt(resultado.innerText) + 1; // resultado.innerText++

  valor++;
  resultado.innerText = valor;
});

inputText.addEventListener("keydown", function () {
  display.style.color = "red";
});

inputText.addEventListener("keyup", function () {
  display.style.color = "black";
});

btnConteo.addEventListener("click", function () {
  setTimeout(function () {
    alert("Pasaron 5 segundos");
  }, 5000);
});
