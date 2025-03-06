let contadorClick = 0;

const boton = document.getElementById('miBoton');
const contadorTexto = document.getElementById('contador');

boton.addEventListener('click', function(){
    contadorClick++;
    contadorTexto.textContent = contadorClick;
});