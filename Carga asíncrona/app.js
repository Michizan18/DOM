const boton = document.getElementById('boton');
const contenido = document.getElementById('contenido');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function() {
   mensaje.textContent = "Cargando contenido...";
   contenido.style.display = "none";

   setTimeout(() => {
        contenido.innerHTML = "<h2>Contenido cargado</h2><p>Este es el texto que aparece</p>";
        contenido.style.display = "block";
        mensaje.textContent = "";
   }, 2000)
})