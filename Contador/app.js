let tiempoRestante = 10;
let intervaloActivo = null;

const contador = document.getElementById('contador');

document.getElementById('inicia').addEventListener('click', function() {
    if (intervaloActivo) return;

    tiempoRestante = 10;
    contador.textContent = tiempoRestante;

    intervaloActivo = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            contador.textContent = tiempoRestante;
        } else {
            clearInterval(intervaloActivo);
            intervaloActivo = null;
            contador.textContent = '¡El contador finalizó!';
        }
    }, 1000);
});