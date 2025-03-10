const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const parentesco = document.getElementById('parentesco');
const cuerpo = document.getElementById('cuerpo');


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nuevaFila = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdEdad = document.createElement('td');
    const tdParentesco = document.createElement('td');

    tdNombre.textContent = nombre.value;
    tdEdad.textContent = edad.value;
    tdParentesco.textContent = parentesco.value;

    nuevaFila.appendChild(tdNombre);
    nuevaFila.appendChild(tdEdad);
    nuevaFila.appendChild(tdParentesco);

    cuerpo.appendChild(nuevaFila);
});