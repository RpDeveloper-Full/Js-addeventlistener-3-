const texto = document.querySelector("#texto");

document.addEventListener("keydown", (event) => {
  texto.textContent = `Presionaste la tecla: ${event.key}`;
});