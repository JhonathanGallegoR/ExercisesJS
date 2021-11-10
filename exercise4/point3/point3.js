var valores = [true, 5, false, "hola", "adios", 2,];
let totales = [];

for (let valor of valores) {
  totales.push(valor.length);
}

//console.log(valores);
//console.log(totales);

maximo = 0;

for (let i = 0; i < totales.length; i++) {
  if (totales[i] > maximo) {
    maximo = totales[i];
  }
}

let posiciontotales = totales.indexOf(maximo); 
//console.log(posiciontotales);
//console.log(valores[posiciontotales]);

console.log([
  "El elemento de texto con mayor elongacion tiene: " + maximo + 
  " letras y el texto es: " + valores[posiciontotales],
]);