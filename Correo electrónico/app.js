document.getElementById('myForm').addEventListener("submit", function(event) {
    let correo = document.getElementById('correo').value;
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,6}$/; 

    if (!regex.test(correo)) {
        event.preventDefault();
        alert("Correo inválido");
    } else {
        alert ("Correo válido. Enviando...");
    }
});