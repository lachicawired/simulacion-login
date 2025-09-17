function validarUsuario() {
  let nombre = document.getElementById("Nombre").value;
  let password = document.getElementById("Password").value;
  let mensajeElement = document.getElementById("mensaje");
  
  const usuariosPermitidos = [
    { nombre: "Andres", password: "1234" },
    { nombre: "Saul", password: "abcd" },
    { nombre: "Lachica", password: "pass2025" }
  ];


  let usuario = usuariosPermitidos.find(
    u => u.nombre === nombre && u.password === password
  );
if (usuario) {
    mensajeElement.textContent = `Bienvenido, ${usuario.nombre}!`;
    mensajeElement.style.color = "green";
  } else {
    mensajeElement.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    mensajeElement.style.color = "red";
  }
}
