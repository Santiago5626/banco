console.log("El archivo JavaScript está cargado correctamente.");

const loginForm = document.querySelector("form");
const messageBox = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    console.log("Formulario enviado."); // Para comprobar que el evento de submit funciona
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        messageBox.textContent = "Bienvenido! Ha iniciado sesión";
        messageBox.style.backgroundColor = "#28a745";
        messageBox.classList.add("show");
        setTimeout(() => {
            messageBox.classList.remove("show");
        }, 3000);
    } else {
        messageBox.textContent = "Usuario o contraseña incorrectos";
        messageBox.style.backgroundColor = "#dc3545";
        messageBox.classList.add("show");
        setTimeout(() => {
            messageBox.classList.remove("show");
        }, 3000);
    }
});
