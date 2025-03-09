document.getElementById('show').addEventListener('click', function(){
    const espacioContraseña = document.getElementById('contraseña');
    const type = espacioContraseña.getAttribute('type')  ===  'password' ? 'text' : 'password';
    espacioContraseña.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});