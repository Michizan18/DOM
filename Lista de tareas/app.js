let tareas = [];
let ultimoId= 0;

function generarId() {
    ultimoId++;
    return ultimoId;
}

function agregarTarea (agregar) {
    const nuevaTarea = {
        id: generarId(),
        agregar: agregar
    }

    tareas.push(nuevaTarea);
    mostrarTareas();
    guardarTareas();
}

function mostrarTareas() {
    const contenedor = document.getElementById('contenedorTareas');

    contenedor.innerHTML = "";

    if (tareas.length===0) {
        contenedor.innerHTML = "<p>No hay tareas por hacer. ¡Añade una!</p>";
        return;
    }

    tareas.forEach(tarea => {
        const elementoTarea = document.createElement('div');
        elementoTarea.className = 'tarea';
        elementoTarea.dataset.id = tarea.id;

        let contentHTML = `
            <div class="tarea-encabezado">
                <button class="borrar-tarea" data-id="${tarea.id}">Borrar</button>
            </div>
            <input type="checkbox" id="checkbox-${tarea.id}">
            <label for="checkbox-${tarea.id}">${tarea.agregar}</label>
        `;

        elementoTarea.innerHTML = contentHTML;
        contenedor.appendChild(elementoTarea);

        const borrarBtn = elementoTarea.querySelector('.borrar-tarea');
        borrarBtn.addEventListener('click', function() {
            const tareaId = this.getAttribute('data-id');
            eliminarTarea(tareaId);
        });
    });
}

function eliminarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id == id);

    if (index !== -1) {
        tareas.splice(index, 1);
        mostrarTareas();
        guardarTareas();
    }
}

function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    localStorage.setItem('ultimoId', ultimoId);
}

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    const idGuardado = localStorage.getItem('ultimoId');

    if (idGuardado) {
        ultimoId = parseInt(idGuardado);
    }

    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
        mostrarTareas();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarTareas();
    
    const formulario = document.getElementById('contenedorForm');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const agregar = document.getElementById('agregar').value.trim();

        if (agregar === '') {
            alert('Por favor completa el campo requerido');
            return;
        } 

        agregarTarea(agregar);
        document.getElementById('agregar').value = '';
    });
});