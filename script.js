function mostrarPassword() {
  let campo = document.getElementById("password");
  if (campo.type == "password") {
    campo.type = "text";
  } else {
    campo.type = "password";
  }
}

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Entrando a EclessySoft...");
});