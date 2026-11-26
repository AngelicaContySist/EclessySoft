let campoClave = document.getElementById("clave");
let botonOjo = document.getElementById("verClave");
let botonIngresar = document.getElementById("btnIngresar");

botonOjo.addEventListener("click", function() {
  if (campoClave.type == "password") {
    campoClave.type = "text";
    botonOjo.textContent = "🙈";
  } else {
    campoClave.type = "password";
    botonOjo.textContent = "👁️";
  }
});

botonIngresar.addEventListener("click", function(e) {
  e.preventDefault();
  alert("Entrando a EclessySoft...");
});