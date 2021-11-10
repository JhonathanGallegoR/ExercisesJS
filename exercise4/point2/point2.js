var valores = [true, false];

let elemento1 = valores[0];
let elemento2 = valores[1];

var operador1 = function (a, b) {   //AND
    return a && b;
  };
var operador2 = function (a, b) {   //OR
    return a || b;
  };

console.log(operador1(elemento1, elemento2));
console.log(operador2(elemento1, elemento2));