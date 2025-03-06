const boton = document.getElementById('tema');

boton.addEventListener('click', () => {
    document.body.classList.toggle('temaOscuro');
    document.body.classList.toggle('temaClaro');

    if (document.body.classList.contains('temaOscuro')){
        boton.textContent = 'Cambiar a Claro';
    } else if (document.body.classList.contains('temaClaro')){
        boton.textContent = 'Cambiar a Oscuro';
    }
});