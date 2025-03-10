const notificacion = document.getElementById('notificacion');
const boton = document.getElementById('boton');
const contador = document.getElementById('contador');

boton.addEventListener('click', function() {
    notificacion.style.display = "block";
    
    let tiempoRestante = 3;
    contador.textContent = tiempoRestante;

    let intervaloActivo = setInterval(() => {
        tiempoRestante--;
        contador.textContent = tiempoRestante;
        
        if (tiempoRestante === 0) {
            clearInterval(intervaloActivo);
            setTimeout(() => {
                notificacion.style.display = "none";
            }, 500);
        }
    }, 1000);
});


