//Exercise 2
var mensaje = "Hola Mundo\n";
swal.fire({
  title: "JavaScript \n Hola Mundo!",
  text: [
     "Qué facil es incluir 'comillas simples'" +
     ' y "comillas dobles"',
  ],
  icon: "success",
  confirmButtonText: "Aceptar",
  with: "90%",
  toast: true,
  position: "top",
  // imageUrl: 'img/1.png',
  // imageWidth: '20%',
});
console.log(mensaje);